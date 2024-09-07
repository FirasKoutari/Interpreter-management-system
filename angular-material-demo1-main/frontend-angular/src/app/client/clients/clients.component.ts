import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Router} from "@angular/router";
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../../Dialog/popup/popup.component';
import { Client } from '../../Model/Client';
import { UserService } from '../../services/user.service';
import { ConfirmDialogComponent } from '../../Dialog/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent implements OnInit,AfterViewInit {
  public clientList !:Client[];
  public dataSource : any;
  public displayedColumns: string[] = ["id", "name", "langue", "status", "actions"];

  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;
  constructor(private service:UserService,private dialog: MatDialog,private router: Router){
    this.loadclient();
  }
  loadclient(){
    this.service.GetClient().subscribe(res => {
      this.clientList=res;
      this.dataSource=new MatTableDataSource<Client>(this.clientList);
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
  
  filterclients(event : Event){
    let value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  addClient(){
    this.Openpopup(0,'Add Client');
  }

  updateClient(id: any) {
    this.Openpopup(id,'Edit Client');
  }

  deleteClient(client: Client) {
    // Ouvrir un dialogue de confirmation
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { message: `Êtes-vous sûr de vouloir supprimer le client ${client.name}?` }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.service.DeleteClient(client.id).subscribe({
          next: () => {
            // Recharger les clients après suppression
            this.loadclient();
          },
          error: (err) => {
            console.error('Erreur lors de la suppression du client:', err);
          }
        });
      }
    });
  }

  viewDetails(client: Client) {
    // Handle view details logic here
    this.router.navigate(['/admin/clients', client.id]);
  }

  Openpopup(id:any, title:any) {
    var _popup=this.dialog.open(PopupComponent, {
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
      this.loadclient();
    })
  }
}
