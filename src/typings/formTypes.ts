import * as StyledSystem from 'styled-system';
import { SxProps } from 'rebass';

export interface CustomBoxKnownProps
  extends StyledSystem.SpaceProps,
    StyledSystem.LayoutProps,
    StyledSystem.FontSizeProps,
    StyledSystem.ColorProps,
    StyledSystem.FlexProps,
    StyledSystem.OrderProps,
    StyledSystem.AlignSelfProps,
    SxProps {
  variant?: StyledSystem.ResponsiveValue<string>;
  tx?: string;
}
