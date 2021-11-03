import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import vue from '@vitejs/plugin-vue'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    RubyPlugin(),
    react({
      exclude: /\.*\.(t|j)sx?$/, // disables FastRefresh react feature for this project (prevents globalPreamble not found error https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201)
    }),
    vue()
  ],
  // resolve: {
  //   alias: {
  //     'vue': 'vue/dist/vue.esm-bundler.js'
  //   }
  // }
})