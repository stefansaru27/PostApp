import { Component, OnInit } from '@angular/core';
import { PostimageService } from '../service/postimage.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  countries: any[] = [];
  countrySearchTerm: string = ''; // Add this line

  constructor(private postimageService: PostimageService) {}

  ngOnInit(): void {
    this.postimageService.getCountries().subscribe(
      (data: any[]) => {
        this.countries = data;
      },
      (error: any) => {
        console.error('Error fetching countries:', error);
      }
    );
  }

  selectFlag(flagUrl: string) {
    this.postimageService.setSelectedFlag(flagUrl);
  }
}
