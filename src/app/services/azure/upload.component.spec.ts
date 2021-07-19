import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureUploadComponent } from './upload.component';

describe('UploadComponent', () => {
  let component: AzureUploadComponent;
  let fixture: ComponentFixture<AzureUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzureUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AzureUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
