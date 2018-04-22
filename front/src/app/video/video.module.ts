import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VideoComponent} from "./video.component";
import {VideoStatsService} from "./video-stats.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    VideoComponent,
  ],
  exports: [
    VideoComponent,
  ],
  providers: [
    VideoStatsService,
  ],
})
export class VideoModule { }
