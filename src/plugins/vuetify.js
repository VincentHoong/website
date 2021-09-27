import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#004544',
                secondary: '#DF2526',
                tertiary: '#CECECE',
                error: '#DF2526'
            },
        },
    },
});
