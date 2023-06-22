import { createApp } from 'vue/dist/vue.esm-bundler.js'
import App from './App.vue'


/* Font Awesome*/
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* Font Awesome Icons */
import { faAngleDoubleLeft, faCreditCard, faTable, faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faAngleDoubleLeft, faTable, faCreditCard, faMoneyCheckDollar)




import { router } from './router/route.js'


createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
