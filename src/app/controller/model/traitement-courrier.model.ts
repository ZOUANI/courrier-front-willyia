import {Courrier} from './courrier.model';
import {User} from './user.model';
import {EntiteAdmin} from './entite-admin.model';

export class TraitementCourrier {
  public courrier: Courrier;
  public libelle: string;
  public dateTraitement: Date;
  public responsable: User;
  public entiteAdmin: EntiteAdmin;
}
