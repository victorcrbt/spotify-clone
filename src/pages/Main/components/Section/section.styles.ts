import styled from 'styled-components';
import { lighten } from 'polished';

export const Wrapper = styled.section`
  margin-bottom: ${props => props.theme.spacing.lg};
`;

export const Header = styled.h3`
  margin-bottom: ${props => props.theme.spacing.md};

  font-size: 24px;
  font-weight: bold;
`;

type CardsWrapperProps = {
  enableHorizontalScroll: boolean;
};

export const CardsWrapper = styled.div<CardsWrapperProps>`
  overflow: ${props => (props.enableHorizontalScroll ? 'auto' : 'hidden')};
  padding-bottom: ${props =>
    props.enableHorizontalScroll ? props.theme.spacing.sm : '0'};

  display: flex;

  &::-webkit-scrollbar {
    width: 8px; /* width of the entire scrollbar */
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

export const Card = styled.div`
  position: relative;
  width: 176px;
  height: 240px;

  padding: ${props => props.theme.spacing.md};
  margin-right: ${props => props.theme.spacing.md};
  box-sizing: border-box;

  cursor: pointer;
  transition: background 0.2s;
  border-radius: ${props => props.theme.borderRadius.md};
  background: ${props =>
    lighten(0.04, props.theme.color.background.default.main)};

  display: flex;
  flex-direction: column;

  &:hover {
    background: ${props =>
      lighten(0.1, props.theme.color.background.light.main)};

    .play-pause-button {
      visibility: initial;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  .play-pause-button {
    visibility: hidden;
    position: absolute;
    right: 16px;
    top: 80px;

    background: none;
    border: 0;

    svg {
      fill: ${props => props.theme.color.primary.default.main};
    }
  }

  h4 {
    margin-top: ${props => props.theme.spacing.md};
  }

  h6 {
    display: inline-block;
    width: 100%;
    line-height: 1.5em;
    height: 3em;
    margin-top: ${props => props.theme.spacing.sm};

    font-weight: normal;
    font-size: 14px;
    opacity: 0.6;

    white-space: nowrap;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;

    @supports (-webkit-line-clamp: 2) {
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;

      white-space: initial;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
`;

type ImageWrapperProps = {
  mixColor?: string;
};

export const ImageWrapper = styled.div<ImageWrapperProps>`
  position: relative;
  width: 144px;
  height: 144px;

  flex: 1;
  border-radius: ${props => props.theme.borderRadius.sm};
  overflow: hidden;

  .mix-image {
    width: 100%;
    height: 100%;
  }

  .mix-name {
    position: absolute;
    bottom: 16px;
    left: 0;
    z-index: 10;

    padding-left: 8px;
    font-weight: bold;
    text-shadow: 0 0 5px #000;

    border-left-width: 4px;
    border-left-style: solid;
    border-left-color: ${props =>
      props.mixColor || props.theme.color.primary.default.main};
  }

  hr {
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    height: 4px;

    margin: 0;
    padding: 0;
    width: 100%;

    border: 0;
    border-top: 6px solid
      ${props => props.mixColor || props.theme.color.primary.default.main};
  }
`;
