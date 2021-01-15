import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-add-shape',
  templateUrl: './add-shape.component.html',
  styleUrls: ['./add-shape.component.css']
})
export class AddShapeComponent implements OnInit {
  shapeForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router,private commonService: CommonService) { }
  ngOnInit(){
    this.shapeForm = this.formBuilder.group({
      shape: ['',Validators.required],
      dimension: ['', Validators.required],
      areaFunc:['',Validators.required]
    });
  }
  onSubmit(){
    const formValue = this.shapeForm.value;
    if(this.shapeForm.valid){
      let dimension:string = formValue.dimension;
      let char = dimension.split(',');
      if(formValue.shape === "Rectangle" || formValue.shape === "Eclipse"){
        if(char.length != 2 || char[0] === char[1]){
          alert("Please enter valid dimension (eg:length and breadth)!");
        }
        else if(char[0] < char[1]){
          alert("Please enter valid dimension (length should be greater than breadth)!");
        }
        else{
          this.commonService.shapeFormValue = formValue;
          this.router.navigate(['/select-shape']);
        }
      }
      else if(formValue.shape === "Square" || formValue.shape === "Circle"){
        if(char.length != 1){
          alert("Please enter valid dimension!");
        }
        else{
          this.commonService.shapeFormValue = formValue;
          this.router.navigate(['/select-shape']);
        }
      }
      else{
        alert("Please enter valid shape Name (eg:Rectangle (case sensitive))!");
      }
    }
    else{
      alert("Please enter required details");
    }

  }

}
