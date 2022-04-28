import { Component, Input, OnInit } from '@angular/core';
import { Files } from '../shared/models/files';

@Component({
  selector: 'types-root',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit  {
  @Input() files: Files[];
  categoriesFiles: Files[];

  constructor() {}

   ngOnInit() {}

  categoriseFilesByType(type: string) {
    this.categoriesFiles = this.files.filter(file => file.type === type);
  }

}
