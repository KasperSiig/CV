import {Component, Inject, Input, OnInit} from '@angular/core';
import {Education} from '../shared/models/Education';
import {Experience} from '../shared/models/Experience';
import {Job} from '../shared/models/Job';
import {BasicInfo} from '../shared/models/BasicInfo';

@Component({
  selector: 'app-extended-info',
  templateUrl: './extended-info.component.html',
  styleUrls: ['./extended-info.component.scss']
})
export class ExtendedInfoComponent implements OnInit {

  @Input() educations: Education[];
  @Input() experiences: Experience[];
  @Input() jobs: Job[];
  @Input() basicInfo: BasicInfo;

  constructor() { }

  ngOnInit() {
  }
}
