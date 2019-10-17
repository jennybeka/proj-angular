import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsoleService } from '../../consoles.service';
import { ModeloDeConsole } from '../../shared/tipo.model';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css'],
  providers: [ConsoleService]
})

export class JogosComponent implements OnInit {

  public videogames: ModeloDeConsole[]
  public consoleClicado: ModeloDeConsole



  constructor(
    private route: ActivatedRoute,
    private consoleService: ConsoleService
  ) {

  }

  ngOnInit() {
    // this.consoleService.getJogos()
    // .then(
    //   (jogoDeCadaConsole: ModeloDeConsole ) => {

    //     this.jogoDeCadaConsole = jogoDeCadaConsole
    //  })

    this.consoleService.getConsoles()
      .then(
        (videogames: ModeloDeConsole[]) => {
          this.videogames = videogames
        })

    this.consoleService.getConsolePorId(this.route.snapshot.params['id'])
      .then((consoleClicado: ModeloDeConsole) => {
        this.consoleClicado = consoleClicado

        console.log(this.consoleClicado.nome)

      })
  }

}


/////////////////////////////////coments///////////////////////////////////////////
//um snapshot da rota que esta ativa
//um subscribe assiste as modificações do objeto e reagimos com alguma ação
    //  this.route.params.subscribe((parametro: any) =>{
    //    console.log(parametro.id)
    //  })