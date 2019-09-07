import { Component, OnInit } from '@angular/core';
import { TestClass } from '../Models/test-class.model';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms'; 
import { Validators } from '@angular/forms';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private fb: FormBuilder) { 
  }

  profileForm = this.fb.group({ 
    firstName: ['', Validators.required], 
    lastName: [''], 
  });  

  public testClass: TestClass = new TestClass();
  public testClassArray: Array<TestClass>;

  submitClicked(): void{
    console.log("FullName", this.profileForm.controls["firstName"].value + " " + this.profileForm.controls["lastName"].value);
  }

  ngOnInit() {    
    this.testClassArray = [
      {name: "Moo", description: 'Sentence 1'},
      {name: "Bla", description: 'Sentence 2'},
      {name: "Hehe", description: 'Sentence 3'},
    ];
  }

}
