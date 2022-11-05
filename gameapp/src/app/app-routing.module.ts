import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from "./views/game/game.component";
import { SobreComponent } from "./views/sobre/sobre.component";

const routes: Routes = [
    {path: 'game', component: GameComponent}, //Botando '' | '**' |  no path balbla
    {path: '', component: SobreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
