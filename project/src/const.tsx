export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum TabsFilm {
  Overview = 'Overview',
  Details = 'Details',
  Review = 'Review',
}

export enum Genres {
  AllGenres = 'AllGenres',
  Comedies = 'Comedies',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Dramas = 'Dramas',
  Horror = 'Horror',
  KidsFamily = 'KidsFamily',
  Romance = 'Romance',
  SciFi = 'SciFi',
  Thrillers = 'Thrillers',
}

export const GenresNames = {
  [Genres.AllGenres]: 'All Genres',
  [Genres.Comedies]: 'Comedy',
  [Genres.Crime]: 'Crime',
  [Genres.Documentary]: 'Documentary',
  [Genres.Dramas]: 'Drama',
  [Genres.Horror]: 'Horror',
  [Genres.KidsFamily]: 'Kids & Family',
  [Genres.Romance]: 'Romance',
  [Genres.SciFi]: 'Sci-Fi',
  [Genres.Thrillers]: 'Thriller',
};
