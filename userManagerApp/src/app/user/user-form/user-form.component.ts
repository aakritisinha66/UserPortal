import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  userIdx: number | null = null;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  userForm: FormGroup = this.formBuilder.group({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
    email: new FormControl('', [Validators.required, Validators.email])
  })

  ngOnInit() {
    this.route.params.subscribe((param: any) => {
      if (param['index'] !== undefined) {
        console.log("Index Param: ", param)
        this.userIdx = +param['index'];
        console.log("Index Found: ", this.userIdx)
        const user = this.userService.getUsers()[this.userIdx];
        if (user) {
          this.userForm.patchValue(user);
        }
      }
    })
    
  }

  submit(){
    console.log(this.userForm.value)
    if(this.userIdx!==null) {
      this.userService.updateUser(this.userIdx, this.userForm.value)
      window.alert("User details updated!")
    }
    else {
      this.userService.addUser(this.userForm.value)
      window.alert("User details added!")
    }
    this.router.navigate(['/user/user-list']);

  }
}
