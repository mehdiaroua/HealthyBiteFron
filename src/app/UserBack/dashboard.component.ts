import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { ERole, Role, User } from '../Class/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';

import { Chart, ChartType } from 'chart.js';
import { StorageService } from '../service/storage.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit{
  userss!: User[];


  selectedRole: string = '';
  roles: Role[] = [];
  data: any;
  enabled!: boolean;
items!: any;
items1!: any;
  isEditing = false; // add a new variable to track editing mode
  selectedUser!: User;
  username!: string;
  userForm!: FormGroup;
  user!: User;
  id!: number;
  role: Role[] = [
    { id: 1, name: ERole.ROLE_USER },
    { id: 2, name: ERole.ROLE_ADMIN }
  ];
  users: any[] = [];

  

  

  constructor(private userService: UserService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private storage:StorageService) {
    this.roles = [
      { id: 1, name: ERole.ROLE_USER },
      { id: 3, name: ERole.ROLE_ADMIN },
      { id: 4, name: ERole.ROLE_RESTAURANT },
      { id: 5, name: ERole.ROLE_FOURNISSEUR },
    ];
    this.items = [
      {
          label: 'Add User',
          icon: 'pi pi-fw pi-user',
          routerLink: '/add'
      },
      {
        label: 'Stat',
        icon: 'pi pi-fw pi-chart-bar',
        routerLink: '/pie'
    },
      
  ];
  

  
   }

  ngOnInit(): void {
this.user=this.storage.getUser();
console.log(this.user.id);
    this.userService.getAllUsers().subscribe(data => {

      this.users = data;
      this.users.forEach(user => { user.selectedRole = user.roles[0];
          console.log(user.selectedRole.name)
      });
      console.log(this.users);
    });
  }


  onUpdateRole(userId: number, roleName: string) {

    this.userService.updateUserRole(userId, roleName)
      .subscribe(
        () => {
          // Role update successful
          alert('Role updated successfully.');
          location.reload();
        },
        (error) => {
          // Role update failed
          console.error('Role update failed:', error);
          if (error.status === 200) {
            // Handle plain text response
            alert(error.error);
          } else {
            // Handle JSON response
            alert('Failed to update role. Please try again later.');
          }
        }
        
      );
  }


  searchUsers() {
    console.log('Searching for users with username: ' + this.username);
    this.userService.searchUsersByUsername(this.username).subscribe(
      data => {
        console.log('Users found: ' + JSON.stringify(data));
        this.users = data;
      },
      error => console.log(error)
    );
  }

  onDelete(id: number) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id).subscribe(
        () => {
          // User deleted successfully
          // Reload the list of users
          this.userService.getAllUsers().subscribe(data => {
            this.users = data;
          });
        },
        (error) => {
          console.error(error);
          // Handle error
        }
      );
    }
  }
  onEnable(id: number) {
    this.userService.enableUser(id).subscribe(
      () => {
        // User enabled successfully
        // Reload the list of users
        this.ngOnInit();
      },
      (error) => {
        console.error(error);
        // Handle error
      }
    );
  }






  onDisable(id: number) {
    this.userService.disableUser(id).subscribe(
      () => {
        // User disabled successfully
        // Reload the list of users
        this.ngOnInit();
      },
      (error) => {
        console.error(error);
        // Handle error
      }
    );
  }
  onEdit(id: number): void {
    this.isEditing = true;
    this.selectedUser = this.users.find(user => user.id === id);
  }


  ngOnInit1(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getUser(this.id);
    });
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', Validators.required]
    });
  }
  onEdit1(user: User): void {
    this.selectedUser = user;
    this.isEditing = true;

  }

    
  onUpdate() {
    this.selectedUser.role = [this.selectedUser.selectedRole]; // update the role of the user

    this.userService.updateUser(this.selectedUser.id, this.selectedUser)
      .subscribe(
        response => {
          console.log(response);
          this.isEditing = false;
          this.selectedUser = new User();
          this.ngOnInit();


        },
        error => {
          console.log(error);
        });

  }


  onCancel(): void {
    this.selectedUser = {} as User;
    this.isEditing = false;
  }


  getUser(id: number): void {
    this.userService.getUserById(id)
      .subscribe(
        data => {
          this.user = data;
          this.userForm.patchValue({
            username: this.user.username,
            email: this.user.email,
            password: this.user.password,
            phone: this.user.phone
          });
        },
        error => {
          console.log(error);
        });
  }

  onSubmit(): void {
    this.user = this.userForm.value;
    this.userService.updateUser(this.id, this.user)
      .subscribe(
        response => {
          console.log(response);
          this.isEditing = false;
          this.router.navigate(['/dash']);
        },
        error => {
          console.log(error);
        });
  }

}
