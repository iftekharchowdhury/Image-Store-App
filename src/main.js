// first import the vue library

import Vue from "vue";
import App from './App';

import store from './store/index';

// this is a view instance 

new Vue({
    
    //pass the store to view instance 
    store,
    // show content to the screen - render

    render: h => h(App)

}).$mount('#app');