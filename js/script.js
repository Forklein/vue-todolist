console.log('Vue is activated', Vue);
Vue.config.devtools = true;


const root = new Vue({
    el: "#app",
    data: {
        author: 'Forklein',
        isViewAdd: false,
        isViewSearch: false,
        newItem: '',
        list: [
            "Seguire Boolean",
            "Fare la spesa",
            "Uscire",
            "Dormire",
        ],
    },
    methods: {
        deleteList(index) {
            this.list.splice(index, 1);
        },
        addList() {
            if (this.newItem.trim() !== '' && this.list.length < 10) {
                this.list.push(this.newItem);
                this.newItem = '';
            }
        },
        toggleInput() {
            this.isViewAdd = !this.isViewAdd;
        },
        toggleSearch() {
            this.isViewSearch = !this.isViewSearch;
        },
    },
});



