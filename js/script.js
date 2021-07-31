console.log('Vue is activated', Vue);
Vue.config.devtools = true;


const root = new Vue({
    el: "#app",
    data: {
        author: 'Forklein',
        isViewAdd: false,
        isViewSearch: false,
        reset: false,
        backgroundColor: 'dark-mode',
        defaultColor: 'text-white',
        mode: 'Light',
        newItem: '',
        searchItem: '',
        list: [
            {
                text: 'Seguire Boolean',
                done: false,
            },
            {
                text: 'Fare la spesa',
                done: false,
            },
            {
                text: 'Allenamento',
                done: false,
            },
            {
                text: 'Uscire',
                done: false,
            },
        ],
    },
    methods: {
        deleteList(index) {
            this.list.splice(index, 1);
        },
        addList() {
            if (this.newItem.trim() !== '' && this.list.length < 10) {
                this.list.push({ text: this.newItem, done: false });
                this.newItem = '';
            }
        },
        resetList() {
            this.list.splice(0, this.list.length);
            this.reset = true;
        },
        toggleInput() {
            this.isViewAdd = !this.isViewAdd;
            if (this.isViewAdd) {
                this.isViewSearch = false;
            }
        },
        toggleSearch() {
            this.isViewSearch = !this.isViewSearch;
            if (this.isViewSearch) {
                this.isViewAdd = false;
            }
        },
        darkMode() {
            if (this.backgroundColor === 'light-mode') {
                this.backgroundColor = 'dark-mode';
                this.mode = 'Light';
                this.defaultColor = 'text-white';
            } else {
                this.backgroundColor = 'light-mode';
                this.mode = 'Dark';
                this.defaultColor = '';
            }
        },
        showItem(el) {
            if (!this.searchItem || this.searchItem.trim() === '') {
                return true;
            }
            const filter = this.searchItem.trim().toLowerCase();
            el = el.toLowerCase();
            return el.includes(filter);
        },
        toggleDone(i) {
            const newList = this.list.map((element, index) => {
                if (index === i) {
                    element.done = !element.done
                }
                return element;
            });
            this.list = newList;
        },
        isDone(index) {
            return this.list[index].done;
        }
    },
});