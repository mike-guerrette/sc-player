import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'search',
    templateUrl: 'search.component.html',
    styles: [`
      .search-bar {
        margin: 75px 50px;
      }
    `]
})
export class SearchComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}
