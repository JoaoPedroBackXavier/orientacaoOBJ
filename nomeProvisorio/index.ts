class Turma {
    alunos: Aluno[] = []
// nao vai no constructor
    serie: number
    professores: Professor[] = []
    constructor(serie: number){
        this.serie = serie
    }
    public adicionarAluno(aluno: Aluno){
        this.alunos.push(aluno)
        aluno.turma = this
    }

    public adicionarProfessor(professor: Professor){
        this.professores.push(professor)
        professor.turma = this
    }
    
}

// a turma tem que ser definida antes dos alunos e professores

class Aluno {
    nome: string
    turma: Turma
// a turma vai ser definida pela função que esta na classe de turma
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
    nome: string
    id: number
    cargo: string
    salario: number
    constructor(nome: string, id: number, cargo: string, salario: number){
        this.nome = nome
        this.id = id
        this.cargo = cargo
        this.salario = salario
    }
}

enum Disciplina{
    "matematica",
    "portugues",
    "quimica",
    "biologia",
}
// disciplina que o professor pode ter ^^^^^^

class Professor extends Funcionario{
    turma: Turma
// a turma vai ser definida pela função que esta na classe de turma
    sala: number
    diciplina: Disciplina
    constructor(nome: string, id: number, cargo: string, salario: number, sala: number, diciplina: Disciplina){
        super(nome,id,cargo,salario)
        this.sala = sala
        this.diciplina = diciplina
    }
}

class FuncionarioAdministrativo extends Funcionario{
    // diretor, vice diretor , etc
    setor:string
    responsabilidade:string[]
    constructor(nome: string, id: number, cargo: string, salario: number, setor: string, responsabilidade: string[]){
        super(nome,id,cargo,salario)
        this.setor = setor
        this.responsabilidade = responsabilidade

    }
}



