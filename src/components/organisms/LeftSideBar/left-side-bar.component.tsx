import { FC } from 'react';
import {
  MdHomeFilled,
  MdSearch,
  MdLibraryMusic,
  MdAddBox,
  MdFavorite,
} from 'react-icons/md';

import { Wrapper } from './left-side-bar.styles';

export const LeftSideBar: FC = () => (
  <Wrapper>
    <nav>
      <ul>
        <li>
          <button type="button">
            <MdHomeFilled size={20} />
            Home
          </button>
        </li>
        <li>
          <button type="button">
            <MdSearch size={20} />
            Search
          </button>
        </li>
        <li>
          <button type="button">
            <MdLibraryMusic size={20} />
            Your Library
          </button>
        </li>
      </ul>
    </nav>

    <div className="controls">
      <button type="button">
        <MdAddBox size={20} />
        Create Playlist
      </button>
      <button type="button">
        <MdFavorite size={20} />
        Liked Songs
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