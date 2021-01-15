import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  areaResult;
  constructor(private formBuilder: FormBuilder,private router: Router,public commonService: CommonService) { }
  ngOnInit(){
    let shapeFormValue = this.commonService.shapeFormValue;
    let selectShapeFormValue = this.commonService.selectShapeFormValue;
    if(selectShapeFormValue.shape === "Rectangle"){
      let dimension:string = shapeFormValue.dimension;
      let char = dimension.split(',');
      this.areaResult = parseInt(char[0]) * parseInt(char[1])
    }
    if( selectShapeFormValue.shape === "Square"){
      let dimension:string = shapeFormValue.dimension;
      let char = dimension.split(',');
      this.areaResult = parseInt(char[0]) * parseInt(char[0])
    }
    if( selectShapeFormValue.shape === "Circle"){
      let dimension:string = shapeFormValue.dimension;
      let char = dimension.split(',');
      this.areaResult = 3.14 * parseInt(char[0]) * parseInt(char[0])
    }
    if( selectShapeFormValue.shape === "Eclipse"){
      let dimension:string = shapeFormValue.dimension;
      let char = dimension.split(',');
      this.areaResult = 3.14 * parseInt(char[0]) * parseInt(char[1])
    }
  }
  onStartOver(){
    this.router.navigate(['/add-shape']);
  }
}
