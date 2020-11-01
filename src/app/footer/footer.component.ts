import { Component, OnInit } from '@angular/core';
import { ProgressBarService } from '../services/progress-bar.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public progressBar: ProgressBarService) { }

  ngOnInit(): void {
    
  }

}
