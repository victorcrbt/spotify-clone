import styled from 'styled-components';

export const Wrapper = styled.aside`
  height: 100%;
  padding: ${props => props.theme.spacing.md};

  background: ${props => props.theme.color.background.dark.main};

  header {
    margin-bottom: ${props => props.theme.spacing.lg};

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-icons-wrapper button {
    width: 28px;
    height: 28px;

    background: ${props => props.theme.color.background.dark.main};
    border-radius: 50%;
    border: 0;
    transition: background 0.4s;

    &:hover {
      background: ${props => props.theme.color.background.light.main};
    }
  }

  .friends-activity-wrapper ul li {
    margin-bottom: ${props => props.theme.spacing.md};
  }

  .friends-activity-wrapper ul li,
  .friends-activity-wrapper ul li .playlist-info {
    display: flex;
    align-items: flex-start;
  }

  .friends-activity-wrapper ul li h3,
  .friends-activity-wrapper ul li p,
  .friends-activity-wrapper ul li span {
    opacity: 0.6;
    font-size: 12px;
  }

  .friends-activity-wrapper ul li h3 {
    font-size: 14px;
  }

  .user-avatar {
    width: 40px;
    height: 40px;
    margin-right: ${props => props.theme.spacing.sm};

    border-radius: 50%;
  }
`;
