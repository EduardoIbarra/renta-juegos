import { Component, OnInit } from '@angular/core';
import { GamesFirebaseService} from '../services/games.service';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
    game: any = {};
    games: any = [];
    editing = false;
    constructor(public gamesService: GamesFirebaseService) {
        this.games = gamesService.items;
    }
    ngOnInit() {
    }
    store() {
        if (!this.editing) {
            this.game.deleted = false;
            this.gamesService.store(this.game)
                .then((item) => {
                    console.log(item);
                    alert('Creado con éxito!');
                    this.game = {};
                })
                .catch((error) => {
                    alert('Ocurrió un error');
                    console.log(error);
                });
        } else {
            this.gamesService.update(this.game)
                .then((item) => {
                    console.log(item);
                    alert('Editado con éxito!');
                    this.game = {};
                    this.editing = false;
                })
                .catch((error) => {
                    alert('Ocurrió un error');
                    console.log(error);
                });
        }
    }
    remove(game) {
        game.deleted = true;
        this.gamesService.update(game);
    }
    edit(game) {
        this.editing = true;
        this.game = game;
    }
    trackByFn = (idx, obj) => obj.$key;
}