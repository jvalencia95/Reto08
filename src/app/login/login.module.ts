import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { IncorrectoComponent } from './incorrecto/incorrecto.component';
import { CorrectoComponent } from './correcto/correcto.component';



@NgModule({
  declarations: [
    ContentComponent,
    IncorrectoComponent,
    CorrectoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContentComponent
  ]
})
export class LoginModule { }
