import { Conseil } from './conseil.model';
import { TypeActivite } from './type-activite.enum';

export interface Objectif {
  id?: number;
  poidDepart?: number;
  poidActuel?: number;
  taille?: number;
  objectifPoid?: number;
  typeActivite?: TypeActivite;

  user: any;
  conseils?: Conseil[];
}
