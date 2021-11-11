import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { IdGenerateService } from '../id-generate.service';
import { User } from '../user.model';
@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css'],
})
export class PaymentDetailsComponent implements OnInit , OnDestroy {
  id : string = '';
  dummy_data = [
    {
      id: 'xd1235',
      name: 'Taha Yassine',
      next_payment: new Date('2021-12-17'),
      amount: 205,
      validation: new Date('2021-12-30T03:24:00'),
      last_payment: new Date('2021-11-30T03:24:00'),
      recurring_period: 1,
      verified: 'good',
    },
    {
      id: 'xd1225',
      name: 'Mohamed',
      next_payment: new Date('2021-11-17'),
      amount: 205,
      validation: new Date('2021-11-30T03:24:00'),
      last_payment: new Date('2021-10-30T03:24:00'),
      recurring_period: 1,
      verified: 'good',
    },
    {
      id: 'xd1245',
      name: 'Haythem',
      next_payment: new Date('2021-10-17'),
      amount: 205,
      validation: new Date('2021-10-30T03:24:00'),
      last_payment: new Date('2021-09-30T03:24:00'),
      recurring_period: 2,
      verified: 'medium',
    },
    {
      id: 'xd1265',
      name: 'Peter',
      next_payment: new Date('2021-09-17'),
      amount: 205,
      validation: new Date('2021-09-30T03:24:00'),
      last_payment: new Date('2021-07-30T03:24:00'),
      recurring_period: 1,
      verified: 'good',
    },
    {
      id: 'xd1232',
      name: 'Leith',
      next_payment: new Date('2021-08-17'),
      amount: 205,
      validation: new Date('2021-08-30T03:24:00'),
      last_payment: new Date('2021-07-30T03:24:00'),
      recurring_period: 3,
      verified: 'bad',
    },
    {
      id: 'xd1222',
      name: 'Mariem',
      next_payment: new Date('2021-08-17'),
      amount: 205,
      validation: new Date('2021-09-30T03:24:00'),
      last_payment: new Date('2021-08-30T03:24:00'),
      recurring_period: 1,
      verified: 'good',
    },
  ];

  subscription: Subscription | undefined;

  // user : User = this.dummy_data[0];


  constructor(private idService: IdGenerateService) {}

  ngOnInit(): void {
    this.subscription = this.idService.id_emit.subscribe((id: string) => {
      this.id = id;

      // if (elt) {
      //   this.user = new User(
      //     elt?.id,
      //     elt?.name,
      //     elt?.next_payment,
      //     elt?.amount,
      //     elt?.validation,
      //     elt?.last_payment,
      //     elt?.recurring_period,
      //     elt?.verified
      //   );
      // }

    });
  }

  ngOnDestroy(){
    this.subscription?.unsubscribe();
  }
}
