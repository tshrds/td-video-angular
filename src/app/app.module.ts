import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptHackComponent } from './scripthack.component';

@NgModule({
  declarations: [
    AppComponent,
    ScriptHackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, ScriptHackComponent]
})
export class AppModule { }
