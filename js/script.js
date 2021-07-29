console.log('Vue is activated', Vue);
Vue.config.devtools = true;


const root = new Vue({
    el: "#app",
    data: {
        list: [
            "Seguire Boolean",
            "Fare la spesa",
            "Uscire",
            "Dormire",
        ],
    },
    methods: {},
});



