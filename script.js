// :package: CONSEGNA:
// Attraverso l'apposita API di Boolean generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// :gift: BONUS:
// Far comparire gli indirizzi email solamente quando sono stati tutti generati (v. live coding)
// Rimuovere la chiamata al mount e invece aggiungere un input e un pulsante. La richiesta partirà al click sul pulsante e recupererarà N indirizzi mail, dove N è il numero inserito dall'utente in input.
// :brain: RICORDATE DI:
// Usare console.log o debugger per verificare i dati ad ogni passaggio, per evitare problemi lunghi.
// Importare axios, altrimenti non funziona nulla
// Testare la richiesta prima nel browser (visitando l'indirizzo) per sapere cosa aspettarvi in risposta
// Procedere un passo alla volta


const { createApp } = Vue

createApp({
    data() {
        return {
           mailGenerata: ``, 
           email: [],
           indirizzo: `https://flynn.boolean.careers/exercises/api/random/mail`,
           numeroMailGen: ``
        }
    },
    
    methods: {
        getMail(i){
            axios.get(this.indirizzo).then((r) =>{
                let mailGenerata = r.data.response
                console.log(mailGenerata)
                this.email.push(mailGenerata)
            })
        },
        
        myCycleFor(numero){
            this.numeroMailGen = document.getElementById(`input`).value 
            for (let i = 0; i < this.numeroMailGen; i++){
                this.getMail(i)
                console.log(this.numeroMail)
            }
        }
    },

    mounted(){
        console.log(`Benvenuto`)
    }

}).mount('#app')