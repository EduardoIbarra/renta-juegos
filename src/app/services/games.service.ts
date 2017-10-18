import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GamesFirebaseService {
    private itemsCollection: AngularFirestoreCollection<any>;
    items: Observable<any[]>;
    countItems = 0;
    constructor(public afs: AngularFirestore) {
        this.itemsCollection = this.afs.collection<any>('games');
        this.items = this.itemsCollection.snapshotChanges()
            .map(actions => {
                this.countItems = actions.length;
                return actions.map(action => ({ $key: action.payload.doc.id, ...action.payload.doc.data() }));
            });
    }
    public store = (game) => {
        return this.itemsCollection.add(game);
    }
    public update(game) {
        return this.itemsCollection.doc(game.$key).update(game);
    }
}
