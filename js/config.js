System.config({
  map: {
    components: 'js/components',
    react: 'node_modules/react/dist/react.min.js',
    'react-dom': 'node_modules/react-dom/dist/react-dom.min.js',
    'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build': 'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
    css: 'node_modules/systemjs-plugin-css/css.js'
  },

  meta: {
    '*.js': {
      babelOptions: {
        react: true
      }
    },
    '*.css': { loader: 'css' }
  },

  transpiler: 'plugin-babel'
})
