import { Component, OnInit } from '@angular/core';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

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

    async updateBalance() { 
        var user_id  ;
        await firebase.firestore().collection('costumer').where("identifier", '==', this.identifier)
        .get()
        .then((value) => user_id= value.docs[0].id);

        if(user_id != null){ await firebase.firestore().collection('costumer').doc(user_id).update({balance: firebase.firestore.FieldValue.increment(this.balance)}); }

        location.reload();
    }
}