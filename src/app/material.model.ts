import { NgModule } from '@angular/core';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatSnackBarModule} from '@angular/material/snack-bar';




import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';



import {MatDialogModule} from '@angular/material/dialog';






@NgModule ({
    imports : [MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatDialogModule,
        MatCardModule,
        MatButtonToggleModule,
        MatButtonModule,
        MatAutocompleteModule,
        MatSnackBarModule,

    ],
    exports : [MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatDialogModule,
        MatCardModule,
        MatButtonToggleModule,
        MatButtonModule,
        MatAutocompleteModule,
        MatSnackBarModule,

    ]
})

export class MaterialModel {

}