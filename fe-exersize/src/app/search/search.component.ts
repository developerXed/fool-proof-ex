import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Files } from '../shared/models/files';


@Component({
  selector: 'search-root',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit  {
  @Input() files: Files[];
  allFiles:Files[];
  search_word = new FormControl();
  constructor() {}

   ngOnInit() {
     this.allFiles = this.files;
    this.search_word
    .valueChanges
    .subscribe((words: string) => {
      this.searchFilesByName(words);
    })
  }

  searchFilesByName(name: string) {
    this.allFiles = this.files
    .filter(file => file.title
      .toLocaleLowerCase()
      .includes(name));
  }

}
