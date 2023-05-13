import {Component, Inject, Input, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Customer} from "../../models/Customer";
import {CustomerService} from "../customer-service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.component.html', // HTML template for the dialog content
})
export class DialogComponent implements  OnInit{

customer !:Customer;
  constructor(
    public http:HttpClient,
    public serviceCustomers:CustomerService,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  // Add any necessary methods or logic for the dialog component

  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
debugger;
    this.customer = this.data.customomer;
    console.log(this.data);
  }

  saveDetails(customer:Customer){
    debugger;
  /* /!* readonly baseCustomersUrl = 'https://localhost:7244/api';*!/
    const url = `${'https://localhost:7244/api'}/customers/PutCustomerByCustomerOBj/${customer.identityNumber}`; // Replace with your API endpoint URL
    this.http.put(url, customer)
      .subscribe(
        () => {
          console.log('Customer updated successfully');
          // Handle success or perform any additional operations
        },
        (error) => {
          console.error('Error updating customer', error);
          // Handle error
        }
      );*/
     this.serviceCustomers.updateCustomer2("301037065",customer);

  }

}
