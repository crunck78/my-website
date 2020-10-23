import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewportserviceService {
  public isVisible = false;
  public currentInView: string;
  public homeIsVissible: false;
  public aboutIsVissible: false;
  public projectsIsVissible: false;
  public contactIsVissible: false;

  constructor() { }
}
