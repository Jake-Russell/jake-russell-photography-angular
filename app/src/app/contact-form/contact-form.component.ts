import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormGroupDirective,
} from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onFormSubmit(formReference: FormGroupDirective) {
    this.http
      .post(
        `http://localhost/Jake-Russell-Photography-Angular/api/sendEmail.php`,
        this.contactForm.value
      )
      .subscribe(
        (data: any) => {
          if (data.response.title == 'Message Sent!') {
            this.toastrService.success(
              data.response.body,
              data.response.title,
              {
                timeOut: 5000,
                progressBar: true,
              }
            );
          } else {
            this.toastrService.error(data.response.body, data.response.title, {
              timeOut: 5000,
              progressBar: true,
            });
            console.log(data.response.body);
          }
        },
        (error) => {
          this.toastrService.error(
            JSON.stringify(error),
            'Something went wrong',
            {
              timeOut: 5000,
              progressBar: true,
            }
          );
          console.log(error);
        }
      );
    formReference.resetForm();
  }
}
