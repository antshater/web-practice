import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Video} from "../profile/video-interfaces";
import {VideoStatsService} from "./video-stats.service";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @ViewChild('video') videoRef: ElementRef;
  
  @Input() token: string;
  @Input() video: Video;
  
  constructor(private videoStatsService: VideoStatsService) { }

  ngOnInit() {
    //
    // this.videoStatsService.videoDuration(this.videoRef.nativeElement.duration, this.video.id);
    // this.videoRef.nativeElement.onplaying = (event) => {
    //   console.log('onplaying', event);
    // };
    //
    // this.videoRef.nativeElement.onseeked = (event) => {
    //   console.log('seeked', event, this.videoRef.nativeElement.currentTime, this.videoRef.nativeElement.duration);
    // };
    //
    // this.videoRef.nativeElement.onplay = (event) => {
    //   console.log('onplay', event);
    // };
    //
    // this.videoRef.nativeElement.onpause = (event) => {
    //   console.log('onpause', event);
    // };
  }

}
