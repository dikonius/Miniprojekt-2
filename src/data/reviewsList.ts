interface Review { 
  filmId: string;
  reviewId: string;
  score: number;  // 0-100 
  reviewer: string;
}

const reviewData: Review [] = [
  // Born on the Fourth of July (1989)
  {
    filmId: "3",
    reviewId: "Born on the Fourth of July, 1",
    score: 84,
    reviewer: "Peter Travers (Rolling Stone) – tomatometer approx"
  },
  {
    filmId: "3",
    reviewId: "Born on the Fourth of July, 2",
    score: 75,
    reviewer: "Vincent Canby (New York Times) – Metacritic approx"
  },

  // A Few Good Men (1992)
  {
    filmId: "4",
    reviewId: "A Few Good Men, 1",
    score: 100,
    reviewer: "Jay Boyar (Orlando Sentinel)"
  },
  {
    filmId: "4",
    reviewId: "A Few Good Men, 2",
    score: 63,
    reviewer: "Roger Ebert (Chicago Sun-Times)"
  },

  // The Firm (1993)
  {
    filmId: "5",
    reviewId: "The Firm, 1",
    score: 76,
    reviewer: "Richard Schickel (Time)"
  },
  {
    filmId: "5",
    reviewId: "The Firm, 2",
    score: 54,
    reviewer: "Todd McCarthy (Variety)"
  },

  // Mission: Impossible (1996)
  {
    filmId: "6",
    reviewId: "Mission: Impossible, 1",
    score: 66,
    reviewer: "Owen Gleiberman (Entertainment Weekly)"
  },
  {
    filmId: "6",
    reviewId: "Mission: Impossible, 2",
    score: 59,
    reviewer: "Vincent Canby (New York Times)"
  },

  // Jerry Maguire (1996)
  {
    filmId: "7",
    reviewId: "Jerry Maguire, 1",
    score: 75,
    reviewer: "Roger Ebert (Chicago Sun-Times)"
  },
  {
    filmId: "7",
    reviewId: "Jerry Maguire, 2",
    score: 77,
    reviewer: "Todd McCarthy (Variety)"
  },

  // Magnolia (1999)
  {
    filmId: "8",
    reviewId: "Magnolia, 1",
    score: 83,
    reviewer: "Peter Travers (Rolling Stone)"
  },
  {
    filmId: "8",
    reviewId: "Magnolia, 2", // Fixed duplicate ID from "8 Magnolia 1" to "8 Magnolia 2"
    score: 85,
    reviewer: "Todd McCarthy (Variety)"
  },

  // Minority Report (2002)
  {
    filmId: "9",
    reviewId: "Minority Report, 1",
    score: 90,
    reviewer: "Peter Travers (Rolling Stone)"
  },
  {
    filmId: "9",
    reviewId: "Minority Report, 2",
    score: 80,
    reviewer: "Todd McCarthy (Variety)"
  },

  // Collateral (2004)
  {
    filmId: "10",
    reviewId: "Collateral, 1",
    score: 88,
    reviewer: "Roger Ebert (Chicago Sun-Times) – RT approx"
  },
  {
    filmId: "10",
    reviewId: "Collateral, 2",
    score: 80,
    reviewer: "Owen Gleiberman (Entertainment Weekly)"
  }
];

export { type Review, reviewData };
