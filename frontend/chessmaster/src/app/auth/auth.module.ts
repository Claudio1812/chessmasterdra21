import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthmainComponent } from './authmain/authmain.component';

import { AuthRoutingModule  } from './auth-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AuthmainComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule
  ]
})
export class AuthModule { }
