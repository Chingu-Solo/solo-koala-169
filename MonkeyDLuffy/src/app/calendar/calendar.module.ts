import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarParentComponent } from './components/';

@NgModule({
	declarations: [CalendarParentComponent],
	imports: [
		CalendarRoutingModule,

		CommonModule
	]
})

export class CalendarModule { }
