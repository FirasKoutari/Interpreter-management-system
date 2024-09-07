import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Router} from "@angular/router";
import { MatDialog } from '@angular/material/dialog';
import { Interpreter } from '../../Model/Interpreter';
import { ConfirmDialogComponent } from '../../Dialog/confirm-dialog/confirm-dialog.component';
import { PopupInterpreterComponent } from '../../Dialog/popup-interpreter/popup-interpreter.component'; 
import { InterpreterService } from '../../services/interpreter.service';
@Component({
  selector: 'app-interpreters',
  templateUrl: './interpreters.component.html',
  styleUrl: './interpreters.component.css'
})
export class InterpretersComponent implements OnInit,AfterViewInit{
  public interpreterList !:Interpreter[];
  public dataSource : any;
  public displayedColumns: string[] = ["id", "name", "langue", "status", "type", "ville", "actions"];

  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;
  constructor(private service:InterpreterService,private dialog: MatDialog,private router: Router){
    this.loadinterpreter();
  }
  loadinterpreter(){
    this.service.GetInterpreter().subscribe(res => {
      this.interpreterList=res;
      this.dataSource=new MatTableDataSource<Interpreter>(this.interpreterList);
      // Initialize paginator and sort
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  filterInterpreters(event : Event){
    let value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  addInterpreter(){
    this.Openpopup(0,'Add Interpreter');
  }

  updateInterpreter(id: any) {
    this.Openpopup(id,'Edit Interpreter');
  }

  deleteInterpreter(interpreter: Interpreter) {
    // Ouvrir un dialogue de confirmation
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { message: `Êtes-vous sûr de vouloir supprimer le interpreter ${interpreter.name}?` }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.service.DeleteInterpreter(interpreter.id).subscribe({
          next: () => {
            // Recharger les clients après suppression
            this.loadinterpreter();
          },
          error: (err) => {
            console.error('Erreur lors de la suppression du interpreter:', err);
          }
        });
      }
    });
  }

  viewDetails(interpreter: Interpreter) {
    // Handle view details logic here
    this.router.navigate(['/admin/interpreters', interpreter.id]);
  }

  Openpopup(id:any, title:any) {
    var _popup=this.dialog.open(PopupInterpreterComponent, {
      width: '60%',
      enterAnimationDuration:'100ms',
      exitAnimationDuration:'100ms',
      data:{
        title:title,
        id: id
      }
    });
    _popup.afterClosed().subscribe(item=>{
      // console.log(item);
      this.loadinterpreter();
    })
  }
}
