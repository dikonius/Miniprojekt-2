interface Film {
	id: string;
	title: string;
    year: number;
    image: string;
}

const data: Film[] = [
  {
    id: "77",
    title: "Test",
    year: 1900,
    image: "https://test.jpg"
  },
  {
    id: "2",
    title: "Rain Man",
    year: 1988,
    image: "https://upload.wikimedia.org/wikipedia/en/b/b7/Rain_Man_poster.jpg"
  },
  {
    id: "3",
    title: "Born on the Fourth of July",
    year: 1989,
    image: "https://upload.wikimedia.org/wikipedia/en/0/0e/Born_on_the_Fourth_of_July.jpg"
  },
  {
    id: "4",
    title: "A Few Good Men",
    year: 1992,
    image: "https://upload.wikimedia.org/wikipedia/en/4/4c/A_Few_Good_Men_poster.jpg"
  },
  {
    id: "5",
    title: "The Firm",
    year: 1993,
    image: "https://upload.wikimedia.org/wikipedia/en/8/8c/The_Firm_1993_film_poster.jpg"
  },
  {
    id: "6",
    title: "Mission: Impossible",
    year: 1996,
    image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Mission_impossible_ver1.jpg"
  },
  {
    id: "7",
    title: "Jerry Maguire",
    year: 1996,
    image: "https://upload.wikimedia.org/wikipedia/en/d/d6/Jerry_Maguire_movie_poster.jpg"
  },
  {
    id: "8",
    title: "Magnolia",
    year: 1999,
    image: "https://upload.wikimedia.org/wikipedia/en/6/67/Magnolia_poster.jpg"
  },
  {
    id: "9",
    title: "Minority Report",
    year: 2002,
    image: "https://upload.wikimedia.org/wikipedia/en/4/44/Minority_Report_Poster.jpg"
  },
  {
    id: "10",
    title: "Collateral",
    year: 2004,
    image: "https://upload.wikimedia.org/wikipedia/en/1/15/Collateral_%28film%29_poster.jpg"
  }
]

export { type Film, data };