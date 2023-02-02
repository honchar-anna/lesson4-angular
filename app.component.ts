import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lesson4';
 public contacts:Contact[]=[
  {
   firstName:'Ivan', 
   lastName:'Alich',
   phoneNumber:'0687995705'

  },
  {
    firstName:'Vasul', 
    lastName:'Polin',
    phoneNumber:'0697945705'
 
   },
  {
    firstName:'Lisa', 
    lastName:'Nuel',
    phoneNumber:'0983027408'
 
   }
   , {
    firstName:'Polina', 
    lastName:'Cherni',
    phoneNumber:'0987301704'
 
   }
   , {
    firstName:'Anna', 
    lastName:'Kolen',
    phoneNumber:'0987301745'
 
   }
 ]
public index!:number
public sortF = true
public hideF = false
public sortL = true
public hideL = false
public sortN = true
public hideN = false
public fied = '';
public modal = 'none'
public modalEdit='none'
public fName !:string
public lName !:string
public nPhone !:string
public fEdit !:string
public lEdit!:string
public nEdit !:string

public newContact:Contact = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
};


add(){
  this.modal = 'modal'

}
save(){
 this.newContact= {
   firstName:this.fName,
   lastName:this.lName,
   phoneNumber:this.nPhone
 }
 this.contacts.push(this.newContact)
 this.modalEdit= 'none'
}
edit(i:number){
this.modalEdit = 'modal-edit'


this.fEdit = this.contacts[i].firstName
this.lEdit = this.contacts[i].lastName
this.nEdit = this.contacts[i].phoneNumber
console.log(this.fEdit = this.contacts[i].firstName);
console.log(this.fEdit );
this.index = i

}
saveEdit(){

  this.contacts[this.index].firstName = this.fEdit
  this.contacts[this.index].lastName = this.lEdit
  this.contacts[this.index].phoneNumber = this.nEdit
  this.modal = 'none'
}

delete(i:number){
 this.contacts.splice(i,1)
}


sortFirstName(){
this.hideF = true
this.sortF = !this.sortF
this.sortL = !this.sortL
this.sortN = !this.sortN
console.log('sortFirstName');

}
sortLastName(){
  this.hideL = true
  this.sortL = !this.sortL
  this.sortF= !this.sortF
  this.sortN = !this.sortN
console.log('sortLastName');

  }
  sortPhoneNumber(){
    this.hideN = true
    this.sortN = !this.sortN
    this.sortL = !this.sortL
    this.sortF = !this.sortF
  }

}
export interface Contact{
   firstName:string;
   lastName:string;
   phoneNumber:string;

}