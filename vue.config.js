
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  publicPath:'phonebattle',
  // module: {
  //   rules: [
  //     {
  //       test: /\.s(c|a)ss$/,
  //       use: [
  //         'vue-style-loader',
  //         'css-loader',
  //         {
  //           loader: 'sass-loader',
  //           // Requires sass-loader@^7.0.0
  //           // options: {
  //           //   implementation: require('sass'),
  //           //   indentedSyntax: true // optional
  //           // },
  //           // Requires >= sass-loader@^8.0.0
  //           options: {
  //             implementation: require('sass'),
  //             sassOptions: {
  //               indentedSyntax: true // optional
  //             },
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // },
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    plugins: [
      // new VuetifyLoaderPlugin({
      //   /**
      //    * 将为每个vue组件中使用的每个标记调用此函数
      //    * 它应该返回一个数组，第一个元素将被插入到组件数组中，第二个元素应该是相应的导入
      //    *
      //    * originalTag - 最初在模板中使用的标记
      //    * kebabTag    - 标签序列化为kebab-case
      //    * camelTag    - 标签序列化为PascalCase
      //    * path        - 指向到当前 .vue 文件的相对路径
      //    * component   - 表示解析后的当前组件
      //    */
      //   match (originalTag, { kebabTag, camelTag, path, component }) {
      //     if (kebabTag.startsWith('core-')) {
      //       return [
      //         camelTag,
      //         `import ${camelTag} from '@/components/core/${camelTag.substring(4)}.vue'`
      //       ]
      //     }
      //   }
      // })
    ],
  },
}
