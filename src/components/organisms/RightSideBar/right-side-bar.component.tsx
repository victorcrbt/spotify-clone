import { FC } from 'react';
import { MdPersonAddAlt, MdClose } from 'react-icons/md';

import { Translator, Typography } from '@components/atoms';

import { Wrapper } from './right-side-bar.styles';

export const RightSideBar: FC = () => (
  <Wrapper>
    <header>
      <Typography weight="bold" opacity={0.6} transform="capitalize">
        <Translator path="components:rightSideBar.headerTitle" />
      </Typography>
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
        {Array(4)
          .fill(0)
          .map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index.toString()}>
              <img
                className="user-avatar"
                src="https://i.pravatar.cc/300"
                alt=""
              />
              <div>
                <Typography opacity={0.6} weight="bold">
                  John Doe
                </Typography>
                <Typography size="sm">Music Name - Artist</Typography>
                <div className="playlist-info">
                  <span>icon</span>
                  <Typography size="sm">Playlist</Typography>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  </Wrapper>
);
