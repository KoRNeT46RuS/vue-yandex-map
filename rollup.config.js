import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: './src/index.js',
  dest: 'vue-yandex-maps.js',
  plugins: [
    resolve(),
    vue({compileTemplate: true}),
    babel(),
    uglify()
  ],
  format: 'umd',
  moduleName: 'vueYandexMaps'
};
