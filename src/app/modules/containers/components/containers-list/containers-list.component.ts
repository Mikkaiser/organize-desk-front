import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContainersService } from '../../containers.service';
import { ContainerInterface } from '../../interfaces/container.interface';
import { RegisterContainerDialogComponent } from '../register-container-dialog/register-container-dialog.component';

@Component({
  selector: 'app-containers-list',
  templateUrl: './containers-list.component.html',
  styleUrls: ['./containers-list.component.scss'],
})
export class ContainersListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: ContainerInterface[] = [];

  constructor(
    private readonly containerService: ContainersService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getContainers();
  }

  getContainers(): void {
    this.containerService
      .getContainers()
      .subscribe((data: ContainerInterface[]) => {
        this.dataSource = data;
      });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RegisterContainerDialogComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
