import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-select-shape',
  templateUrl: './select-shape.component.html',
  styleUrls: ['./select-shape.component.css']
})
export class SelectShapeComponent implements OnInit {
  selectShapeForm: FormGroup;
  favoriteSeason: string;
  shapes: string[] = ['Rectangle', 'Circle', 'Square', 'Eclipse'];
  constructor(private formBuilder: FormBuilder,private router: Router,private commonService: CommonService) { }
  ngOnInit(){
    this.selectShapeForm = this.formBuilder.group({
      shape: [this.commonService.shapeFormValue.shape ? this.commonService.shapeFormValue.shape :'',
        Validators.required],
    });
  }
  onNext(){
    const formValue = this.selectShapeForm.value;
    if(this.selectShapeForm.valid){
      let shapeFormValue = this.commonService.shapeFormValue;
      if(shapeFormValue.shape === "Rectangle"){
        if(formValue.shape != "Rectangle"){
          alert("Please select Valid Shape");
        }
        else{
          this.router.navigate(['/result']);
        }
      }
      else if(shapeFormValue.shape === "Square"){
        if(formValue.shape != "Square"){
          alert("Please select Valid Shape");
        }
        else{
          this.router.navigate(['/result']);
        }
      }
      else if(shapeFormValue.shape === "Circle"){
        if(formValue.shape != "Circle"){
          alert("Please select Valid Shape");
        }
        else{
          this.router.navigate(['/insert']);
        }
      }
      else if(shapeFormValue.shape === "Eclipse"){
        if(formValue.shape != "Eclipse"){
          alert("Please select Valid Shape");
        }
        else{
          this.router.navigate(['/result']);
        }
      }
      this.commonService.selectShapeFormValue = formValue;
    }
    else{
      alert("Please select shape");

    }
  }
  cancel(){
    this.router.navigate(['/add-shape']);
  }
}
