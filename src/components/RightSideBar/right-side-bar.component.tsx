import { FC } from 'react';
import { MdPersonAddAlt, MdClose } from 'react-icons/md';

import { Wrapper } from './right-side-bar.styles';

export const RightSideBar: FC = () => (
  <Wrapper>
    <header>
      <p>Friend Activity</p>
      <div className="header-icons-wrapper">
        <button type="button">
          <MdPersonAddAlt size={20} />
        </button>
        <button type="button">
          <MdClose size={20} />
        </button>
      </div>
    </header>

    <div className="friends-activity-wrapper">
      <ul>
        <li>
          <img className="user-avatar" src="https://i.pravatar.cc/300" alt="" />
          <div>
            <h3>John Doe</h3>
            <p>Music Name - Artist</p>
            <div className="playlist-info">
              <span>icon</span>
              <p>Playlist</p>
            </div>
          </div>
        </li>
        <li>
          <img className="user-avatar" src="https://i.pravatar.cc/300" alt="" />
          <div>
            <h3>John Doe</h3>
            <p>Music Name - Artist</p>
            <div className="playlist-info">
              <span>icon</span>
              <p>Playlist</p>
            </div>
          </div>
        </li>
        <li>
          <img className="user-avatar" src="https://i.pravatar.cc/300" alt="" />
          <div>
            <h3>John Doe</h3>
            <p>Music Name - Artist</p>
            <div className="playlist-info">
              <span>icon</span>
              <p>Playlist</p>
            </div>
          </div>
        </li>
        <li>
          <img className="user-avatar" src="https://i.pravatar.cc/300" alt="" />
          <div>
            <h3>John Doe</h3>
            <p>Music Name - Artist</p>
            <div className="playlist-info">
              <span>icon</span>
              <p>Playlist</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </Wrapper>
);
