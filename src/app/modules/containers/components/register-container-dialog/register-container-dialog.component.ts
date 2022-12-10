import { ContainerCategory } from './../../enums/container-category.enum';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ContainerType } from '../../enums/container-type.enum';

@Component({
  selector: 'app-register-container-dialog',
  templateUrl: './register-container-dialog.component.html',
  styleUrls: ['./register-container-dialog.component.scss'],
})
export class RegisterContainerDialogComponent implements OnInit {
  form!: FormGroup;
  containerTypes: string[] = ['20/40', '30/60', '40/80'];
  containerCategories: string[] = ['importação', 'exportação'];

  constructor(
    public dialogRef: MatDialogRef<RegisterContainerDialogComponent>
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      code: new FormControl(null),
      customerCpf: new FormControl(null),
      type: new FormControl(null),
      isFull: new FormControl(null),
      category: new FormControl(null),
    });
  }

  getErrorMessage(control: AbstractControl, message: string) {
    if (control.hasError('required')) {
      return `Campo obrigatório`;
    }

    return control.hasError('code') ? message : '';
  }
}
