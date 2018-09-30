import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CoarseFragType } from './soil-data-defs/coarse-frag.enum';
import { EnumValues } from './soil-data-defs/enumValues';
import { UppercaseDesignation } from './soil-data-defs/upper-designation.enum';
import { Boundary } from './soil-data-defs/boundary-enum';
import { Texture } from './soil-data-defs/texture.enum';
import { Hue } from './soil-data-defs/hue.enum';
import { StructureKind } from './soil-data-defs/structure-kind.enum';
import { StructureClass } from './soil-data-defs/structure-class.enum';
import { StructureGrade } from './soil-data-defs/structure-grade.enum';
import { Effervesence } from './soil-data-defs/effervesence.enum';
import {ParentMaterial} from "./soil-data-defs/parent-material.enum";

@Component({
  moduleId: module.id.toString(),
  selector: 'horizon',
  template: `
      <div [formGroup]="horizonForm">

          <div class="form-group col-xs-6 col-sm-4 col-md-3 col-lg-2">
              <label>layer</label>
              <select
                      class="form-control"
                      formControlName="layer">
                  <option selected></option>
                  <option>I</option>
                  <option>II</option>
                  <option>III</option>
              </select>
          </div>

          <div class="form-group col-xs-6 col-sm-4 col-md-3 col-lg-2">
              <label>designation</label>
              <select
                      class="form-control"
                      formControlName="designation">
                  <option *ngFor="let d of designation" [value]="d">{{d}}</option>
              </select>
          </div>

          <div class="form-group col-xs-6 col-sm-4 col-md-3 col-lg-2">
              <label>modifiers</label>
              <input class="form-control" formControlName="modifiers" type="text">
          </div>

          <div class="form-group col-xs-6 col-sm-4 col-md-3 col-lg-2">
              <label>start depth</label>
              <input type="number" class="form-control" formControlName="start">
          </div>

          <div class="form-group col-xs-6 col-sm-4 col-md-3 col-lg-2">
              <label>end depth</label>
              <input type="number" class="form-control" formControlName="end">
          </div>

          <div class="form-group col-xs-6 col-sm-4 col-md-3 col-lg-2">
              <label>lower boundary </label>
              <select
                      class="form-control"
                      formControlName="lowerboundary">
                  <option *ngFor="let l of lowerboundary" [value]="l">{{l}}</option>
              </select>
          </div>

          <div class="form-group col-xs-6 col-sm-4 col-md-3 col-lg-2">
              <label>c.frag angularity</label>
              <select
                      class="form-control"
                      formControlName="angularity">
                  <option *ngFor="let a of coarseFragmentAngularity" [value]="a.value">{{a.name}}</option>
              </select>
          </div>

          <!--<pre>{{coarseFragmentAngularity | json}}</pre>-->

          <div class="form-group col-xs-6 col-sm-4 col-md-3 col-lg-2">
              <label>c.frag percentage</label>
              <input type="number" class="form-control" formControlName="cfpercent">
          </div>

          <div class="form-group col-xs-6 col-sm-4 col-md-3 col-lg-2">
              <label>texture class</label>
              <select
                      class="form-control"
                      formControlName="texture">
                  <option *ngFor="let t of texture" [value]="t">{{t}}</option>
              </select>
          </div>

          <div class="form-group col-xs-6 col-sm-4 col-md-3 col-lg-2">
              <label>hue</label>
              <select
                      class="form-control"
                      formControlName="hue">
                  <option *ngFor="let h of hue" [value]="h">{{h}}</option>
              </select>
          </div>

          <div class="form-group col-xs-6 col-sm-4 col-md-3 col-lg-2">
              <label>value</label>
              <select
                      class="form-control"
                      formControlName="value">
                  <option *ngFor="let v of value" [value]="v">{{v}}</option>
              </select>
          </div>

          <div class="form-group col-xs-6 col-sm-4 col-md-3 col-lg-2">
              <label>chroma</label>
              <select
                      class="form-control"
                      formControlName="chroma">
                  <option *ngFor="let c of chroma" [value]="c">{{c}}</option>
              </select>
          </div>

          <div class="form-group col-xs-6 col-sm-4 col-md-3 col-lg-2">
              <label>mottles</label>
              <select
                      class="form-control"
                      formControlName="mottles">
                  <option>None</option>
                  <option>Faint</option>
                  <option>Distinct</option>
                  <option>Prominent</option>
              </select>
          </div>

          <div class="form-group col-xs-6 col-sm-4 col-md-3 col-lg-2">
              <label>kind</label>
              <select
                      class="form-control"
                      formControlName="structureKind">
                  <option *ngFor="let c of structureKind" [value]="c">{{c}}</option>
              </select>
          </div>

          <div class="form-group col-xs-6 col-sm-4 col-md-3 col-lg-2">
              <label>class</label>
              <select
                      class="form-control"
                      formControlName="structureClass">
                  <option *ngFor="let c of structureClass" [value]="c">{{c}}</option>
              </select>
          </div>

          <div class="form-group col-xs-6 col-sm-4 col-md-3 col-lg-2">
              <label>grade</label>
              <select
                      class="form-control"
                      formControlName="structureGrade">
                  <option *ngFor="let c of structureGrade" [value]="c">{{c}}</option>
              </select>
          </div>

          <div class="form-group col-xs-6 col-sm-4 col-md-3 col-lg-2">
              <label>effervesence</label>
              <select
                      class="form-control"
                      formControlName="effervesence">
                  <option *ngFor="let c of effervesence" [value]="c">{{c}}</option>
              </select>
          </div>

          <div class="form-group col-xs-6 col-sm-4 col-md-3 col-lg-2">
              <label>parent material</label>
              <select
                      class="form-control"
                      formControlName="parentMaterial">
                  <option *ngFor="let c of parentMaterial" [value]="c">{{c}}</option>
              </select>
          </div>

          <div class="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <label>comments</label>
              <textarea rows="3" formControlName="comments" class="form-control"></textarea>
          </div>

      </div>


  `
})
export class HorizonComponent {
  @Input('group')
  public horizonForm: FormGroup;

  private landform = '';
  private notes = '';
  private value = [null, 1, 2, 2.5, 3, 4, 5, 6, 7, 8];
  private chroma = [null, 1, 2, 3, 4, 5, 6, 7, 8];

  private hue = EnumValues.getNames(Hue);
  // private coarseFragmentAngularity = EnumValues.getNames(CoarseFragType);
  private coarseFragmentAngularity = EnumValues.getNamesAndValues(CoarseFragType);
  private designation = EnumValues.getNames(UppercaseDesignation);
  private lowerboundary = EnumValues.getNames(Boundary);
  private texture = EnumValues.getNames(Texture);
  private structureKind = EnumValues.getNames(StructureKind);
  private structureClass = EnumValues.getNames(StructureClass);
  private structureGrade = EnumValues.getNames(StructureGrade);
  private effervesence = EnumValues.getNames(Effervesence);
  private parentMaterial = EnumValues.getNames(ParentMaterial);
}
