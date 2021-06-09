import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  public user = {};
  constructor(public afAuth: AngularFireAuth, public router: Router, private firestore: AngularFirestore) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('isLoggedin', JSON.stringify(this.user));
      } else {
        localStorage.setItem('isLoggedin', '');
      }
    });
  }
  async login(email: string, password: string) {
    var result = await this.afAuth.signInWithEmailAndPassword(email, password)
  }
  async register(email: string, password: string) {
    await this.afAuth.createUserWithEmailAndPassword(email, password)
  }
  // Employee CRUD Model

  addNewEmployee = (Employee: any) => {
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection('Employee').add(Employee).then(res => resolve(res), error => reject(error));
    });
  }
  UpdateEmployee = (Employee: any) => {
    return new Promise<any>((resolve, reject) => {
      this.firestore.doc(`Employee/${Employee.id}`).update(Employee).then(res => resolve(res), error => reject(error));
    });
  }
  DeleteEmployee = (Employee: any) => {
    return new Promise<any>((resolve, reject) => {
      this.firestore.doc(`Employee/${Employee.id}`).delete().then(res => resolve(res), error => reject(error));
    });
  }
  GetAllEmployee = () => {
    return this.firestore.collection('Employee').snapshotChanges();
  }
}
