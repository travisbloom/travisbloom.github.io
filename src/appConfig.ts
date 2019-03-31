function getEnvironment() {
  switch (window.location.hostname) {
    case 'localhost':
    case '10.0.2.2':
      return 'local'
  }
  return 'production'
}

const appConfigOptions = {
  local: {
    environment: 'local',
  },
  production: {
    environment: 'production',
  },
}

export const APP_CONFIG = appConfigOptions[getEnvironment()]
