import styled, { FontSizes, Spacings } from 'styled-components';

type TypographyProps = {
  spacing?: keyof Spacings;
  verticalSpacing?: keyof Spacings;
  horizontalSpacing?: keyof Spacings;
  topSpacing?: keyof Spacings;
  rightSpacing?: keyof Spacings;
  bottomSpacing?: keyof Spacings;
  leftSpacing?: keyof Spacings;
  size?: keyof FontSizes;
  semanticElement?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  weight?: 'normal' | 'bold';
  colorVariation?: 'light' | 'default' | 'dark';
  opacity?: number;
  transform?: 'uppercase' | 'lowercase' | 'capitalize';
};

export const Typography = styled.p.attrs<TypographyProps>(props => ({
  as: props.semanticElement || 'p',
}))<TypographyProps>`
  margin: ${props => {
    const { spacing, verticalSpacing, horizontalSpacing } = props;
    const { spacing: spacings } = props.theme;

    if (!!verticalSpacing || !!horizontalSpacing) {
      const currentHorizontalSpacing = spacings[horizontalSpacing || 'none'];
      const currentVerticalSpacing = spacings[verticalSpacing || 'none'];

      return `${currentVerticalSpacing} ${currentHorizontalSpacing} `;
    }

    return spacings[spacing || 'none'];
  }};
  margin-top: ${props => props.theme.spacing[props.topSpacing!]};
  margin-right: ${props => props.theme.spacing[props.rightSpacing!]};
  margin-bottom: ${props => props.theme.spacing[props.bottomSpacing!]};
  margin-left: ${props => props.theme.spacing[props.leftSpacing!]};

  opacity: ${props => props.opacity || 1};

  color: ${props =>
    props.theme.color.text[props.colorVariation || 'default'].main};
  font-size: ${props => props.theme.fontSize[props.size || 'md']};
  font-weight: ${props => props.weight || 'normal'};
  text-transform: ${props => props.transform || 'initial'};
`;
