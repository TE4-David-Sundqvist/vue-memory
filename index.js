const { createApp } = Vue;



const App = {
    name: "App",
    data() {
        return {
            text: "Memory",
            cards: [],
            selected: 0,
            matched: 0,
        };
    },
    methods: {

    }
};

const app = createApp(App);


app.component('Card', {
    name: 'card',
    props: ['img', 'id'],
    data() {
        return {
            selected: false,
            matched: false
        }
    },
    methods: {

        selectCard() {

        },
    },
    template: '#cardtemplate'
});

app.mount("#main");