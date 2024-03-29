import {EntiteAdmin} from './entite-admin.model';
import {User} from './user.model';
import {Courrier} from './courrier.model';

export class ConsigneCourrier {

  public courrier: Courrier;
  public libelle: string;
  public dateConsigne: Date;
  public responsable: User;
  public entiteadmin: EntiteAdmin;
}
