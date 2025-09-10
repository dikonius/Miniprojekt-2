import express, { application } from 'express'
import type { Request, Response, Router } from 'express'
import * as z from 'zod'
import { type Review, reviewData } from '../data/reviewsList.js'

const reviewRouter: Router = express.Router()

const ReviewSchema = z.object({
  filmId: z.string().min(1).max(50).regex(/^[a-zA-Z0-9åäöÅÄÖ :,\-]+$/),
  reviewId: z.string().min(1).max(50).regex(/^[a-zA-Z0-9åäöÅÄÖ :,\-]+$/),
  score: z.number().min(1).max(100),
  reviewer: z.string().min(1).max(50).regex(/^[a-zA-Z0-9åäöÅÄÖ :\-()]+$/)
});

reviewRouter.get('/', (req, res) => {
	res.send(reviewData)
})

interface IdParam {
	id: string;
}
reviewRouter.get('/:id', (req: Request<IdParam>, res: Response<Review>) => {
	const id: string = req.params.id
	const maybeReview: Review | undefined = reviewData.find(review => review.reviewId === id)
	// Två möjligheter: antingen finns filmen med "id" eller inte
	if( maybeReview ) {
		res.send(maybeReview)   // status 200 OK

	} else {
		res.sendStatus(404)  // 404 Not Found
	}
})

reviewRouter.post('/', (req: Request<{}, void, Review>, res) => {
	
	try {
		let newReview = ReviewSchema.parse(req.body) as Review
		reviewData.push(newReview)
		res.sendStatus(201)  // 201 Created, resurs skapad på servern
	} catch(error) {
		res.sendStatus(400)  // 400 Bad request, dåligt utformat request eftersom det inte är ett korrekt film-objekt
	}
})

reviewRouter.delete('/:id', (req: Request<IdParam>, res: Response<void>) => {
	const id: string = req.params.id
	const index = reviewData.findIndex(review => review.reviewId === id)

	if( index !== -1 ) {
		reviewData.splice(index, 1)
		res.sendStatus(200)  // 200 OK
	} else {
		res.sendStatus(404)  // 404 Not found, det fanns ingen film med detta id
	}
})

reviewRouter.put('/:id', (req: Request<IdParam, void, Review>, res) => {
  const id: string = req.params.id
  const index = reviewData.findIndex(review => review.reviewId === id)
  if( index !== -1 ) {
    try {
	  const newReview = ReviewSchema.parse(req.body) as Review
      reviewData[index] = newReview
      res.sendStatus(200) 
    } catch(error) {
      res.sendStatus(400) 
    } 
  } else {
    res.sendStatus(404)  
  } 
})
export default reviewRouter