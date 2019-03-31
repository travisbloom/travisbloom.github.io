export interface ITheme {
  colors: {
    white: string
    black: string
    darkGrey: string
    primary: string
  }
  shadows: Array<string | null>
  borders: string[]
  radii: number[]
  fontSizes: number[]
  fontWeights: number[]
  breakpoints: number[]
  minSize: {
    small: number
    medium: number
    large: number
    xlarge: number
  }
  maxSize: {
    xsmall: number
    small: number
    medium: number
    large: number
  }
  space: number[]
}

export const theme: ITheme = {
  colors: {
    white: '#fff',
    black: '#000',
    darkGrey: '#696969',
    primary: '#3989c9',
  },
  borders: [`1px solid #adb5bd`],
  shadows: [null, '0 2px 4px 0 rgba(0, 0, 0, 0.3)'],
  radii: [2, 5, 8],
  fontSizes: [12, 14, 16, 18, 24, 28, 32, 48],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fontWeights: [400, 900],
  breakpoints: [576, 768, 992, 1200],
  minSize: {
    small: 576,
    medium: 768,
    large: 992,
    xlarge: 1200,
  },
  maxSize: {
    xsmall: 576 - 1,
    small: 768 - 1,
    medium: 992 - 1,
    large: 1200 - 1,
  },
}
