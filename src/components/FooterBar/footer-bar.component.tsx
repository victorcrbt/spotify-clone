import { useState, useEffect } from 'react';
import { useTheme } from 'styled-components';
import {
  MdOutlineFavorite,
  MdShuffle,
  MdSkipPrevious,
  MdPlayCircle,
  MdPauseCircle,
  MdSkipNext,
  MdRepeat,
  MdSpeaker,
} from 'react-icons/md';
import { intervalToDuration } from 'date-fns';

import {
  Wrapper,
  ProgressBar,
  VolumeControl,
  Time,
  ProgressWrapper,
} from './footer-bar.styles';

const tracks = [
  {
    title: 'Light Years',
    artist: 'Droid Bishop',
    timeInSeconds: 184,
  },
  {
    title: 'Stunner',
    artist: 'Droid Bishop',
    timeInSeconds: 233,
  },
  {
    title: 'Job For a Cowboy',
    artist: 'OGRE Sound',
    timeInSeconds: 159,
  },
  {
    title: 'The Outlander',
    artist: 'Droid Bishop',
    timeInSeconds: 193,
  },
];

function getFormattedDuration(timeInSeconds: number) {
  const duration = intervalToDuration({ start: 0, end: timeInSeconds * 1000 });

  const { hours, minutes, seconds } = duration;

  const parsedHours =
    hours && hours > 0 ? hours?.toString().padStart(2, '0') : null;
  const parsedMinutes =
    minutes && minutes > 0 ? minutes?.toString().padStart(2, '0') : '00';
  const parsedSeconds =
    seconds && seconds > 0 ? seconds?.toString().padStart(2, '0') : '00';

  return `${
    parsedHours ? `${parsedHours}:` : ''
  }${parsedMinutes}:${parsedSeconds}`;
}

let interval: number | null = null;

export function FooterBar() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isShuffleActive, setIsShuffleActive] = useState(false);
  const [isRepeatActive, setIsRepeatActive] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const { color } = useTheme();

  const toggleMusicPlaying = () => setIsMusicPlaying(prevState => !prevState);

  const resetCurrentTime = () => setCurrentTime(0);

  const handleClickNext = () => {
    resetCurrentTime();

    if (currentTrackIndex >= tracks.length - 1) {
      return setCurrentTrackIndex(0);
    }

    return setCurrentTrackIndex(prevState => prevState + 1);
  };

  const handleClickPrevious = () => {
    resetCurrentTime();

    if (currentTrackIndex <= 0) {
      return setCurrentTrackIndex(tracks.length - 1);
    }

    return setCurrentTrackIndex(prevState => prevState - 1);
  };

  useEffect(() => {
    if (!isMusicPlaying && interval) {
      clearInterval(interval);
    }

    if (isMusicPlaying) {
      interval = setInterval(() => {
        setCurrentTime(prevState => {
          if (prevState >= tracks[currentTrackIndex].timeInSeconds) {
            handleClickNext();
          }

          return prevState + 1;
        });
      }, 1000);
    }
  }, [isMusicPlaying]);

  return (
    <Wrapper>
      <div className="current-playing">
        <img src="https://i.pravatar.cc/300" alt="" className="album-cover" />
        <div className="music-info-wrapper">
          <p className="music-name">{tracks[currentTrackIndex].title}</p>
          <p className="artist-name">{tracks[currentTrackIndex].artist}</p>
        </div>
        <MdOutlineFavorite size={24} />
      </div>

      <div className="track-controls">
        <div className="buttons">
          <button
            type="button"
            onClick={() => setIsShuffleActive(prevState => !prevState)}
          >
            <MdShuffle
              size={36}
              color={color[isShuffleActive ? 'primary' : 'text'].default.main}
            />
          </button>
          <button type="button" onClick={handleClickPrevious}>
            <MdSkipPrevious size={36} />
          </button>
          <button type="button" onClick={toggleMusicPlaying}>
            {isMusicPlaying ? (
              <MdPauseCircle size={36} />
            ) : (
              <MdPlayCircle size={36} />
            )}
          </button>
          <button type="button" onClick={handleClickNext}>
            <MdSkipNext size={36} />
          </button>
          <button
            type="button"
            onClick={() => setIsRepeatActive(prevState => !prevState)}
          >
            <MdRepeat
              size={36}
              color={color[isRepeatActive ? 'primary' : 'text'].default.main}
            />
          </button>
        </div>
        <ProgressWrapper>
          <Time>{getFormattedDuration(currentTime)}</Time>
          <ProgressBar
            max={tracks[currentTrackIndex].timeInSeconds}
            value={currentTime}
          />
          <Time>
            {' '}
            {getFormattedDuration(tracks[currentTrackIndex].timeInSeconds)}
          </Time>
        </ProgressWrapper>
      </div>

      <div className="volume-wrapper">
        <MdSpeaker size={24} />
        <VolumeControl />
      </div>
    </Wrapper>
  );
}
