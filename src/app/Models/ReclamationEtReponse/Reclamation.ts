import { User } from "src/app/Class/user";
import { ReponseReclamation } from "./ReponseReclamation";
import { Repas } from "../Repas";




export class Reclamation {
    idReclamation!: number;
    etatReclamation!: string;
    textReclamation!: string;
    dateReclamation!: Date;
    archived!: boolean;
    notifications!: Notification;
    reponseReclamation!: ReponseReclamation;
    repas!:Repas;
    user!:User;
}
