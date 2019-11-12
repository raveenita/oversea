import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoomComponent } from './room/room.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigatorComponent } from './navigator/navigator.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { HeaderUserComponent } from './header-user/header-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    CreateRoomComponent,
    DashboardComponent,
    RoomComponent,
    NavigatorComponent,
    RoomsListComponent,
    HeaderUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
