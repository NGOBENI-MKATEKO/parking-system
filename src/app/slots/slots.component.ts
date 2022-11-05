import { Component, OnInit } from '@angular/core';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app'

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.scss']
})
export class SlotsComponent implements OnInit {

  slots:any [] = [];
  ngOnInit(): void {

    const firebaseConfig = {
      apiKey: "AIzaSyDAsHW2oBa7KL0FtleQDqIT8LrbGZs3sWs",
      authDomain: "parking-web-16095.firebaseapp.com",
      projectId: "parking-web-16095",
      storageBucket: "parking-web-16095.appspot.com",
      messagingSenderId: "914736979963",
      appId: "1:914736979963:web:d19db58e6f2f3fc92af55e"
    };
      firebase.initializeApp(firebaseConfig); 
      //this.getCostumers(); 
      this.getSlots();
    }
   
    // async getCostumers() { 
    //   const snapshot = await firebase.firestore().collection('costumer').get();
    //   snapshot.forEach((doc) => this.costumers.push(doc.data()));
    // }

    async getSlots() { 
      const snapshot = await firebase.firestore().collection('slot').get();
      snapshot.forEach((doc) => this.slots.push(doc.data()));
  }

}
