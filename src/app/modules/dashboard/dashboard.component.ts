import { Component } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  selectedPost: any = null;
  confirmedPostId: number | null = null;
  selectedFlagUrl: string | null = null;

  constructor(private dataService: DataService) {}

  onPostSelected(postId: number) {
    this.dataService.getPostById(postId).subscribe((post) => {
      this.selectedPost = post;
    });
  }

  onPostConfirmed(postId: number) {
    this.confirmedPostId = postId;
  }

  onFlagSelected(flagUrl: string) {
    this.selectedFlagUrl = flagUrl;
  }
}
