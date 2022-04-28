import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TypesComponent } from './types.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        TypesComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TypesComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'fe-exersize'`, () => {
    const fixture = TestBed.createComponent(TypesComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('fe-exersize');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(TypesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('fe-exersize app is running!');
  });
});
