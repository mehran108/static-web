import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(public router: Router, private firestore: AngularFirestore) {
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
}
