import styled, { css } from 'styled-components';
import BaseSlider from 'react-slider';
import { lighten } from 'polished';

export const Wrapper = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;

  .horizontal-slider {
    width: 100%;
    height: 4px;

    display: flex;
    align-items: center;

    border-radius: ${props => props.theme.borderRadius.sm};
    background: ${props =>
      lighten(0.4, props.theme.color.background.light.main)};
  }

  .slider-thumb {
    width: 12px;
    height: 12px;

    border-radius: 6px;
    background: ${props =>
      lighten(0.8, props.theme.color.background.light.main)};
    opacity: 0;
    transition: opacity 0.2s;
  }

  .slider-track {
    position: relative;
  }

  .horizontal-slider .slider-track {
    height: 4px;
  }

  .slider-track.slider-track-0 {
    border-radius: 6px;
    background: ${props =>
      lighten(0.8, props.theme.color.background.light.main)};
  }

  &:hover {
    .slider-thumb {
      opacity: 1;
    }

    .slider-track.slider-track-0 {
      background: ${props => props.theme.color.primary.default.main};
    }
  }
`;

type SliderProps = {
  isFocused: boolean;
};

export const Input = styled(BaseSlider)<SliderProps>`
  ${props =>
    props.isFocused &&
    css`
      .slider-thumb {
        opacity: 1;
      }

      .slider-track.slider-track-0 {
        background: ${props.theme.color.primary.default.main};
      }
    `}
`;
