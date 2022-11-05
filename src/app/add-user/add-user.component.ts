import { Component, OnInit } from '@angular/core';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  name = ''; 
  surname= '';
  status = 0;
  balance = 0;
  identifier = 1;

  ngOnInit() {
      const firebaseConfig = {
        apiKey: "AIzaSyDAsHW2oBa7KL0FtleQDqIT8LrbGZs3sWs",
        authDomain: "parking-web-16095.firebaseapp.com",
        projectId: "parking-web-16095",
        storageBucket: "parking-web-16095.appspot.com",
        messagingSenderId: "914736979963",
        appId: "1:914736979963:web:d19db58e6f2f3fc92af55e"
      };
        firebase.initializeApp(firebaseConfig); 
        
    }

    async addCostumers() { 
        await firebase.firestore().collection('costumer').add({
          name: this.name,
          surname : this.surname,
          status: this.status,
          balance: this.balance,
          identifier : this.identifier,
          dateIn : new Date(),
          dateOut : new Date()

        });

    }

}
