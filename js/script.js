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
        modeIcon: true,
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
            this.searchItem = ''
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
                this.modeIcon = !this.modeIcon;
            } else {
                this.backgroundColor = 'light-mode';
                this.mode = 'Dark';
                this.defaultColor = '';
                this.modeIcon = !this.modeIcon;
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
                    element.done = !element.done;
                }
                return element;
            });
            this.list = newList;
        },
        isDone(index) {
            return this.list[index].done;
        },
        allDone() {
            const allDone = this.list.map((element, index) => {
                element.done = true;
                return element;
            });
            this.list = allDone;
        },
        allNoDone() {
            const allNoDone = this.list.map((element, index) => {
                element.done = false;
                return element;
            });
            this.list = allNoDone;
        },
    },
});