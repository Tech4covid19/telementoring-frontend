import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  public form: FormGroup;
  public title: string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.title = data.title;
  }

  ngOnInit() {
    this.form = this.fb.group({});
  }

  yes() {
    this.dialogRef.close('yes');
  }

  no() {
    this.dialogRef.close('close');
  }
}
