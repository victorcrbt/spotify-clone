import styled from 'styled-components';

export const Wrapper = styled.aside`
  height: 100%;
  padding: ${props => props.theme.spacing.md};

  background: ${props => props.theme.color.background.dark.main};

  nav {
    margin-bottom: ${props => props.theme.spacing.md};
  }

  div.controls {
    padding-bottom: ${props => props.theme.spacing.sm};
    margin-bottom: ${props => props.theme.spacing.md};

    border-style: solid;
    border-width: 0 0 ${props => props.theme.borderWidth.xxs} 0;
    border-color: ${props => props.theme.color.background.dark.contrast};
  }

  button {
    width: 100%;
    height: 36px;

    text-align: left;
    font-weight: bold;

    background: transparent;
    border: 0;
    opacity: 0.8;
    transition: opacity 0.4s;

    display: flex;
    align-items: center;

    &:hover {
      opacity: 1;
    }

    svg {
      margin-right: ${props => props.theme.spacing.sm};
    }
  }

  div.playlists-container button {
    font-weight: normal;
  }
`;
