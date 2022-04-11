import { Film, Review } from "../types/films";

export const makeFakeFilm = (): Film => ({
  backgroundColor: "#B9B27E",
  backgroundImage: "https://9.react.pages.academy/static/film/background/matrix.jpg",
  description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
  director: "Wachowski Brothers",
  genre: "Action",
  id: 18,
  isFavorite: false,
  name: "Matrix",
  posterImage: "https://9.react.pages.academy/static/film/poster/matrix.jpg",
  previewImage: "https://9.react.pages.academy/static/film/preview/matrix.jpg",
  previewVideoLink: "https://9.react.pages.academy/static/film/video/dog.mp4",
  rating: 4.4,
  released: 1999,
  runTime: 136,
  scoresCount: 1503092,
  starring: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
  videoLink: "https://9.react.pages.academy/static/film/video/bike.mp4",
} as Film);

export const makeFakeComment = (): Review => ({
  comment: "I love this movie. This film is a milestone in cinematography. Great Immersive camera-work. This film is an experience and i has already seen it 4 times and I only see more quality of the film.",
  date: "2022-02-13T21:48:13.678Z",
  id: 1,
  rating: 2.6,
  user: { id: 12, name: "Isaac" },
} as Review);
