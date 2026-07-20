// Declaration Merging

// 🐨 Declare Config in the global scope using: declare global { interface Config { ... } }
// 💰 This allows the interface to be merged across multiple files
// - appName: string

// 🐨 Import the config-augment module to activate declaration merging
// 💰 Side-effect import: import './config-augment.ts'

// 🐨 Create a `config` object that satisfies the merged Config interface
// (it should have appName, theme, and maxConnections)

// 🐨 Create a `getTheme` function that takes a Config and returns its theme

// 🐨 Export `config` and `getTheme`. Tests import these by name.
// export { config, getTheme }
