import { FC } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { useNavigation } from '@hooks';
import { Typography } from '@components/atoms';

import { Wrapper } from './main-header.styles';

export const MainHeader: FC = () => {
  const { canGoBack, goBack, canGoForward, goForward } = useNavigation();

  return (
    <Wrapper>
      <div className="navigation-controls">
        <button type="button" onClick={goBack} disabled={!canGoBack()}>
          <MdChevronLeft />
        </button>
        <button type="button" onClick={goForward} disabled={!canGoForward()}>
          <MdChevronRight />
        </button>
      </div>

      <div className="user-menu">
        <img src="https://i.pravatar.cc/300" alt="" />
        <Typography>Victor Batalha</Typography>
      </div>
    </Wrapper>
  );
};
