import {Component} from "@angular/core";
import { ReactiveFormsModule,Validators } from "@angular/forms";
import { FormArray,FormControl,FormGroup,Validator } from "@angular/forms";

@Component({
    selector:'reactiveForm',
    template:'reactiveFrom.component.html'
})
export class ReactiveForm
{
    form=new FormGroup({
        email:new FormControl(''),
        password:new FormControl('')
    });
    savedata()
{
    console.log("submit");
}
}

