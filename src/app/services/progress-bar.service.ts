import { Injectable } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {

  public mode = "determinate" as ProgressBarMode;

  constructor() { }
}
