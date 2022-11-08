console.log('ok')

const {createApp} = Vue;

const app = createApp(
    {
        data() {
            return{
                Mails: 0,
                

            }
        },
        methods: {
            
            
        },
        computed: {
           
        },
        mounted(){

        },
        created(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response)=>{
                console.log(response.data);
            })

        },
       

    }
);
app.mount('#app');

