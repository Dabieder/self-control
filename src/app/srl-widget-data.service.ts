import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SrlWidgetDataService {

  constructor(private apiService: ApiService) { }

  getDataFromBackend() {
    // return 
  }
}
