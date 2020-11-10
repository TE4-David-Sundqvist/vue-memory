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

        start(){

            list_of_imgs = ['1_pig', '2_squirrel', '3_rabbit', '4_frog', '5_fox', '6_bear', '7_monkey', '8_panda', '9_chick', '10_tiger', '11_penguin', '12_racoon', '1_pig', '2_squirrel', '3_rabbit', '4_frog', '5_fox', '6_bear', '7_monkey', '8_panda', '9_chick', '10_tiger', '11_penguin', '12_racoon']
            
            for(img of list_of_imgs){
                this.cards.push({
                    img: "img/" + img + ".png",
                    id: list_of_imgs.indexOf(img)
                });
            };

        },
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
})

app.mount("#main");