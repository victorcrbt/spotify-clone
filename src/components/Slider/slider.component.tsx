import { useState, ChangeEvent, forwardRef } from 'react';

import { Wrapper, Input } from './slider.styles';

type SliderProps = JSX.IntrinsicElements['div'] & {
  max?: number;
  value?: number;
};

export const Slider = forwardRef<HTMLDivElement, SliderProps>(
  ({ max, value, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <Wrapper {...props} ref={ref}>
        <Input
          value={value}
          className="horizontal-slider"
          thumbClassName="slider-thumb"
          trackClassName="slider-track"
          onBeforeChange={() => setIsFocused(true)}
          onAfterChange={() => setIsFocused(false)}
          min={0}
          max={max}
          withTracks
          isFocused={isFocused}
        />
      </Wrapper>
    );
  }
);
