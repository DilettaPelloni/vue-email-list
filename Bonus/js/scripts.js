const { createApp } = Vue;

createApp({
    data() {
        return {
            emails: [],
            emailsprovv: []
        }//return
    },//data
    methods: {

    },//methods
    mounted() {
		for (let i = 0; i < 10; i++) {
            axios.get ('https://flynn.boolean.careers/exercises/api/random/mail')
            .then ((response) => {
                this.emailsprovv.push(response.data.response);
                if(this.emailsprovv.length == 10) {
                    this.emails = [...this.emailsprovv];
                }
            });
        }
	}//mounted
}).mount('#app');

//cosa ho fatto:
//salvo i dati in un array provvisorio e li metto nell'array definitivo solamente dopo che l'ultima richiesta è stata soddisfatta


//a cos'altro ho pensato:
//potrei fare senza array provvisorio, alimentare direttamente l'array emails come nell'esercizio base, ma mostrare ul solamente quando la lunghezza di emails è uguale a 10.

//nessuna delle due soluzioni mi piace tantissimo, aspetto la correzione per vedere come si fa davvero XD
