import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { ConsoleService } from '../../consoles.service';
import { ModeloDeJogos } from '../../shared/tipo.model';

import { ModeloDeConsole } from '../../shared/tipo.model'; //apagar se n der
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ConsoleService]

})
export class HomeComponent implements OnInit {

  public videogames: ModeloDeConsole[]
  public jogos2: ModeloDeConsole[]
  public jogosInternos: Array<ModeloDeJogos>

  public videoGame: Observable<ModeloDeConsole[]>
  public jogos: Observable<ModeloDeConsole[]>

  public dadosNaoEncontrados: Boolean


  public pesquisa = new FormGroup({ //formGroup para o formulario 
    videoGame: new FormControl(), // formControl para cada elementos do formulario
    jogo: new FormControl(),
    categoria: new FormControl() // NÃO CONSIGO MAIS REMOVER O FORMGROUP

  });

  // @Output()
  // search = new EventEmitter<any>();

  constructor(private consoleService: ConsoleService) { }


  ngOnInit() {
    this.qualConsole('')
  }


  // public qualConsole(event: Event): void {
  //   console.log((<HTMLInputElement>event.target).value)
  // }


  public qualConsole(termoDaBusca: string): void {
    this.videoGame = this.consoleService.pesquisaConsole(termoDaBusca)

    this.videoGame.subscribe(
      (videoGame: ModeloDeConsole[]) => {
        console.log(videoGame),
          (erro: any) => console.log('Erro status:', erro.status)
        this.videogames = videoGame

        if (this.videogames.length == 0) {
          this.dadosNaoEncontrados = true
        } else {
          this.dadosNaoEncontrados = false
        }

      })

  }


  //****************Esta parte de buscar por jogo, não consegui fazer com os metodos (find e filter).*************************
  //*************Forma de acessar o array de objetos do JSON não encontrada.
  //******************nomeJogo aparecia com erro pq o object não é encontrado!!! ***********************************

  public qualJogo(parametro: string): void {
    this.videoGame = this.consoleService.pesquisaConsole('')
    parametro.toLowerCase()

    this.videoGame.subscribe(
      (videoGame: ModeloDeConsole[]) => {
        let videoGameAux: ModeloDeConsole[] = []
        this.videogames = videoGame

        // const filterJogos = videoGameAux.filter(x => x.nomeJogo.toLowerCase().search(parametro)== parametro);
        // console.log(filterJogos);

        for (let i = 0; i < this.videogames.length; i++) {
          this.jogosInternos = this.videogames[i].jogos

          for (let j = 0; j < this.jogosInternos.length; j++) {
            if ((this.jogosInternos[j].nomeJogo.toLowerCase().search(parametro)) !== -1) {
              videoGameAux.push(this.videogames[i])
              break
            }
          }
        }
        this.videogames = videoGameAux
        if (this.videogames.length == 0) {
          this.dadosNaoEncontrados = true
        } else {
          this.dadosNaoEncontrados = false
        }
      })
  }

}