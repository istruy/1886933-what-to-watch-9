import { Link, useLocation } from 'react-router-dom';
import { TabsFilm } from '../../const';
import { Film, Review } from '../../types/films';
import FilmReviewComponent from './film-review';
import FilmOverviewComponent from './film-overview';
import FilmDetaisComponent from './film-details';
import { useMemo } from 'react';

type TabsComponentProps = {
  film: Film;
  comments: Review[];
}

const getActiveTab = (tab: TabsFilm, film: Film, comments: Review[]) => {
  switch (tab) {
    case TabsFilm.Overview:
      return <FilmOverviewComponent film={film} />;
    case TabsFilm.Details:
      return <FilmDetaisComponent film={film} />;
    case TabsFilm.Review:
      return <FilmReviewComponent comments={comments} />;
  }
};

function TabsComponent({ film, comments }: TabsComponentProps): JSX.Element {

  const location = useLocation();
  const activeTab = location.hash.length === 0 ? TabsFilm.Overview : location.hash.substring(1, location.hash.length) as TabsFilm;

  const memoizedGetActiveTab = useMemo(() => getActiveTab(activeTab, film, comments), [activeTab, film, comments]);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${activeTab === TabsFilm.Overview ? 'film-nav__item--active' : ''}`}>
            <Link to={`/films/${film.id}`} className="film-nav__link">
              Overview
            </Link>
          </li>
          <li className={`film-nav__item ${activeTab === TabsFilm.Details ? 'film-nav__item--active' : ''}`}>
            <Link to={`/films/${film.id}/#${TabsFilm.Details}`} className="film-nav__link">
              Details
            </Link>
          </li>
          <li className={`film-nav__item ${activeTab === TabsFilm.Review ? 'film-nav__item--active' : ''}`}>
            <Link to={`/films/${film.id}/#${TabsFilm.Review}`} className="film-nav__link">
              Review
            </Link>
          </li>
        </ul>
      </nav>
      {memoizedGetActiveTab}
    </div>
  );
}

export default TabsComponent;
