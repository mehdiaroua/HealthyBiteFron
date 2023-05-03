import { ObjectifType } from "../Models/ObjectifType";


export class User {
  id!:number;
  username!: string;
  email!: string;
  password!: string;
  phone!: string;
  code: string ='';
  age!: number;
  gender!:GenderType;
  objectif_poids!:number;
  activite!:Activite;
  max_calories!:number;
  objectif!:ObjectifType;
  poids!:number;
  taille!:number;
  enabled!: boolean;
  role!: Role[];
  selectedRole!: Role;

}
export enum ERole {
  ROLE_USER = 'ROLE_USER',
  ROLE_MODERATOR = 'ROLE_MODERATOR',
  ROLE_ADMIN = 'ROLE_ADMIN',
  ROLE_RESTAURANT = 'ROLE_RESTAURANT',
  ROLE_FOURNISSEUR = 'ROLE_FOURNISSEUR'
}

export enum GenderType {
  Homme = 'Homme',
  Femme = 'Femme',

}

export enum Activite {
  SEDENTAIRE = 'SEDENTAIRE',
  ACTIF = 'ACTIF',
  MODEREMENT_ACTIF = 'MODEREMENT_ACTIF',
  TRES_ACTIF = 'TRES_ACTIF',






}

export class Role {
  id!: number;
  name!: ERole;
}


