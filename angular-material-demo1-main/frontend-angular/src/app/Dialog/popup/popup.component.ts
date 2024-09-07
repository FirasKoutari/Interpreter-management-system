import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';
import { InterpreterService } from '../../services/interpreter.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  inputdata: any;
  myform = this.buildr.group({
    name: this.buildr.control(''),
    langue: this.buildr.control(''),
    status: this.buildr.control('')
  });
  editdata: any;
  closemessage = 'closed using directive'
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<PopupComponent>, private buildr: FormBuilder,private service:UserService,private interpreterservice:InterpreterService) {}
  ngOnInit(): void {
    this.inputdata = this.data;
    if (this.inputdata.id > 0) {
      this.setpopupdata(this.inputdata.id);
    }
  } 

  setpopupdata(id: any) {
    this.service.GetClientbyid(id).subscribe(item => {
      this.editdata = item;
      this.myform.setValue({
        name: this.editdata.name,
        langue: this.editdata.langue,
        status: this.editdata.status
      });
    });
  }
  
  closepopup(){
    this.ref.close('Closed using function');
  }
  

  saveClient() {
    if (this.inputdata.id > 0) {
      // Update existing client
      this.service.UpdateClient(this.inputdata.id, this.myform.value).subscribe({
        next: () => {
          this.closepopup();
        },
        error: (err) => {
          console.error('Error updating client:', err);
        }
      });
    } else {
      // Save new client
      this.service.SaveClient(this.myform.value).subscribe({
        next: () => {
          this.closepopup();
        },
        error: (err) => {
          console.error('Error saving client:', err);
        }
      });
    }
  }
 

}
