import { FC } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Typography } from '@components/atoms';

import { Wrapper } from './main-header.styles';

export const MainHeader: FC = () => (
  <Wrapper>
    <div className="navigation-controls">
      <button type="button">
        <MdChevronLeft />
      </button>
      <button type="button">
        <MdChevronRight />
      </button>
    </div>

    <div className="user-menu">
      <img src="https://i.pravatar.cc/300" alt="" />
      <Typography>Victor Batalha</Typography>
    </div>
  </Wrapper>
);
