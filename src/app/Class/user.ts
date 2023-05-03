

export class User {
  id!: number;
  username!: string;
  email!: string;
  password!: string;
  phone!: string;
  code: string ='';
  age!: number;
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

export class Role {
  id!: number;
  name!: ERole;
}


