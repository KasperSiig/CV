import {Component, Inject, OnInit} from '@angular/core';
import {ICV} from '../shared/interfaces/services/icv';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {

  sub: Subscription;
  info: any;

  constructor(@Inject('InterfaceCV') private CvService: ICV) { }

  ngOnInit() {
    this.sub = this.CvService.getDocument('info')
      .subscribe(data => {
        this.info = data;
        console.log(this.info);
      });

  }

}
