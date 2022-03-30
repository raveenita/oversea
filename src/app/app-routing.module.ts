import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoomComponent } from './room/room.component';

const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'room', component: RoomComponent },
    { path: 'create-room', component: CreateRoomComponent },
    { path: 'dashboard', component: DashboardComponent }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}