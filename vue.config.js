const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// const path = require('path');

// module.exports = {
//   outputDir:path.resolve(_dirname,'../server/public'),
//   devServer: {
//     proxy: {
//       '/api': {
//         target: 'http://localhost:5000'
//       }
//     }
//   }
// };