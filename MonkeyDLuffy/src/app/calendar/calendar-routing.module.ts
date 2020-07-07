import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarParentComponent } from './components';

const routes: Routes = [
	{ path: '', component: CalendarParentComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CalendarRoutingModule { }
