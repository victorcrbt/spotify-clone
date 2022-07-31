import styled from 'styled-components';

export const Wrapper = styled.header`
  padding: ${props => props.theme.spacing.md};

  display: flex;
  justify-content: space-between;
  align-items: center;

  .navigation-controls button {
    width: 32px;
    height: 32px;

    border: 0;
    border-radius: 50%;
    background: ${props => props.theme.color.background.dark.main};

    font-size: 28px;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    &:first-child {
      margin-right: ${props => props.theme.spacing.sm};
    }
  }

  .user-menu {
    height: 32px;
    padding-right: ${props => props.theme.spacing.md};

    background: ${props => props.theme.color.background.dark.main};
    border-radius: 16px;

    display: flex;
    align-items: center;
  }

  .user-menu img {
    width: 32px;
    height: 32px;
    margin-right: ${props => props.theme.spacing.sm};

    border-radius: 50%;
  }
`;
