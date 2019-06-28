import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import { PeriodicElement } from './periodic-element'
@Component({
  selector: 'app-testing-material',
  templateUrl: './testing-material.component.html',
  styleUrls: ['./testing-material.component.css']
})
export class TestingMaterialComponent {
  text: string = "User signup Page"
  cardTitle: string = 'Angular Material Component With Angular 5';
  regiForm: FormGroup;
  FirstName: string = '';
  LastName: string = '';
  Address: string = '';
  DOB: Date = null;
  Gender: string = '';
  Blog: string = '';
  Email: string = '';
  IsAccepted: number = 0;
  submitted = undefined;

  ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  constructor(private formBuilder: FormBuilder) {


    // To initialize FormGroup  
    this.regiForm = this.formBuilder.group({
      'FirstName': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(8)])],
      'LastName': [null, Validators.required],
      'Address': [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])],
      'DOB': [null, Validators.required],
      'Gender': [null, Validators.required],
      'Blog': [null, Validators.required],
      'Email': [null, Validators.compose([Validators.required, Validators.email])],
      'IsAccepted': [null]
    });

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // On Change event of Toggle Button  
  onChange(event: any) {
    if (event.checked == true) {
      this.IsAccepted = 1;
    } else {
      this.IsAccepted = 0;
    }
  }

  // Executed When Form Is Submitted  
  onFormSubmit(customerForm: NgForm) {
    if(customerForm){
      this.submitted = true;
    }
    else{
      this.submitted = false;
    }
    // console.log(customerForm.form);
    // console.log(customerForm);
  }  

}
