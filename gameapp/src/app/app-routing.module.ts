import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from "./views/game/game.component";
import { SobreComponent } from "./views/sobre/sobre.component";

const routes: Routes = [
    {path: 'jogo', component: GameComponent},
    {path: 'sobre', component: SobreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
