import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ViewportserviceService } from '../services/viewportservice.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {

  @ViewChild('contact') private parentRef: ElementRef<HTMLElement>;
  contactElement: HTMLElement;

  constructor(private http: HttpClient, private viewPortService: ViewportserviceService) { }

  endpoint: string;

  onSubmit(myForm: NgForm) {

    console.log(myForm.value);
    console.log(myForm.valid);

    //You may also want to check the response. But again, let's keep it simple.
    if (myForm.valid) {
      this.http.post(this.endpoint, myForm.value)
        .subscribe(
          (response) => { console.log(response) },
          (response) => { console.log(response) }
        );
    }
  }

  ngOnInit(): void {
    //Start php via the built in server: $ php -S localhost:8000
    this.endpoint = "https://mihai-andrei-neacsu.developerakademie.com/email/sendMail.php";
    //this.endpoint = "http://localhost:4200/src/app/sendEmail.php";
  }

  ngAfterViewInit() {
    this.contactElement = this.parentRef.nativeElement;
  }
  
  onInViewportChange(inViewport: boolean, id: string) {
    this.viewPortService.isVisible = inViewport;
    this.viewPortService.currentInView = id;
    this.viewPortService.contactIsVissible = inViewport;
  }
}
