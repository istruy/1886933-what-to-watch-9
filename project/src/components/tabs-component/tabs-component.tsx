import { Link } from 'react-router-dom';
import { TabsFilm } from '../../const';
import { Film, Review } from '../../types/films';
import { useState } from 'react';
import FilmReviewComponent from './film-review';
import FilmOverviewComponent from './film-overview';
import FilmDetaisComponent from './film-details';

type TabsComponentProps = {
  film: Film;
  comments: Review[];
}

let filmInfoContainer: JSX.Element = <> </>;
let flag = true;

const getLinkByClick = (filmInfo: TabsFilm, film: Film, comments: Review[]) => {
  switch (filmInfo) {
    case TabsFilm.Overview:
      filmInfoContainer = <FilmOverviewComponent film={film} />;
      break;
    case TabsFilm.Details:
      filmInfoContainer = <FilmDetaisComponent film={film} />;
      break;
    case TabsFilm.Review:
      filmInfoContainer = <FilmReviewComponent comments={comments} />;
      break;
  }
};

function TabsComponent({ film, comments }: TabsComponentProps): JSX.Element {

  const [isActiveTab, setActiveTab] = useState<TabsFilm>(TabsFilm.Overview);

  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${isActiveTab === TabsFilm.Overview ? 'film-nav__item--active' : ''}`}>
            <Link to={`/films/${film.id}`}
              className="film-nav__link"
              onClick={(event) => {
                flag = false;
                setActiveTab(TabsFilm.Overview);
                getLinkByClick(TabsFilm.Overview, film, comments);
              }}
            >
              Overview
            </Link>
          </li>
          <li className={`film-nav__item ${isActiveTab === TabsFilm.Details ? 'film-nav__item--active' : ''}`}>
            <Link to={`/films/${film.id}`}
              className="film-nav__link"
              onClick={() => {
                flag = false;
                setActiveTab(TabsFilm.Details);
                getLinkByClick(TabsFilm.Details, film, comments);
              }}
            >
              Details
            </Link>
          </li>
          <li className={`film-nav__item ${isActiveTab === TabsFilm.Review ? 'film-nav__item--active' : ''}`}>
            <Link to={`/films/${film.id}`}
              className="film-nav__link"
              onClick={() => {
                flag = false;
                setActiveTab(TabsFilm.Review);
                getLinkByClick(TabsFilm.Review, film, comments);
              }}
            >
              Review
            </Link>
          </li>
        </ul>
      </nav>
      {flag ? getLinkByClick(TabsFilm.Overview, film, comments) : ''}
      {filmInfoContainer}
    </>
  );
}

export default TabsComponent;
