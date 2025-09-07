import express, { application } from 'express'
import type { Request, Response, Router } from 'express'
import * as z from 'zod'
import { type Film, data } from '../data/filmList.js'

const router: Router = express.Router()

const FilmSchema = z.object({
  id: z.string().min(1).max(20).regex(/^[a-zA-Z0-9]+$/),
  title: z.string().min(2).max(50).regex(/^[a-zA-ZåäöÅÄÖ :\-]+$/),
  year: z.number().min(1500).max(2100),
  image: z.string().refine(
    (url) => {
      // List of allowed image file extensions
      const validExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
      // Convert URL to lowercase to handle case-insensitive extensions
      const lowerCaseUrl = url.toLowerCase();
      // Check if the URL ends with any of the valid extensions
      return validExtensions.some((ext) => lowerCaseUrl.endsWith(ext));
    },
    {
      message: 'URL must point to an image file (jpg, jpeg, png, gif, or webp)',
    }
  ),
});

router.get('/', (req, res) => {
	res.send(data)
})

interface IdParam {
	id: string;
}
router.get('/:id', (req: Request<IdParam>, res: Response<Film>) => {
	const id: string = req.params.id
	const maybeFilm: Film | undefined = data.find(film => film.id === id)
	// Två möjligheter: antingen finns filmen med "id" eller inte
	if( maybeFilm ) {
		res.send(maybeFilm)   // status 200 OK

	} else {
		res.sendStatus(404)  // 404 Not Found
	}
})

router.post('/', (req: Request<{}, void, Film>, res) => {
	
	try {
		let newFilm = FilmSchema.parse(req.body) as Film
		data.push(newFilm)
		res.sendStatus(201)  // 201 Created, resurs skapad på servern
	} catch(error) {
		res.sendStatus(400)  // 400 Bad request, dåligt utformat request eftersom det inte är ett korrekt film-objekt
	}
})

router.delete('/:id', (req: Request<IdParam>, res: Response<void>) => {
	const id: string = req.params.id
	const index = data.findIndex(film => film.id === id)

	if( index !== -1 ) {
		data.splice(index, 1)
		res.sendStatus(200)  // 200 OK
	} else {
		res.sendStatus(404)  // 404 Not found, det fanns ingen film med detta id
	}
})

router.put('/:id', (req: Request<IdParam, void, Film>, res) => {
  const id: string = req.params.id
  const index = data.findIndex(film => film.id === id)
  if( index !== -1 ) {
    try {
	  const newFilm = FilmSchema.parse(req.body) as Film
      data[index] = newFilm
      res.sendStatus(200) 
    } catch(error) {
      res.sendStatus(400) 
    } 
  } else {
    res.sendStatus(404)  
  } 
})
export default router