import { Component, OnInit } from '@angular/core';
import {SoundCloudService} from "../../services/sound-cloud.service";
import {Observable} from "rxjs";

@Component({
    selector: 'track-list',
    templateUrl: './track-list.component.html'
})
export class TrackListComponent implements OnInit {
    constructor(private soundCloudService: SoundCloudService) { }

    private trackList: Observable<any>;

    ngOnInit() {
        this.soundCloudService.searchTerm.subscribe(
            searchTerm => this.trackList = this.soundCloudService.getTracks(searchTerm)
        );
    }

}