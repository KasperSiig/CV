import {Component, Inject, OnInit} from '@angular/core';
import {ICV} from '../shared/interfaces/services/icv';

@Component({
  selector: 'app-extended-info',
  templateUrl: './extended-info.component.html',
  styleUrls: ['./extended-info.component.scss']
})
export class ExtendedInfoComponent implements OnInit {

  constructor(@Inject('InterfaceCV') private CvService: ICV) { }

  ngOnInit() {

  }

}
