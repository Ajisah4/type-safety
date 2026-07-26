// Declaration Merging

// Import config augmentation to activate declaration merging
import './config-augment.ts'

// Declare Config in the global scope
declare global {
  interface Config {
    appName: string
  }
}

// Create config object using the merged Config interface
const config: Config = {
  appName: 'Epic Shop',
  theme: 'dark',
  maxConnections: 100,
}

// Create getTheme function
function getTheme(config: Config): string {
  return config.theme
}

// Export values and function
export { config, getTheme }
