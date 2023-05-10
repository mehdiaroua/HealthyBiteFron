import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReclamationService } from '../Service1/reclamation.service';
import { StorageService } from '../Service1/storage.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.css'],
  providers: [MessageService],

})
export class AddReclamationComponent implements OnInit {

  reclamation: any = {};
  user!: any;
  constructor(private messageService: MessageService, private reclamationS: ReclamationService, private R: Router, private route: ActivatedRoute, private userService: StorageService) { }
  ngOnInit(): void {
    this.user = this.userService.getUser();
  }

 onSubmit() {
  const id = +this.route.snapshot.params['id'];
  this.user = this.user = this.userService.getUser().id;
  this.reclamationS.assignRepasToReclamation(this.reclamation, id, this.user)
    .subscribe(
      data => {
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Reclaim added successfully.' });
        this.reclamation = {};
        setTimeout(() => {
          this.R.navigate(['/shop']);
        }, 2000);
      }
    );
}




}
