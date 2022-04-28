import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Files } from '../shared/models/files';
import { Types } from '../shared/models/types';
import { Users } from '../shared/models/users';
import { BackEndService } from '../shared/services/backend.service';

@Component({
  selector: 'dashboard-root',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashBoardComponent implements OnInit  {
  users: Users[];
  types: Types[];
  files: Files[];
  showTypes: string;

  constructor(private backendService: BackEndService) {}

   ngOnInit() {
     this.getTypes();
     this.getUsers();
     this.getFiles();
  }

  getUsers() {
    this.backendService
    .getUsers()
    .pipe(
      take(1))
    .subscribe((users: Users[]) => {
      this.users = users;
    })
  }

  getTypes() {
    this.backendService
    .getTypes()
    .pipe(
      take(1))
    .subscribe((types: Types[]) => {
      this.types = types;
    })
  }

  getFiles() {
    this.backendService.getFiles()
    .pipe(
      take(1))
    .subscribe((files: Files[]) => {
      this.files = files;
      this.mapFilesUserUpdated();
    })
  }

  mapFilesUserUpdated() {
    this.files.map((file: Files) => {
      const findUser = this.users.find(user => user.id === file.modifiedBy)
      const findFileType = this.types.find(type => type.id === file.type);
      if(file.modifiedBy === findUser?.id){
          file.modifiedByName = findUser?.givenName
        }
      if(file.type === findFileType?.id) {
          file.modifiedByType = findFileType.name
      }
      return file;
    })
  }

  showTypesPage(key: string): void  {
    this.showTypes = key;
  }

}
