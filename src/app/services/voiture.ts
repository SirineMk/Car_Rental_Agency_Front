import {Asurance} from './asurance';

export class Voiture {
  _id: any;
  immat: string;
  numChassis: string;
  modele: string;
  marque: string;
  dateCirculation: Date;
  puissanceFiscale: number;
  nbCylindre: number;
  prix: number;
  assurance: Asurance;

}
