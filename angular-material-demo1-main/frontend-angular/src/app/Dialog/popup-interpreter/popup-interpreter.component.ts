import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { InterpreterService } from '../../services/interpreter.service';

@Component({
  selector: 'app-popup-interpreter',
  templateUrl: './popup-interpreter.component.html',
  styleUrl: './popup-interpreter.component.css'
})
export class PopupInterpreterComponent {

  inputdata: any;
  myform = this.buildr.group({
    name: this.buildr.control(''),
    langue: this.buildr.control(''),
    status: this.buildr.control(''),
    type: this.buildr.control(''),
    ville: this.buildr.control(''),

  });


  editdata: any;
  closemessage = 'closed using directive'


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<PopupInterpreterComponent>, private buildr: FormBuilder,private interpreterservice:InterpreterService) {

  }


  ngOnInit(): void {
    this.inputdata = this.data;
    if (this.inputdata.id > 0) {
      this.setpopupdatainterpreter(this.inputdata.id);
    }
  } 

  

  setpopupdatainterpreter(id: any) {
    this.interpreterservice.GetInterpreterbyid(id).subscribe(item => {
      this.editdata = item;
      this.myform.setValue({
        name: this.editdata.name,
        langue: this.editdata.langue,
        status: this.editdata.status,
        type: this.editdata.type,
        ville: this.editdata.ville


      });

    });
  }
  
  closepopup(){
    this.ref.close('Closed using function');
  }
  

  saveInterpreter() {
    if (this.inputdata.id > 0) {
      // Update existing interpreter
      this.interpreterservice.UpdateInterpreter(this.inputdata.id, this.myform.value).subscribe({
        next: () => {
          this.closepopup();
        },
        error: (err) => {
          console.error('Error updating interpreter:', err);
        }
      });
    } else {
      // Save new interpreter
      this.interpreterservice.SaveInterpreter(this.myform.value).subscribe({
        next: () => {
          this.closepopup();
        },
        error: (err) => {
          console.error('Error saving interpreter:', err);
        }
      });
    }
  }

}
