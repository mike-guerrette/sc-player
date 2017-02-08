import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// App components
import {SearchComponent} from "./components/search/search.component";
import {SoundCloudService} from "./services/sound-cloud.service";
import {TrackListComponent} from "./components/track-list/track-list.component";
import { PlayerComponent } from './components/player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TrackListComponent,
    PlayerComponent
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
