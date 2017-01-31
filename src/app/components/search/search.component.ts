import { Component, OnInit } from '@angular/core';
import {SoundCloudService} from "../../services/sound-cloud.service";

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
    constructor(private soundCloudService: SoundCloudService) { }

    private searchTerm: string = '';

    search() {
        this.soundCloudService.searchTerm.next(this.searchTerm)
    }

    ngOnInit() { }

}
