// Complete declaration merging for the Config interface
declare global {
  interface Config {
    theme: 'light' | 'dark'
    maxConnections: number
  }
}

// Making the file a module by including an empty export statement
export {}