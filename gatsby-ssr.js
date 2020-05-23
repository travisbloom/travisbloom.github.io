import { jsx, InitializeColorMode } from 'theme-ui'
import 'typeface-lato'

export { wrapRootElement } from './src/gatsby/wrapRootElement'
export { wrapPageElement } from './src/gatsby/wrapPageElement'

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([jsx(InitializeColorMode, { key: 'theme-ui-no-flash' })])
}
