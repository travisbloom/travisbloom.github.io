/** @jsx jsx */
import * as React from 'react'
import { theme } from '../components/theme'
import { ErrorBoundary } from '../components/errorBoundary'
import { jsx, ThemeProvider } from 'theme-ui'

export const wrapRootElement = ({ element }: { element: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>{element}</ErrorBoundary>
    </ThemeProvider>
  )
}
