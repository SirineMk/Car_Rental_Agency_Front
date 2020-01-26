import {Adress} from './adress';

export class Client {
  _id: any;
  ncin: bigint;
  npermis: bigint;
  nom: string;
  prenom: string;
  dateNaiss: Date;
  adresse: Adress;
}
