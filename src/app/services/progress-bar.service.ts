import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {

  public mode = "determinate";

  constructor() { }
}
