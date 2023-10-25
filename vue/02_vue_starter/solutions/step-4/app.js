const app = Vue.createApp({
    template: '',
    data() {
        return {
            firstName: 'David',
            lastName: 'Pinezich',
            email: 'unknown@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        getUser() {
            console.log(this.firstName)
        }
    }
})

app.mount('#app')
