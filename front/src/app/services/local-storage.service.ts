import {Injectable} from "@angular/core";

@Injectable()
export class LocalStorageService {
  
  get(name: string, defaultValue: any): any {
    let storage = localStorage.getItem(name);
    
    try {
      return JSON.parse(storage) || defaultValue;
    } catch (e) {
      return defaultValue;
    }
  }
  
  put(name: string, object: object) {
    localStorage.setItem(name, JSON.stringify(object));
  }
}
