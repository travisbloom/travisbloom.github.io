import { isServerRendering } from './utilities/executionEnvironment'
import { Environment } from './types'

function getEnvironment() {
  if (isServerRendering) {
    return 'production'
  }
  switch (window.location.hostname) {
    case 'localhost':
    case '10.0.2.2':
      return 'local'
  }
  return 'production'
}

const appConfigOptions: Record<string, { environment: Environment }> = {
  local: {
    environment: 'local',
  },
  production: {
    environment: 'production',
  },
}

export const APP_CONFIG = appConfigOptions[getEnvironment()]
