import { createApp } from 'vue'

import AppPlugins from './AppPlugins.vue'

import { myPlugin } from './Plugins/myPlugin'

createApp(AppPlugins).use(myPlugin).mount('#app');

    

