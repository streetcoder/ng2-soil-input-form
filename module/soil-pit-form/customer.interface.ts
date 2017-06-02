import { CoarseFragType } from './soil-data-defs/coarse-frag.enum';
import { LowercaseDesignation } from './soil-data-defs/lower-designation.enum';
import { UppercaseDesignation } from './soil-data-defs/upper-designation.enum';
import { Boundary } from './soil-data-defs/boundary-enum';
import { Texture } from './soil-data-defs/texture.enum';



export interface Customer {
  name: string;
  addresses: Horizon[];
}

export interface Horizon {
  designation: UppercaseDesignation;
  modifiers: LowercaseDesignation;
  start: number;
  end: number;
  angularity: CoarseFragType;
  cfpercent: number;
  lowerboundary: Boundary;
  texture: Texture;
}



//
// initAddress() {
//   return this._fb.group({
//     designation: ['', Validators.required],
//     modifiers: '',
//     start: [''],
//     end: [''],
//     angularity: CoarseFragType.ANGULAR,
//     cfpercent: '',
//     lowerboundary: ''
//   });
// }
