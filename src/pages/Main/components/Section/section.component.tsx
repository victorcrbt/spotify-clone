import { FC } from 'react';
import { MdPlayCircle } from 'react-icons/md';

import {
  Wrapper,
  Card,
  CardsWrapper,
  Header,
  ImageWrapper,
} from './section.styles';

type SectionProps = {
  title: string;
  maxCardsToShow?: number;
  enableHorizontalScroll?: boolean;
  data: Array<{
    image: string;
    imageAlt?: string;
    name: string;
    description?: string;
    artists?: string[];
    color?: string;
  }>;
};

export const Section: FC<SectionProps> = ({
  title,
  maxCardsToShow,
  enableHorizontalScroll = false,
  data,
}) => (
  <Wrapper>
    <Header>{title}</Header>
    <CardsWrapper enableHorizontalScroll={enableHorizontalScroll}>
      {data.slice(0, maxCardsToShow).map(item => (
        <Card>
          <ImageWrapper>
            <img src={item.image} alt={item.imageAlt || item.name} />
          </ImageWrapper>
          <h4>{item.name}</h4>
          {!!item.artists && <h6>{item.artists?.join(', ')} and more...</h6>}
          {!!item.description && <h6>{item.description}</h6>}
          <button className="play-pause-button" type="button">
            <MdPlayCircle size={48} />
          </button>
        </Card>
      ))}
    </CardsWrapper>
  </Wrapper>
);
