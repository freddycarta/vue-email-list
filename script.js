console.log('ok')

const {createApp} = Vue;

const app = createApp(
    {
        data() {
            return{
                mails: [],
                

            }
        },
        methods: {
            callApi(){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res)=>{
                console.log(res.data.response);
                this.mails.push (res.data.response);
            })
            }
            
            
        },
        computed: {
           
        },
        mounted(){

        },
        created(){
        for(let i = 0; i<=10; i++)
           this.callApi();

        },
       

    }
);
app.mount('#app');

