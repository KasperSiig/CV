import {Component, Input, OnInit} from '@angular/core';
import {Experience} from '../../shared/models/Experience';
import {repeat} from 'rxjs/operators';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  @Input() experiences: Experience[];

  constructor() {
  }

  ngOnInit() {
  }

  genStars(count: number) {
    return '★'.repeat(count) + '☆'.repeat(5 - count);
  }
}
