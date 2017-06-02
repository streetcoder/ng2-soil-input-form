import { Component, OnInit } from '@angular/core';
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

@Component({
  moduleId: module.id,
  selector: 'soil-pit-form',
  templateUrl: 'soil-pit.template.html',
})
export class SoilPitFormComponent implements OnInit {

  private parentMaterial = EnumValues.getNames(ParentMaterial);
  private drainage = EnumValues.getNames(Drainage);

  private aspect = EnumValues.getNames(Aspect);
  private surfex = EnumValues.getNames(SurfaceExpression);
  private slopepos = EnumValues.getNames(SlopePosition);
  private slopeclass = EnumValues.getNames(SlopeClass);
  private slopelen = EnumValues.getNames(SlopeLength);
  private concavity = EnumValues.getNames(Concavity);
  private landuse = EnumValues.getNames(LandUse);
  private stoniness = EnumValues.getNames(Stoniness);

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
        parentMaterial: '',
        drainage: '',
        aspect: '',
        surfex: '',
        slopeposition: '',
        slopeclass: '',
        slopelength: '',
        concavity: '',
        landuse: '',
        stoniness: ''
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

  setCurrentLocation() {
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
    // call API to save
    // ...
    console.log(model);
  }
}
