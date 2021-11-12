import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './containers/home/home.component';
import { SearchComponent } from './containers/search/search.component';
import { VideoPlayerComponent } from './containers/video-player/video-player.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nasa-search', component: SearchComponent },
  { path: 'video/:id', component: VideoPlayerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
