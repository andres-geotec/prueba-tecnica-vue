import { fileURLToPath } from 'node:url'
import { configDefaults, defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      coverage: {
        provider: 'v8',
        reporter: ['text', 'json', 'html'],
        exclude: [
          'node_modules/',
          '**/dist/**',
          '**/coverage/**',
          '**/cypress/**',
          '**/.{idea,git,cache,output,temp}/**',
          '*.config.*',
          '*.cjs',
          '**/test__/**',
          'src/assets/',
          'src/main.js',
        ],
      },
    },
  })
)
