import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { IdGenerateService } from '../id-generate.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { PaymentDetailsComponent } from '../payment-details/payment-details.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  displayUser = false;
  myControl = new FormControl();
  options: string[] = ['xd1235','xd1225','xd1245','xd1265','xd1232','xd1222'];
  filteredOptions: Observable<string[]> | undefined;
  subscription: Subscription | undefined;


  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  constructor( private idService : IdGenerateService,private snackBar : MatSnackBar ) {}

  showPayment(){
    this.snackBar.open('notification','dismiss',{
      duration : 5000,
      horizontalPosition : 'center',
      verticalPosition : 'bottom'
    })
  }
  
  placeChange(event: string)
{
  console.log(event);
  this.idService.id_emit.next(event)
  this.displayUser = true;
  // this.snackBar.openFromComponent(PaymentDetailsComponent,{
  //   data :{
  //     id : event
  //   },
  //   duration : 5000,
  //   horizontalPosition : 'center',
  //   verticalPosition : 'bottom'
  // })
  if (this.options.includes(event)){
    console.log("id existe");
    
    // this.idService.id_emit.next(event)
  }
}

}
