import {Injectable} from "@angular/core";

@Injectable()
export class LocalStorageService {
  
  get(storageName: string, defaultValue: any): any {
    let storage = localStorage.getItem(storageName);
    
    try {
      return JSON.parse(storage);
    } catch (e) {
      return defaultValue;
    }
  }
}
