import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMangerComponent } from './login-manger.component';

describe('LoginMangerComponent', () => {
  let component: LoginMangerComponent;
  let fixture: ComponentFixture<LoginMangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginMangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginMangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
