import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// App components
import {SearchComponent} from "./components/search/search.component";
import {SoundCloudService} from "./services/sound-cloud.service";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    SoundCloudService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
