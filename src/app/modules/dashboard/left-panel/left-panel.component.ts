import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css'],
})
export class LeftPanelComponent implements OnInit {
  @Input() selectedPostId: number | null = null;
  posts: any[] = [];
  searchTerm: string = ''; // New property for search term

  @Output() postSelected = new EventEmitter<number>();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getPosts().subscribe((data) => {
      this.posts = data.slice(0, 50);
      console.log(data);
    });
  }

  selectPost(postId: number) {
    this.postSelected.emit(postId);
  }

  isPostConfirmed(postId: number): boolean {
    return this.selectedPostId === postId;
  }
}
