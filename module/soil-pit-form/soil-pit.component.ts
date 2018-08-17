import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Customer } from './customer.interface';
import { CoarseFragType } from './soil-data-defs/coarse-frag.enum';
import { ParentMaterial } from './soil-data-defs/parent-material.enum';
import { EnumValues } from './soil-data-defs/enumValues';
import {Drainage} from './soil-data-defs/drainage.enum';
import {Aspect} from './soil-data-defs/aspect.enum';
import {SurfaceExpression} from './soil-data-defs/surface-expression.enum';
import {SlopePosition} from './soil-data-defs/slope-position.enum';
import {SlopeClass} from './soil-data-defs/slope-class.enum';
import {SlopeLength} from './soil-data-defs/slope-length.enum';
import {Concavity} from './soil-data-defs/concavity.enum';
import {LandUse} from './soil-data-defs/land-use.enum';
import {Stoniness} from './soil-data-defs/stoniness-enum';
import {SurfexMod} from "./soil-data-defs/surfex-mod.enum";

@Component({
  moduleId: module.id.toString(),
  selector: 'soil-pit-form',
  template: `<div class="container-fluid">
      <form [formGroup]="myForm" novalidate (ngSubmit)="save(myForm)">

          <div class="row">
              <!--title-->
              <div class="margin-20 col-xs-12">
                  <h2>Add soil pit</h2>
              </div>
              <!--name-->
              <div class="form-group col-xs-12 col-sm-12 col-md-4 col-lg-6">
                  <label>Name/ID</label>
                  <input type="text" class="form-control" formControlName="name">
              </div>

              <div class="form-group col-xs-12 col-sm-4 col-md-3 col-lg-2">
                  <label>Lat</label>
                  <input type="text" class="form-control" formControlName="lat">
              </div>

              <div class="form-group col-xs-12 col-sm-4 col-md-3 col-lg-2">
                  <label>Long</label>
                  <input type="text" class="form-control" formControlName="long">
              </div>

              <div class="form-group col-xs-12 col-sm-4 col-md-2 col-lg-2">
                  <label>Location</label>
                  <button class="btn btn-block btn-default" (click)="setCurrentLocation($event)">{{ locationButtonText }}</button>
              </div>

          </div>

          <div class="row">
              <div class="col-xs-12">
                  <!--horizons-->
                  <div formArrayName="horizons">
                      <div *ngFor="let address of myForm.controls.horizons.controls; let i=index" class="panel panel-default">
                          <div class="panel-heading">
                              <span>Horizon {{i + 1}}</span>
                              <span class="glyphicon glyphicon-remove pull-right"
                                    *ngIf="myForm.controls.horizons.controls.length > 1"
                                    (click)="removeAddress(i)"></span>
                          </div>
                          <div class="panel-body" [formGroupName]="i">
                              <horizon [group]="myForm.controls.horizons.controls[i]"></horizon>
                          </div>
                      </div>
                  </div>
                  <!--add horizon-->
                  <div class="margin-20">
                      <a (click)="addHorizon()" style="cursor: default">
                          Add another horizon +
                      </a>
                  </div>
                  <h3>Site description</h3><hr>
              </div>
          </div>




          <div class="row">
              <!--parent material-->
              
              <!--soil classification-->
              <div class="form-group col-xs-12 col-md-6">
                  <label>Soil Classification (s_grp.g_grp)</label>
                  <input type="text" class="form-control" formControlName="soilClassification" [value]="soilClassification">
              </div>

              <!--drainage-->
              <div class="form-group col-xs-12 col-md-6">
                  <label>drainage</label>
                  <select
                          class="form-control"
                          formControlName="drainage">
                      <option *ngFor="let c of drainage" [value]="c">{{c}}</option>
                  </select>
              </div>

              <div class="form-group col-xs-12 col-md-6">
                  <label>aspect</label>
                  <select
                          class="form-control"
                          formControlName="aspect">
                      <option *ngFor="let c of aspect" [value]="c">{{c}}</option>
                  </select>
              </div>

              <div class="form-group col-xs-6 col-md-3">
                  <label>surface expression 1</label>
                  <select
                          class="form-control"
                          formControlName="surfex1">
                      <option *ngFor="let c of surfex" [value]="c">{{c}}</option>
                  </select>
              </div>

              <div class="form-group col-xs-6 col-md-3">
                  <label>surface expression 2</label>
                  <select
                          class="form-control"
                          formControlName="surfex2">
                      <option *ngFor="let c of surfex" [value]="c">{{c}}</option>
                  </select>
              </div>
              
              <div class="form-group col-xs-12 col-md-6">
                  <label>surfex modifier</label>
                  <select class="form-control"
                          formControlName="surfexmod">
                      <option *ngFor="let s of surfexmod" [value]="s">{{s}}</option>
                  </select>
              </div>

              <div class="form-group col-xs-12 col-md-6">
                  <label>slope position</label>
                  <select
                          class="form-control"
                          formControlName="slopeposition">
                      <option *ngFor="let c of slopepos" [value]="c">{{c}}</option>
                  </select>
              </div>

              <div class="form-group col-xs-12 col-md-6">
                  <label>slope class</label>
                  <select
                          class="form-control"
                          formControlName="slopeclass">
                      <option *ngFor="let c of slopeclass" [value]="c">{{c}}</option>
                  </select>
              </div>

              <div class="form-group col-xs-12 col-md-6">
                  <label>slope length</label>
                  <select
                          class="form-control"
                          formControlName="slopelength">
                      <option *ngFor="let c of slopelen" [value]="c">{{c}}</option>
                  </select>
              </div>

              <div class="form-group col-xs-12 col-md-6">
                  <label>concavity</label>
                  <select
                          class="form-control"
                          formControlName="concavity">
                      <option *ngFor="let c of concavity" [value]="c">{{c}}</option>
                  </select>
              </div>

              <div class="form-group col-xs-12 col-md-6">
                  <label>land use</label>
                  <select
                          class="form-control"
                          formControlName="landuse">
                      <option *ngFor="let c of landuse" [value]="c">{{c}}</option>
                  </select>
              </div>

              <div class="form-group col-xs-12 col-md-6">
                  <label>stoniness</label>
                  <select
                          class="form-control"
                          formControlName="stoniness">
                      <option *ngFor="let c of stoniness" [value]="c">{{c}}</option>
                  </select>
              </div>

              <!--landscape description-->
              <div class="form-group col-xs-12 col-md-6">
                  <label>landscape description</label>
                  <textarea class="form-control" formControlName="landscapeDesc" rows="4"></textarea>
              </div>
              <!--notes-->
              <div class="form-group col-xs-12 col-md-6">
                  <label>notes</label>
                  <textarea class="form-control" formControlName="notes" rows="4"></textarea>
              </div>

              <!--<div class="form-group col-xs-12 col-md-6">-->
                  <!--<label>add photo</label>-->
                  <!--<input class="form-control file" type="file">-->
              <!--</div>-->

          </div>

          <div class="row">
              <div class="col-xs-12">
                  <!--submit-->
                  <div class="margin-20">
                      <button type="submit" class="btn btn-primary pull-right" [disabled]="!myForm.valid">Submit</button>
                  </div>
                  <div class="clearfix"></div>
                  
                  <!--diagnostic-->
                  <!--<div class="margin-20">-->
                      <!--<div>myForm details:-</div>-->
                      <!--<pre>Is myForm valid?: <br>{{myForm.valid | json}}</pre>-->
                      <!--<pre>form value: <br>{{myForm.value | json}}</pre>-->
                  <!--</div>-->
              </div>
          </div>

      </form>
  </div>


  <!--<small *ngIf="!myForm.controls.name.valid" class="text-danger">-->
  <!--Name is required (minimum 5 characters).-->
  <!--</small>-->
  `
})
export class SoilPitFormComponent implements OnInit {

