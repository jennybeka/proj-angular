
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModeloDeConsole } from './shared/tipo.model';


import { URL_API } from '././apis/app.api';


import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable() export class ConsoleService { //para ser capaz de receber um serviço externo

    constructor(private http: HttpClient) { }

    public videogames: Array<ModeloDeConsole> = []//antes era um array de any


    public getConsoles(): Promise<ModeloDeConsole[]> {
        //efetuar uma requisição de http
        //e retornar uma promise Oferta[] //get consulta
        return this.http.get(URL_API) //para selecionar apenas as com true
            .toPromise()
            .then((resposta: any) => resposta)
    }

    public getConsolePorId(id: number): Promise<ModeloDeConsole> {
        return this.http.get(`${URL_API}?id=${id}`)
            .toPromise()
            .then((resposta: any) => resposta[0])
    }

    public pesquisaConsole(termo: string): Observable<ModeloDeConsole[]> {
        return this.http.get(`${URL_API}?nome_like=${termo}`)
            .pipe(map((resposta: any) => resposta))

    }

    public pesquisaJogo(termo: string): Observable<ModeloDeConsole[]> {
        return this.http.get(`${URL_API}?jogos_nomeJogo=${termo}`)
            .pipe(map((resposta: any) => resposta))

    }

}




// return this.videogames.indexOf((videogames: ModeloDeConsole) => videogames.jogos == termo);




    //retry(qtd Vezes) - recusro de tentativas de novas conexoes se um erro existir
    //map() recupera o valor de cada evento e transforma em um novo observable convertido no que precisamos
     //tem que importar este recusro da biblioteca do rxjs

    // public getJogos():Promise<ModeloDeConsole[]> {
    //     return this.http.get('http://localhost:3000/videogames') 
    //     .toPromise() 
    //     .then((resposta: any) => resposta)
    // }