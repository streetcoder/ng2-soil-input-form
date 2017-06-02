import { Horizon } from './Horizon';
import { CoarseFrag } from './CoarseFrag';
import { Boundary } from './boundary-enum';

export class SoilPitLayer {
  startDepth: number;
  endDepth: number;
  thickness: number;

  coarseFrags: CoarseFrag;
  horizon: Horizon;
  boundary: Boundary;

  constructor() {
    this.horizon = new Horizon();
    this.coarseFrags = new CoarseFrag();
  }

}
