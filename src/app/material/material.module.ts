import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  declarations: [],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
})
export class MaterialModule {}
