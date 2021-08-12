import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProgressBarService } from '../../services/progress-bar.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {

  constructor(
    private http: HttpClient,
    private progressBar: ProgressBarService,
    public navigation: NavigationService) { }

  endpoint: string;
  submitReport: string;
  submitComplete = false;
  resultColor: string;

  onSubmit(myForm: NgForm) {
    this.progressBar.mode = "indeterminate";
    console.log(myForm.value);
    console.log(myForm.valid);

    //showProgressBar

    //You may also want to check the response. But again, let's keep it simple.
    if (myForm.valid) {
      this.http.post(this.endpoint, myForm.value)
        .subscribe(
          (response) => {
            console.log(response);
            this.resultColor = "#00ff88";
            this.submitReport = "Thank up for your Contact. I will replay as soon as possible!";
            this.submitComplete = true;
            myForm.reset();
          },
          (error) => {
            console.error(error);
            this.resultColor = "#ff0077";
            this.submitReport = "Error occure while sending your message! You can contact me directly on e-mail: crunck78@googlemail.com.";
            this.submitComplete = true;
          }
        );
    }
  }

  closeCard() {
    this.submitComplete = false;
    this.submitReport = '';
    this.progressBar.mode = "determinate";
  }

  ngOnInit(): void {
    //Start php via the built in server: $ php -S localhost:8000
    this.endpoint = "https://mihai-andrei-neacsu.developerakademie.com/email/sendMail.php";
    //this.endpoint = "http://localhost:4200/src/app/sendEmail.php";
  }

  ngAfterViewInit() {
    
  }
}