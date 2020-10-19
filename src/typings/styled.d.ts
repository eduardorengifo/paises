import 'styled-components';
import {} from 'styled-components/cssprop';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints?: any;
    fonts?: any;
    fontSizes?: any;
    fontWeights?: any;
    lineHeights?: any;
    space?: any;
    sizes?: any;
    radii?: any;
    shadows?: any;
    text?: any;
    variants?: any;
    buttons?: any;
    styles?: any;
    colors?: any;
    forms?: any;
  }
}
