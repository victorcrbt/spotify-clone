import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import {
  LeftSideBar,
  MainHeader,
  RightSideBar,
  FooterBar,
} from '@components/organisms';

import { Wrapper, CenterWrapper } from './default.styles';

export const DefaultTemplate: FC = () => (
  <Wrapper>
    <LeftSideBar />
    <CenterWrapper>
      <MainHeader />
      <Outlet />
    </CenterWrapper>
    <RightSideBar />
    <FooterBar />
  </Wrapper>
);
