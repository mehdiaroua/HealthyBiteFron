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
}