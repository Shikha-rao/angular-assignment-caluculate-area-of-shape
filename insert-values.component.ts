import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-insert-values',
  templateUrl: './insert-values.component.html',
  styleUrls: ['./insert-values.component.css']
})
export class InsertValuesComponent implements OnInit {
  radiusForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router,private commonService: CommonService) { }
  ngOnInit(){
    this.radiusForm = this.formBuilder.group({
      radius: ['',Validators.required],
    });
  }
  onNext(){
    const formValue = this.radiusForm.value;
    if(this.radiusForm.valid){
      let shapeFormValue = this.commonService.shapeFormValue;
      if(shapeFormValue.dimension != formValue.radius){
        alert("Dimension and radius of Circle is mismatched!")
      }
      else{
        this.commonService.radiusFormValue = formValue
        this.router.navigate(['/result']);
      }
    }
    else{
      alert("Please enter required details");
    }
  }
  cancel(){
    this.router.navigate(['/add-shape']);
  }
}
