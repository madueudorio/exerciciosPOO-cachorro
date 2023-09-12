class   Eventos{
    nome: string;
    data: string;
    horario: string;

    constructor( nome: string, data: string, horario: string){
        this.nome = nome;
        this.data = data;
        this.horario = horario;
    };
}

class Agenda{
    private agendamento: Eventos[]=[];

    constructor(){

    }
    adicionarEvento(eventos: Eventos){
        this.agendamento.push(eventos);
    }
    visualizar(){
        console.log("Os eventos agendados são: ");
            for(let i=0; i<this.agendamento.length; i++){
                console.log(this.agendamento[i]);
            }
    }

    removerEvento(evento: Eventos){
    this.agendamento = this.agendamento.filter(item => item.nome != evento.nome);
    }
}
const evento1 = new Eventos("Casamento","10/10/2023","18:30");
const evento2 = new Eventos ("Batismo","15/10/2023","9:00");
const evento3 = new Eventos ("Festa de Aniversário","20/10/2023","20:00");

const meusEventos = new Agenda
meusEventos.adicionarEvento(evento1);
meusEventos.adicionarEvento(evento2);
meusEventos.adicionarEvento(evento3);


console.log(meusEventos.visualizar());