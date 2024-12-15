import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostimageComponent } from './postimage.component';

describe('PostimageComponent', () => {
  let component: PostimageComponent;
  let fixture: ComponentFixture<PostimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostimageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
