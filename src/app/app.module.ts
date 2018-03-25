import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { EpisodeComponent } from './components/episode/episode.component';
import { SceneComponent } from './components/scene/scene.component';

import { EpisodeService } from './services/episode.service';
import { TermService } from './services/term.service';

import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    AppComponent,
    EpisodeComponent,
    SceneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarkdownModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [EpisodeService, TermService],
  bootstrap: [AppComponent]
})
export class AppModule { }
