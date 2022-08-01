import { MdPlayCircle } from 'react-icons/md';

import { DefaultTemplate } from '@components/templates';

import { Section } from './components';
import {
  Wrapper,
  AdBanner,
  SectionHeading,
  RecentPlayedWrapper,
  Playlists,
} from './main.styles';

type RecentPlayed = {
  image: string;
  name: string;
  isPlaying: boolean;
};

type UserMix = RecentPlayed & {
  artists: string[];
  color?: string;
};

type Chart = RecentPlayed & {
  description: string;
};

const recentPlayed: RecentPlayed[] = [
  {
    image: 'https://i.pravatar.cc/300',
    name: 'Synthwave',
    isPlaying: false,
  },
  {
    image: 'https://i.pravatar.cc/300',
    name: 'Dark Synthwave 2022',
    isPlaying: true,
  },
  {
    image: 'https://i.pravatar.cc/300',
    name: 'Neon Lights',
    isPlaying: false,
  },
  {
    image: 'https://i.pravatar.cc/300',
    name: 'Best of DT',
    isPlaying: false,
  },
  {
    image: 'https://i.pravatar.cc/300',
    name: 'Pop',
    isPlaying: false,
  },
  {
    image: 'https://i.pravatar.cc/300',
    name: 'Metal',
    isPlaying: false,
  },
];

const userMixes: UserMix[] = [
  {
    image: 'https://i.pravatar.cc/300',
    name: 'Pop Mix',
    isPlaying: false,
    artists: ['Doja Cat', 'Maroon 5', 'Bruno Mars'],
    color: '#ffbbff',
  },
  {
    image: 'https://i.pravatar.cc/300',
    name: 'Metal Mix',
    isPlaying: true,
    artists: [
      'Metallica',
      'Liquid Tension Experiment',
      'Bullet For My Valentine',
    ],
  },
];

const charts: Chart[] = [
  {
    image: 'https://i.pravatar.cc/300',
    name: 'Top 50 - Brazil',
    isPlaying: false,
    description:
      'Your daily update of the most played tracks right now - Brazil.',
  },
  {
    image: 'https://i.pravatar.cc/300',
    name: 'Top 50 - Global',
    isPlaying: false,
    description:
      'Your daily update of the most played tracks right now - Global.',
  },
  {
    image: 'https://i.pravatar.cc/300',
    name: 'Top Brazil',
    isPlaying: false,
    description:
      'Marília Mendonça e os maiores hits do país. O que tá bombando tá aqui.',
  },
  {
    image: 'https://i.pravatar.cc/300',
    name: 'Viral São Paulo BR',
    isPlaying: false,
    description:
      'The most distinctively popular new songs in São Paulo BR relative to the rest of the world.',
  },
  {
    image: 'https://i.pravatar.cc/300',
    name: 'Viral Rio de Janeiro BR',
    isPlaying: false,
    description:
      'The most distinctively popular new songs in Rio de Janeiro BR relative to the rest of the world.',
  },
  {
    image: 'https://i.pravatar.cc/300',
    name: 'Viral Belo Horizonte BR',
    isPlaying: false,
    description:
      'The most distinctively popular new songs in Belo Horizonte BR relative to the rest of the world.',
  },
  {
    image: 'https://i.pravatar.cc/300',
    name: 'Viral Porto Alegre BR',
    isPlaying: false,
    description:
      'The most distinctively popular new songs in Porto Alegre BR relative to the rest of the world.',
  },
  {
    image: 'https://i.pravatar.cc/300',
    name: 'Viral Curitiba BR',
    isPlaying: false,
    description:
      'The most distinctively popular new songs in Curitiba BR relative to the rest of the world.',
  },
];

export function Main() {
  return (
    <DefaultTemplate>
      <Wrapper>
        <AdBanner src="https://i.pravatar.cc/300" alt="" />

        <RecentPlayedWrapper>
          <SectionHeading>Good afternoon</SectionHeading>
          <div className="playlist-wrapper">
            <Playlists>
              {recentPlayed.map(playlist => (
                <li className="playlist-card">
                  <img src={playlist.image} alt="" className="playlist-image" />
                  <h4 className="playlist-name">{playlist.name}</h4>
                  {playlist.isPlaying && (
                    <button className="play-pause-button" type="button">
                      <MdPlayCircle size={48} />
                    </button>
                  )}
                </li>
              ))}
            </Playlists>
          </div>
        </RecentPlayedWrapper>

        <Section title="Your top mixes" data={userMixes} />
        <Section title="Charts" data={charts} maxCardsToShow={5} />
      </Wrapper>
    </DefaultTemplate>
  );
}
