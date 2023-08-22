 class cachorro{
      nome: string;
      raca: string;
      idade: number;

       constructor(nome: string, raca: string, idade: number)
{
    this.nome = nome;
    this.raca = raca;
    this.idade = idade
}

      apresentar(){
      return " oi,eu sou " + this.nome + " ,uma " + this.raca + " de " + this.idade + " anos ";
      }

      apresentarPara(duda: string){
        return " oi " + duda+", eu sou " + this.nome + " ,uma " + this.raca + " de " + this.idade + " anos ";
        }
 }

 let Sophia = new cachorro("Sophia", "Shih-tzu", 3)
 let Aisha = new cachorro("Aisha", "yorkshire", 4)
 let Luli = new cachorro("Luli", "yorkshire", 12)
 let Dara = new cachorro("Dara", "Rottweiler", 7)

 console.log(Sophia.nome);
 console.log(Aisha.nome);
 console.log(Luli.nome);
 console.log(Dara.nome);
 console.log("");
 console.log(Sophia.apresentar());
 console.log(Aisha.apresentar());
 console.log(Luli.apresentar());
 console.log(Dara.apresentar());
 console.log("");
 console.log(Sophia.apresentarPara("duda"));
 console.log(Aisha.apresentarPara("eduarda"));
 console.log(Luli.apresentarPara("madu"));
 console.log(Dara.apresentarPara("maria"));