  private drainage = EnumValues.getNames(Drainage);

  @Output() soilFormSubmittedEmitter = new EventEmitter();

  private aspect = EnumValues.getNames(Aspect);
  private surfex = EnumValues.getNames(SurfaceExpression);
  private slopepos = EnumValues.getNames(SlopePosition);
  private slopeclass = EnumValues.getNames(SlopeClass);
  private slopelen = EnumValues.getNames(SlopeLength);
  private concavity = EnumValues.getNames(Concavity);
  private landuse = EnumValues.getNames(LandUse);
  private stoniness = EnumValues.getNames(Stoniness);
  private surfexmod =EnumValues.getNames(SurfexMod);

  private layer = ['I', 'II'];

  private locationButtonText = 'Get current';

  public myForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this._fb.group({
        name: '',
        lat: '',
        long: '',
        horizons: this._fb.array([]),
        landscapeDesc: '',
        notes: '',
        drainage: '',
        aspect: '',
        surfex1: '',
        surfex2: '',
        surfexmod: '',
        slopeposition: '',
        slopeclass: '',
        slopelength: '',
        concavity: '',
        landuse: '',
        stoniness: '',
        soilClassification:''
    });

    this.addHorizon();

    /* subscribe to addresses value changes */
    // this.myForm.controls['horizons'].valueChanges.subscribe(x => {
    //   console.log(x);
    // })

    this.setCurrentLocation();
  }

  initAddress() {
    return this._fb.group({
      layer: '',
      designation: ['', Validators.required],
      modifiers: ['', Validators.required],
      start: [''],
      end: [''],
      angularity: CoarseFragType.ANGULAR,
      cfpercent: '',
      lowerboundary: '',
      texture: '',
      hue: '',
      value: '',
      chroma: '',
      mottles: '',
      structureKind: '',
      structureClass: '',
      structureGrade: '',
      parentMaterial: '',
      effervesence: '',
    });
  }

  addHorizon() {
    const control = <FormArray>this.myForm.controls['horizons'];
    const addrCtrl = this.initAddress();

    control.push(addrCtrl);

    /* subscribe to individual address value changes */
    // addrCtrl.valueChanges.subscribe(x => {
    //   console.log(x);
    // })
  }

  removeAddress(i: number) {
    const control = <FormArray>this.myForm.controls['horizons'];
    control.removeAt(i);
  }

    setCurrentLocation(event?) {
      if (event){
          event.preventDefault();
      }

    this.locationButtonText = 'Getting...';

    window.navigator.geolocation.getCurrentPosition(
        (position) => {
          this.myForm.patchValue({
            'lat': position.coords.latitude.toFixed(4),
            'long': position.coords.longitude.toFixed(4)
            });
            this.locationButtonText = 'Get current';
        },
        (err) => {
            this.locationButtonText = 'Location error';
            console.log(err);
        });
  }

  save(model: Customer) {
    console.log(model);

    this.soilFormSubmittedEmitter.emit(model);

    this.myForm.reset();
  }
}
