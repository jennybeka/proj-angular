import { Routes } from '@angular/router'

import { HomeComponent } from './components/home/home.component'
import { GamesComponent } from './components/games/games.component'
import { ConsolesComponent } from './components/consoles/consoles.component'
import { AboutmeComponent } from './components/aboutme/aboutme.component'
import { JogosComponent } from './components/jogos/jogos.component'

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'games', component: GamesComponent },
    { path: 'consoles', component: ConsolesComponent },
    { path: 'aboutme', component: AboutmeComponent },
    { path: 'jogos', component: JogosComponent },
    { path: 'jogos/:id', component: JogosComponent },
    //{path: 'consoles/:id', component: ConsolesComponent}, //no momento que ele for acessado com um parametro precisamos do ID
   // { path: 'path', component: NameComponent },
]
