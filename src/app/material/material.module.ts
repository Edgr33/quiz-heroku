import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatRadioModule,
    MatSelectModule
  ],
  exports: [
    MatRadioModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
