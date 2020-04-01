import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [UsersComponent, UserComponent],
  imports: [CommonModule, ReactiveFormsModule, UsersRoutingModule]
})
export class UsersModule {}
