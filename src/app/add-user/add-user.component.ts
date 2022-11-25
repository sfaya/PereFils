import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from '../Models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

addUserForm= this.fb.group({
  idCustomer:['7'],
  firstName:[''],
  lastName:[''],
  birthDate:[''],
  email:[''],
  password:[''],
  profession:[''],
  accountCategory:[''],
  picture:['']

});


  constructor( private fb:FormBuilder) { }

  ngOnInit(): void {
  }

@Output() sender=new EventEmitter();


  save(){
    let User:User = this.addUserForm.value;
    console.log(User);

    this.sender.emit(User);
  }
}
