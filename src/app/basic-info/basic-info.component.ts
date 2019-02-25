import {Component, Inject, Input, OnInit} from '@angular/core';
import {ICV} from '../shared/interfaces/services/icv';
import {BasicInfo} from '../shared/models/BasicInfo';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {

  @Input() basicInfo: BasicInfo;

  constructor(@Inject('InterfaceCV') private CvService: ICV) { }

  ngOnInit() {
  }

}
