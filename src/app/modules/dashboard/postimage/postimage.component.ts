import { Component, OnInit } from '@angular/core';
import { PostimageService } from '../service/postimage.service';

@Component({
  selector: 'app-postimage',
  templateUrl: './postimage.component.html',
  styleUrls: ['./postimage.component.css'],
})
export class PostimageComponent implements OnInit {
  selectedFlagUrl: string | null = null;

  constructor(private postimageService: PostimageService) {}

  ngOnInit(): void {
    this.postimageService.getSelectedFlag().subscribe((flagUrl) => {
      this.selectedFlagUrl = flagUrl;
    });
  }
}
