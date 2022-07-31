import styled from 'styled-components';
import { lighten } from 'polished';

import { SIZES } from '@constants';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 250px 1fr 250px;
`;

export const ContentWrapper = styled.div`
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

export const Content = styled.main`
  padding: ${props => props.theme.spacing.lg};

  overflow-y: auto;
`;

export const AdBanner = styled.img`
  margin-bottom: ${props => props.theme.spacing.xl};

  width: 100%;
  height: 250px;
`;

export const SectionHeading = styled.h3`
  margin-bottom: ${props => props.theme.spacing.md};

  font-size: 24px;
  font-weight: bold;
`;

export const RecentPlayedWrapper = styled.section`
  margin-bottom: ${props => props.theme.spacing.lg};
`;

export const Playlists = styled.ul`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${props => props.theme.spacing.md};

  li {
    height: 96px;

    background: ${props => props.theme.color.background.light.main};
    border-radius: ${props => props.theme.borderRadius.sm};
    overflow: hidden;
    cursor: pointer;
    transition: background 0.2s;

    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
      background: ${props =>
        lighten(0.1, props.theme.color.background.light.main)};
    }
  }

  .playlist-image {
    width: 96px;
    height: 96px;
  }

  .playlist-name {
    margin-left: ${props => props.theme.spacing.md};

    font-size: 14px;

    flex: 1;
  }

  .play-pause-button {
    margin-right: ${props => props.theme.spacing.md};

    background: none;
    border: 0;

    svg {
      fill: ${props => props.theme.color.primary.default.main};
    }
  }
`;
