import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Institute } from './institute.model';
import { InstituteService} from './../../services/institute.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-institute-register',
  templateUrl: './institute-register.component.html',
  styleUrls: ['./institute-register.component.css']
})
export class InstituteRegisterComponent implements OnInit {

  hide = true;

  formGroup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });


  register() {

      let institute: Institute = {
        email: this.formGroup.value.email,
        password: this.formGroup.value.password,
      };

      this.instituteService.register(institute).subscribe(data => {
        console.log("InstituteRegisterComponent -> register -> data", data)
        this.router.navigate(['login']);
      });
    }


  constructor(private readonly instituteService: InstituteService,
              private readonly router: Router) { }

  ngOnInit(): void {
  }

}
