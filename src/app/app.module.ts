import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from  '@angular/forms';

import { ROUTES } from './app.routes'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { GamesComponent } from './components/games/games.component';
import { ConsolesComponent } from './components/consoles/consoles.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { JogosComponent } from './components/jogos/jogos.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    GamesComponent,
    ConsolesComponent,
    AboutmeComponent,
    JogosComponent,
   
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


//recuperar e importar o routerModule e falar qual o mapa de rotas que vai ser criado no app routes { ROUTES }
//e encaminhar para o metodo ForRoot ( que é um mapeapemnto de rotas global) forchild(mapeamento de rotas internas)
//apos configurar o router module, precisamos falar ao angular qual a região que o component que vai receber as rotas com o  Router Outlet