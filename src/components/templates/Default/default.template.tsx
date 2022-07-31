import { FC, ReactNode } from 'react';

import {
  LeftSideBar,
  MainHeader,
  RightSideBar,
  FooterBar,
} from '@components/organisms';

import { Wrapper, CenterWrapper } from './default.styles';

type DefaultTemplateProps = {
  children?: ReactNode;
};

export const DefaultTemplate: FC<DefaultTemplateProps> = ({ children }) => (
  <Wrapper>
    <LeftSideBar />
    <CenterWrapper>
      <MainHeader />
      {children}
    </CenterWrapper>
    <RightSideBar />
    <FooterBar />
  </Wrapper>
);
