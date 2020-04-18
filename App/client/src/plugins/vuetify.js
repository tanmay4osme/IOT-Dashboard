/* eslint-disable */
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import ctheme from "../theme/colors"

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg',
  },
  theme: {
    themes: {
      light: {
        primary: ctheme.primary,
        secondary: ctheme.secondary,
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
      dark: {
        primary: '#272727',
      },
    },
  },
});
