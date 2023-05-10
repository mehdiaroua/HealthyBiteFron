import { User } from "src/app/Class/user";
import { Repas } from "../RepasProduit/Repas";
import { Notification } from "./Notification";
import { ReponseReclamation } from "./ReponseReclamation";

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
