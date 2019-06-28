import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';


@Component({
    selector:'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./start.component.css']
})
export class StartComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string>  = 
    new EventEmitter<string>();
    

    ngOnChanges(): void {
       this.starWidth = (this.rating * 75) /15; 
    }

    onClick() : void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
    }
}
