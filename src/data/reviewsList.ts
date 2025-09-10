interface Review { id: string; score: number; reviewer: string }

const reviewData: Review [] = [
 
  {
    id: "21",
    score: 100, 
    reviewer: "Test Reviewer"
  },
  {
    id: "22",
    score: 99,
    reviewer: "test reviewer 2"
  },

  // Born on the Fourth of July (1989)
  {
    id: "3 Born on the Fourth of July 1",
    score: 84, // Peter Travers (Rolling Stone) – approximate to RT % consistency
    reviewer: "Peter Travers (Rolling Stone) – tomatometer approx"
  },
  {
    id: "3 Born on the Fourth of July 2",
    score: 75, // Vincent Canby (NYT) – approximate to Metacritic consensus
    reviewer: "Vincent Canby (New York Times) – Metacritic approx"
  },

  // A Few Good Men (1992)
  {
    id: "4 A Few Good Men 1",
    score: 100, // Jay Boyar gave 5/5 → 100%
    reviewer: "Jay Boyar (Orlando Sentinel)"
  },
  {
    id: " 4 A Few Good Men 2",
    score: 63, // Roger Ebert’s 2.5/4 → 62.5 → 63%
    reviewer: "Roger Ebert (Chicago Sun-Times)"
  },

  // The Firm (1993)
  {
    id: "5 The Firm 1",
    score: 76, // Richard Schickel (Time) – based on consensus → matches RT 76%
    reviewer: "Richard Schickel (Time)"
  },
  {
    id: "5 The Firm 2",
    score: 54, // Todd McCarthy (Variety) – Metacritic reflect approx 54%
    reviewer: "Todd McCarthy (Variety)"
  },

  // Mission: Impossible (1996)
  {
    id: "6 Mission: Impossible 1",
    score: 66, // Owen Gleiberman (Entertainment Weekly) – RT approx 66%
    reviewer: "Owen Gleiberman (Entertainment Weekly)"
  },
  {
    id: "6 Mission: Impossible 2",
    score: 59, // Vincent Canby again (NYT) – Metacritic approx 59%
    reviewer: "Vincent Canby (New York Times)"
  },

  // Jerry Maguire (1996)
  {
    id: "7 Jerry Maguire 1",
    score: 75, // Roger Ebert’s 3/4 → 75%
    reviewer: "Roger Ebert (Chicago Sun-Times)"
  },
  {
    id: "7 Jerry Maguire 2",
    score: 77, // Todd McCarthy’s consensus from Metacritic → 77
    reviewer: "Todd McCarthy (Variety)"
  },

  // Magnolia (1999)
  {
    id: "8 Magnolia 1",
    score: 83, // Rolling Stone (Peter Travers) – RT approx 83%
    reviewer: "Peter Travers (Rolling Stone)"
  },
  {
    id: "8 Magnolia 1",
    score: 85, // Todd McCarthy (Variety) – matches Metacritic 85%
    reviewer: "Todd McCarthy (Variety)"
  },

  // Minority Report (2002)
  {
    id: "9 Minority Report 1",
    score: 90, // Peter Travers (Rolling Stone) – RT approx 90%
    reviewer: "Peter Travers (Rolling Stone)"
  },
  {
    id: "9 Minority Report 2",
    score: 80, // Todd McCarthy (Variety) – matches Metacritic 80%
    reviewer: "Todd McCarthy (Variety)"
  },

  // Collateral (2004)
  {
    id: "10 Collateral 1",
    score: 88, // Roger Ebert – approximate RT 88%
    reviewer: "Roger Ebert (Chicago Sun-Times) – RT approx"
  },
  {
    id: "10 Collateral 2",
    score: 80, // Owen Gleiberman (Entertainment Weekly) – Metacritic ~80%
    reviewer: "Owen Gleiberman (Entertainment Weekly)"
  }
];

export { type Review, reviewData };
