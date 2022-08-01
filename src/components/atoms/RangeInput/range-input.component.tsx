import styled, { css } from 'styled-components';
import BaseSlider from 'react-slider';

export type RangeInputProps = {
  isFocused: boolean;
};

export const RangeInput = styled(BaseSlider)<RangeInputProps>`
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
