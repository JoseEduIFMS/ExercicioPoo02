class Jogador{
    constructor(nome, posicao, nascimento, nacionalidade, altura, peso, aposentadoria){
        this.nome = nome
        this.posicao = posicao
        this.nascimento = nascimento
        this.nacionalidade = nacionalidade
        this.altura = altura
        this.peso = peso
        this.aposentadoria = aposentadoria
    }

    calcularIdade(){
        return 2022 - this.nascimento;
    }

    tempoAposentadoria(){
        let atacante = 35;
        let meioCampo = 38;
        let defesa = 40;
  

    if(this.posicao == "atacante"){
        return atacante - this.calcularIdade();
}
    if(this.posicao == "meioCampo"){
        return meioCampo - this.calcularIdade();
    }
    if(this.posicao == "defesa"){
        return defesa - this.calcularIdade();
    }
}
}


let jogador1 = new Jogador("Pedro","Atacante",1990,"Brasileiro",1.71,65,35);
console.log("Nome: " + jogador1.nome)
console.log("Posição: " + jogador1.posicao)
console.log("Data de Nascimento: " + jogador1.nascimento)
console.log("Nacionalidade: " + jogador1.nacionalidade)
console.log("Altura: " + jogador1.altura+"M")
console.log("Peso: " + jogador1.peso+"KG")
console.log("A idade do jogador é: " + jogador1.calcularIdade()+" anos.")
console.log("Faltam " + (35 - 32) + " anos para " + jogador1.nome + " se aposentar.")
