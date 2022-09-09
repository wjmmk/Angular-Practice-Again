import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveContactRoutingModule } from './reactive-contact-routing.module';
import { ReactiveContactComponent } from './reactive-contact.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ReactiveContactComponent],
  imports: [
    CommonModule,
    ReactiveContactRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReactiveContactModule { }
