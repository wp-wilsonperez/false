<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar.component';
import { DirectivesModule } from '../../theme/directives/directives.module';

export const routes = [
  { path: '', component: CalendarComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DirectivesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CalendarComponent
  ]
})
export class CalendarModule { }
=======
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar.component';
import { DirectivesModule } from '../../theme/directives/directives.module';

export const routes = [
  { path: '', component: CalendarComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DirectivesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CalendarComponent
  ]
})
export class CalendarModule { }
>>>>>>> 64d67aca73e9be188c2c2b31073cc8a07ac31205
