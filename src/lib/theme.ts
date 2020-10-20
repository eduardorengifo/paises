import { createGlobalStyle, DefaultTheme } from 'styled-components';
import reset from 'styled-reset';

const theme: DefaultTheme = {
  breakpoints: ['40em', '52em', '64em'],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    avatar: 48
  },
  radii: {
    default: 4,
    circle: 99999
  },
  shadows: {
    card: '0 0 16px rgba(0, 0, 0, .25)'
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading'
    },
    display: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      fontSize: [5, 6, 7]
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em'
    },
    headingEllipsis: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  },
  variants: {
    appBar: {
      width: '100%',
      bg: 'background',
      color: 'primary',
      boxShadow: 'card'
    },
    avatar: {
      width: 'avatar',
      height: 'avatar',
      borderRadius: 'circle'
    },
    card: {
      p: 2,
      bg: 'background',
      boxShadow: 'card'
    },
    link: {
      color: 'primary'
    },
    nav: {
      fontSize: 1,
      fontWeight: 'bold',
      display: 'inline-block',
      p: 2,
      color: 'inherit',
      textDecoration: 'none',
      ':hover,:focus,.active': {
        color: 'primary'
      }
    }
  },
  buttons: {
    primary: {
      fontSize: 2,
      fontWeight: 'bold',
      color: 'background',
      bg: 'primary',
      borderRadius: 'default',
      cursor: 'pointer'
    },
    outline: {
      variant: 'buttons.primary',
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 2px',
      cursor: 'pointer'
    },
    secondary: {
      variant: 'buttons.primary',
      color: 'background',
      bg: 'secondary',
      cursor: 'pointer'
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body'
    }
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold'
    },
    field: {
      borderColor: 'lightgray',
      ':focus': {
        borderColor: 'primary',
        outline: 'none',
        boxShadow: (t: DefaultTheme) => `0 0 0 2px ${t.colors.primary}`
      }
    },
    input: {
      variant: 'forms.field'
    },
    select: {
      variant: 'forms.field'
    },
    textarea: {
      variant: 'forms.field'
    },
    radio: {},
    slider: {
      bg: 'lightgray'
    },
    switch: {
      // thumb: {}
    }
  }
};

export const GlobalStyle = createGlobalStyle`
  ${reset}
  a {
    color: ${props => props.theme.colors.primary}
  }
  body {
    margin: 0;
    font-family: ${props => props.theme.fonts.body};
    font-weight: ${props => props.theme.fontWeights.body};
    line-height: ${props => props.theme.lineHeights.body};
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};
  }
`;

export const lightTheme = {
  ...theme,
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#30c',
    muted: '#f6f6f6',
    gray: '#dddddf',
    highlight: 'hsla(205, 100%, 40%, 0.125)'
  }
};
export const darkTheme = {
  ...theme,
  colors: {
    text: 'hsl(210, 50%, 96%)',
    background: 'hsl(230, 25%, 18%)',
    primary: 'hsl(260, 100%, 80%)',
    secondary: 'hsl(290, 100%, 80%)',
    highlight: 'hsl(260, 20%, 40%)',
    purple: 'hsl(290, 100%, 80%)',
    muted: 'hsla(230, 20%, 0%, 20%)',
    gray: 'hsl(210, 50%, 60%)'
  }
};
