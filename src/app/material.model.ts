import { NgModule } from '@angular/core';




import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';



import {MatDialogModule} from '@angular/material/dialog';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

import {MatFormFieldModule} from '@angular/material/form-field';




@NgModule ({
    imports : [MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatDialogModule,
        MatCardModule,
        MatButtonToggleModule,
        MatButtonModule,

    ],
    exports : [MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatDialogModule,
        MatCardModule,
        MatButtonToggleModule,
        MatButtonModule,

    ]
})

export class MaterialModel {

}