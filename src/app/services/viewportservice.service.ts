import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewportserviceService {
  public isVisible = false;
  public currentInView: string;
  public homeIsVissible: boolean;
  public aboutIsVissible: boolean;
  public projectsIsVissible: boolean;
  public contactIsVissible: boolean;

  constructor() { }
}
