import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//Services
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent {

  public formAuth: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }


  public msgError!: string;

  public submitForm() {
    if (this.formAuth.valid) {
      this.authService.sing({
        email: this.formAuth.value.email,
        password: this.formAuth.value.password,
      }).subscribe({
        next: (res) => res,
        error: (e) => (this.msgError = e),
      })
    }
  }
}
