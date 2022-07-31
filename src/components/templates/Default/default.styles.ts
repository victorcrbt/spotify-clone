import styled from 'styled-components';

import { SIZES } from '@constants';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 250px 1fr 250px;
`;

export const CenterWrapper = styled.div`
  height: calc(100% - ${SIZES.footerHeight}px);
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 12px; /* width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: ${props =>
      props.theme.color.background.default
        .main}; /* color of the tracking area */
  }

  &::-webkit-scrollbar-thumb {
    background: ${props =>
      props.theme.color.background.light.main}; /* color of the scroll thumb */
    border-radius: 20px;
  }
`;
