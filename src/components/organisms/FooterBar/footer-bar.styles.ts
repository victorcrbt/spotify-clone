import styled from 'styled-components';

import { SIZES } from '@constants';
import { Slider as BaseSlider } from '@components/molecules';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;

  width: 100%;
  height: ${SIZES.footerHeight}px;
  padding: 0 ${props => props.theme.spacing.lg};

  background: ${props => props.theme.color.background.light.main};

  display: flex;
  justify-content: space-between;
  align-items: center;

  button[type='button'] {
    padding: 0;
    margin: 0;
    margin-right: 16px;

    background: none;
    border: 0;

    &:last-child {
      margin-right: 0;
    }
  }

  .current-playing {
    display: flex;
    align-items: center;
    flex: 1;
  }

  .current-playing img {
    width: 64px;
    height: 64px;
    margin-right: ${props => props.theme.spacing.md};
  }

  .music-info-wrapper {
    margin-right: ${props => props.theme.spacing.md};
  }

  .track-controls {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
  }

  .track-controls .track-progress {
    width: 400px;
    margin-top: ${props => props.theme.spacing.sm};

    &::-webkit-slider-thumb {
      background: red;
    }
  }

  .volume-wrapper {
    display: flex;
    flex: 1;
    justify-content: flex-end;
  }
`;

export const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ProgressBar = styled(BaseSlider)`
  width: 400px;
  margin: 0 ${props => props.theme.spacing.md};
`;

export const VolumeControl = styled(BaseSlider)`
  width: 100px;
  margin-left: ${props => props.theme.spacing.sm};
`;
