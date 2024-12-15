import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.css'],
})
export class RightPanelComponent {
  @Input() post: any = null;
  @Output() postConfirmed = new EventEmitter<number>();

  confirmPost() {
    if (this.post) {
      this.postConfirmed.emit(this.post.id);
    }
  }
}
