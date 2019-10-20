export class ModeloDeConsole { 
   public id: number
   public nome: string
   public curiosidades: string
   public jogos: Array<any>
   public categoria: string
   public imagens: Array<any>
}

export interface ModeloDeJogos {
   categoria : string,
   nomeJogo: string
}


export interface Form {
      name: string,
      email: string,
      mensg: string
   
}


