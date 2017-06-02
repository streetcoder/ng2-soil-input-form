import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SoilPitFormComponent} from "./soil-pit-form/soil-pit.component";
import {HorizonComponent} from "./soil-pit-form/horizon.component";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
    imports:      [
        CommonModule,
        FormsModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [ SoilPitFormComponent, HorizonComponent  ],
    exports:      [ SoilPitFormComponent, HorizonComponent ],
    providers:    []
})
export class SoilPitFormModule {}
