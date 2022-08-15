import { FC } from 'react';
import {
  MdHomeFilled,
  MdSearch,
  MdLibraryMusic,
  MdAddBox,
  MdFavorite,
} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '@constants';
import { Translator } from '@components/atoms';

import { Wrapper } from './left-side-bar.styles';

export const LeftSideBar: FC = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleNavigate = (path: string) => () => navigate(path);

  return (
    <Wrapper>
      <nav>
        <ul>
          <li>
            <button type="button" onClick={handleNavigate(ROUTES.home)}>
              <MdHomeFilled size={20} />
              <Translator path="components:leftSideBar.homeButton" />
            </button>
          </li>
          <li>
            <button type="button" onClick={handleNavigate(ROUTES.search)}>
              <MdSearch size={20} />
              <Translator path="components:leftSideBar.searchButton" />
            </button>
          </li>
          <li>
            <button type="button">
              <MdLibraryMusic size={20} />
              <Translator path="components:leftSideBar.libraryButton" />
            </button>
          </li>
        </ul>
      </nav>

      <div className="controls">
        <button type="button">
          <MdAddBox size={20} />
          <Translator path="components:leftSideBar.createPlaylistButton" />
        </button>
        <button type="button">
          <MdFavorite size={20} />
          <Translator path="components:leftSideBar.likedSongsButton" />
        </button>
      </div>

      <div className="playlists-container">
        <ul>
          <li>
            <button type="button">Synthwave</button>
          </li>
          <li>
            <button type="button">Neon Lights</button>
          </li>
          <li>
            <button type="button">Metal</button>
          </li>
          <li>
            <button type="button">Pop</button>
          </li>
          <li>
            <button type="button">Hip Hop</button>
          </li>
          <li>
            <button type="button">Eletrônica</button>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};
