import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BoardComponent } from './map/board.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule],
  declarations: [BoardComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [BoardComponent]

})
export class AppModule { }
