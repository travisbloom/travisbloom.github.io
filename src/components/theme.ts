export const baseColors = {
  white: '#fff',
  black: '#000',
  gray: [
    '#fff', // 0 index
    '#f8f9fa',
    '#e9ecef',
    '#dee2e6',
    '#ced4da',
    '#adb5bd',
    '#6c757d',
    '#495057',
    '#343a40',
    '#212529',
  ],
  blue: '#3989c9',
  indigo: '#6610f2',
  purple: '#6f42c1',
  pink: '#e83e8c',
  red: '#dc3545',
  orange: '#fd7e14',
  yellow: '#ffc107',
  green: '#28a745',
  teal: '#20c997',
  cyan: '#17a2b8',
  // gray: gray[6],
}

export const colors = {
  ...baseColors,
  grayDark: baseColors.gray[8],
  text: baseColors.gray[6],
  background: baseColors.white,
  primary: baseColors.blue,
  secondary: baseColors.gray[6],
  muted: baseColors.gray[3],
  success: baseColors.green,
  info: baseColors.cyan,
  warning: baseColors.yellow,
  danger: baseColors.red,
  light: baseColors.gray[1],
  dark: baseColors.gray[8],
  textMuted: baseColors.gray[6],
}

export const space = [0, 0.25, 0.5, 1, 1.5, 3].map(n => n + 'rem')

export const breakpoints = ['350px', '576px', '768px', '992px', '1200px']

const body =
  'Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
export const fonts = {
  body,
  sans: body,
  heading: body,
  monospace: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
}

export const fontWeights = {
  body: 400,
  heading: 300,
  bold: 700,
  light: 300,
  normal: 400,
  display: 300,
}

export const fontSizes = [
  '0.75rem', // 0
  '0.875rem', // 1
  '1rem', // 2
  '1.25rem', // 3
  '1.5rem', // 4
  '1.75rem', // 5
  '2rem', // 6
  '2.5rem', // 7
  '3.5rem', // 8
  '4.5rem', // 5
  '5.5rem', // 5
  '6rem', // 5
]
fontSizes.lead = fontSizes[3]

export const lineHeights = {
  body: 1.5,
  heading: 1.2,
}

export const sizes = {
  // container widths
  sm: 540,
  md: 720,
  lg: 960,
  xl: 1140,
}

export const radii = {
  default: '0.25rem',
  sm: '0.2rem',
  lg: '0.3rem',
  pill: '50rem',
}

export const shadows = {
  default: '0 .5rem 1rem rgba(0, 0, 0, .15)',
  sm: '0 .125rem .25rem rgba(0, 0, 0, .075)',
  lg: '0 1rem 3rem rgba(0, 0, 0, .175)',
}

const heading = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading',
}
const display = {
  fontWeight: 'display',
  lineHeight: 'heading',
}

// variants
const typeStyles = {
  heading,
  display,
}

const headers = {
  h1: {
    ...heading,
    fontSize: [5, 6, 7],
  },
  h2: {
    ...heading,
    fontSize: [4, 5, 6],
  },
  h3: {
    ...heading,
    fontSize: [3, 4, 5],
  },
  h4: {
    ...heading,
    fontSize: 3,
  },
  h5: {
    ...heading,
    fontSize: 3,
  },
  h6: {
    ...heading,
    fontSize: 2,
  },
  h7: {
    ...heading,
    fontSize: 2,
  },
}

export const styles = {
  ...headers,
  root: {
    fontFamily: 'body',
    lineHeight: 'body',
    fontWeight: 'body',
  },
  a: {
    color: 'primary',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
    },
  },
  p: {
    mb: 3,
    lineHeight: 'body',
  },
  blockquote: {
    fontSize: 3,
    mb: 3,
  },
  table: {
    // todo
    width: '100%',
    marginBottom: 3,
    color: 'gray.9',
    borderCollapse: 'collapse',
  },
  th: {
    verticalAlign: 'bottom',
    borderTopWidth: 2,
    borderTopStyle: 'solid',
    borderTopColor: 'gray.3',
    borderBottomWidth: 2,
    borderBottomStyle: 'solid',
    borderBottomColor: 'gray.3',
    padding: '.75rem',
    textAlign: 'inherit',
  },
  td: {
    borderBottomWidth: 2,
    borderBottomStyle: 'solid',
    borderBottomColor: 'gray.3',
    verticalAlign: 'top',
    padding: '.75rem',
  },
  inlineCode: {
    color: 'pink',
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
  },
}

export const theme = {
  breakpoints,
  colors,
  space,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  sizes,
  shadows,
  radii,
  typeStyles,
  styles,
  text: {
    heading: styles.h1,
    ...headers,
  },
  minSize: {
    sm: breakpoints[0],
    md: breakpoints[1],
    lg: breakpoints[2],
    xl: breakpoints[3],
  },
}
