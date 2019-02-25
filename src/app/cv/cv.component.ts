import {Component, Inject, OnInit} from '@angular/core';
import {ICV} from '../shared/interfaces/services/icv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  constructor(@Inject('InterfaceCV') private CvService: ICV) { }

  ngOnInit() {
  }

}
