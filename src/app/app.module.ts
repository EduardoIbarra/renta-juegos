import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {RouterModule, Routes} from '@angular/router';
import { GameComponent } from './game/game.component';
import {FormsModule} from "@angular/forms";
import {GamesFirebaseService} from "./services/games.service";

export const appRoutes: Routes = [
    {path: '', component: GameComponent},
    {path: 'game', component: GameComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        GameComponent
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireAuthModule,
        RouterModule.forRoot(appRoutes),
        FormsModule
    ],
    providers: [GamesFirebaseService],
    bootstrap: [AppComponent]
})
export class AppModule { }
