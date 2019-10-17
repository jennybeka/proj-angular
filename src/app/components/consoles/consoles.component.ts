import { Component, OnInit } from '@angular/core';
import { ConsoleService } from  '../../consoles.service';
import { ModeloDeConsole } from  '../../shared/tipo.model';

@Component({
  selector: 'app-consoles',
  templateUrl: './consoles.component.html',
  styleUrls: ['./consoles.component.css'],
  providers:  [ ConsoleService ] //importar quem serão os provedores de serviço
})

export class ConsolesComponent implements OnInit {
  public videogames: ModeloDeConsole[]

  //TESTE public games: Array<string> = ['jogo1', 'jogo2', 'jogo3', 'jogo4', 'jogo5']

  
  constructor(private consoleService: ConsoleService) { }

  ngOnInit() {
    this.consoleService.getConsoles()
    .then(
      (videogames: ModeloDeConsole[] ) => {
      
        this.videogames = videogames
     })

   .catch(( param: any ) => { 
     console.log(param) 
     
   }) 
  }

}
