module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json', '.ts', '.tsx'], // 加入ts 和 tsx
    },
  },
}
