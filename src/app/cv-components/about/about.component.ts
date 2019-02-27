import {Component, Inject, Input, OnInit} from '@angular/core';
import {ICV} from '../../shared/interfaces/services/icv';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @Input() about: string;

  isEditing = false;

  constructor(@Inject('InterfaceCV') private cvService: ICV) { }

  ngOnInit() {
  }

  onToggleEdit(event: MouseEvent) {
    this.isEditing = !this.isEditing;
  }

  onInitialSave(event: KeyboardEvent) {
    if (event.ctrlKey) {
      const srcElement = event.srcElement as HTMLTextAreaElement;
      this.cvService.updateAbout(srcElement.value);
      this.isEditing = false;
    }
  }

}
