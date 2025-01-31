class Turma {
    alunos: Aluno[] = []
    professores: Professor[] = []
// esses dados nao vao ser IDs e sim o propio dado clonado ^^^^^^
    serie: number
    ID: number
    constructor(serie: number, ID: number){
        this.serie = serie
        this.ID = ID
    }


    public adicionarAluno(aluno: Aluno){
        this.alunos.push(aluno)
        aluno.idTurma = this.ID
    }
    public adicionarProfessor(professor: Professor){
        this.professores.push(professor)
        professor.idTurma = this.ID
    }
// funções para conectar um aluno ou um professor á uma turma ^^^^^^ (a turma tem um ID própio mas os alunos e professores vão ser guardados como clones nela)
}

class Aluno {
// aluno nao vai ter id própio
    nome: string
    idTurma: Number
// o "idTurma" vai ser definido pela função que esta na classe de turma
    serie: number
    identidade: {
        cpf: number,
        nomePai: string,
        dataNascimento: number
    }
    constructor(nome: string, serie: number, cpf: number, nomePai: string, dataNascimento: number){
        this.nome = nome
        this.serie = serie
        this.identidade = {cpf,nomePai,dataNascimento}
    }
}

class Funcionario{
// funcionarios em geral nao vao ter ID propio
    nome: string
    cargo: string
    salario: number
    constructor(nome: string, cargo: string, salario: number){
        this.nome = nome
        this.cargo = cargo
        this.salario = salario
    }
}

enum Disciplina{
    matematica = "matematica",
    portugues = "portugues",
    quimica = "quimica",
    biologia = "biologia",
    fisica = "fisica",
    eletricidade = "eletricidade"
}
// disciplina que o professor pode ter ^^^^^^

class Professor extends Funcionario{
    idTurma: Number
// o idTUrma vai ser definido pela função que esta na classe de turma
    sala: number
    diciplina: Disciplina
    constructor(nome: string, cargo: string, salario: number, sala: number, diciplina: Disciplina){
        super(nome,cargo,salario)
        this.sala = sala
        this.diciplina = diciplina
    }
}

class FuncionarioAdministrativo extends Funcionario{
    // diretor, vice diretor , etc
    setor:string
    responsabilidade:string[]
    constructor(nome: string, id: number, cargo: string, salario: number, setor: string, responsabilidade: string[]){
        super(nome,cargo,salario)
        this.setor = setor
        this.responsabilidade = responsabilidade

    }
}

// é tudo let por que o id vai ser ligado depois da declaração usando uma função
let turma1 = new Turma(1, 1)
let turma2 = new Turma(2, 1)
let turma3 = new Turma(3, 2)
let turma4 = new Turma(4, 2)
let turma5 = new Turma(5, 3)
let turma6 = new Turma(6, 3)

let aluno1 = new Aluno("joao", 1, 8796483856, "david", 31082007)
let aluno2 = new Aluno("luis", 3, 5863297836, "david",23012005)
let aluno3 = new Aluno("gabriel", 1, 6736247372, "david",11092007)
let aluno4 = new Aluno("ana", 2, 9386759210, "david",30112006)
let aluno5 = new Aluno("claudia", 3, 84058293047, "david",89052005)
let aluno6 = new Aluno("laura", 2, 1628395719, "david",27122006)
let aluno7 = new Aluno("paulo", 1, 2307420428, "david",17012007)
let aluno8 = new Aluno("eduardo", 3, 7726576732, "david",19062005)
let aluno9 = new Aluno("adrian", 3, 9603529685, "david",12022005)
let aluno10 = new Aluno("marcos", 1, 4836483295, "david",19102007)
// nao consegui pensar em mais nomes

let prof1 = new Professor("Jusara", "professor(a)", 3000, 30, Disciplina.biologia)
let prof2 = new Professor("Claudia", "professor(a)", 3000, 31, Disciplina.portugues)
let prof3 = new Professor("Rose", "professor(a)", 3000, 32, Disciplina.fisica)
let prof4 = new Professor("juliano", "professor(a)", 3000, 40, Disciplina.matematica)
let prof5 = new Professor("Marcio", "professor(a)", 3000, 41, Disciplina.quimica)
let prof6 = new Professor("Andre", "professor(a)", 3000, 42, Disciplina.eletricidade)

turma1.adicionarAluno(aluno1)
turma1.adicionarAluno(aluno7)
turma2.adicionarAluno(aluno2)
turma2.adicionarAluno(aluno8)
turma3.adicionarAluno(aluno3)
turma3.adicionarAluno(aluno9)
turma4.adicionarAluno(aluno4)
turma4.adicionarAluno(aluno10)
turma5.adicionarAluno(aluno5)
turma6.adicionarAluno(aluno6)

turma1.adicionarProfessor(prof1)
turma2.adicionarProfessor(prof2)
turma3.adicionarProfessor(prof3)
turma4.adicionarProfessor(prof4)
turma5.adicionarProfessor(prof5)
turma6.adicionarProfessor(prof6)

