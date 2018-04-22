import {Injectable} from "@angular/core";
import {LocalStorageService} from "../services/local-storage.service";

@Injectable()
export class VideoStatsService {
  
  constructor(private localStorage: LocalStorageService) {
  
  }
  
  videoDuration(duration: number, videoId: number) {
    const videos = this.localStorage.get('stats.videos', []);
    const video = videos.find(v => v.id === videoId);
    
    if (! video) {
      videos.push({id: videoId, duration: duration});
    } else {
      video.duration = duration;
    }
    
    this.localStorage.put('stats.videos', videos);
  }
  
  start(position: number, videoId: number) {
  
  }
  
  end(position: number, videoId: number) {
  
  }
}

interface VideoDuration {
  id: number;
  duration: number;
}
