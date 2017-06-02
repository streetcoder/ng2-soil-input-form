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

@Component({
  moduleId: module.id,
  selector: 'horizon',
  templateUrl: 'horizon.template.html',
})
export class HorizonComponent {
  @Input('group')
  public horizonForm: FormGroup;

  private landform = '';
  private notes = '';
  private value = [1, 2, 3, 4, 5, 6];
  private chroma = [1, 2, 3, 4, 5, 6];

  private hue = EnumValues.getNames(Hue);
  private coarseFragmentAngularity = EnumValues.getNames(CoarseFragType);
  private designation = EnumValues.getNames(UppercaseDesignation);
  private lowerboundary = EnumValues.getNames(Boundary);
  private texture = EnumValues.getNames(Texture);
  private structureKind = EnumValues.getNames(StructureKind);
  private structureClass = EnumValues.getNames(StructureClass);
  private structureGrade = EnumValues.getNames(StructureGrade);
  private effervesence = EnumValues.getNames(Effervesence);



}
