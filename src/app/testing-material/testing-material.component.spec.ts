import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestingMaterialComponent } from './testing-material.component';
import { DebugElement } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {
	MatButtonModule,
	MatMenuModule,
	MatToolbarModule,
	MatIconModule,
	MatCardModule,
	MatFormFieldModule,
	MatInputModule,
	MatDatepickerModule,
	MatNativeDateModule,
	MatRadioModule,
	MatSelectModule,
	MatOptionModule,
	MatSlideToggleModule,
	MatTableModule
} from '@angular/material';

describe('TestingMaterialComponent', () => {
	let component: TestingMaterialComponent;
	let fixture: ComponentFixture<TestingMaterialComponent>;
	let de: DebugElement;
	let el: HTMLElement;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ TestingMaterialComponent ],
				imports: [
					ReactiveFormsModule,
					FormsModule,
					HttpClientModule,
					BrowserAnimationsModule,
					MatButtonModule,
					MatMenuModule,
					MatToolbarModule,
					MatIconModule,
					MatCardModule,
					MatFormFieldModule,
					MatInputModule,
					MatDatepickerModule,
					MatNativeDateModule,
					MatRadioModule,
					MatSelectModule,
					MatOptionModule,
					MatSlideToggleModule,
					MatTableModule
				]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(TestingMaterialComponent);
		component = fixture.componentInstance;
		de = fixture.debugElement.query(By.css('form'));
		el = de.nativeElement;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should have a card title', () => {
		const fixture = TestBed.createComponent(TestingMaterialComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app.cardTitle).toEqual('Angular Material Component With Angular 5');
	});

	it('should render title in h4 tag', () => {
		const fixture = TestBed.createComponent(TestingMaterialComponent);
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('h4').textContent).toContain('Testing Reactive Angular Forms');
	});

	it(
		`should have atext 'User signup Page'`,
		async(() => {
			expect(component.text).toEqual('User signup Page');
		})
	);

	it(
		'call onsubmit method',
		async(() => {
      const testForm = <NgForm>{
        value: {
          FirstName: "Francis",
          LastName: "Kiryowa"
        }
      };
      component.onFormSubmit(testForm);
      expect(component.submitted).toEqual(true);
      expect(component.submitted).toBeTruthy();
		})
  );
  
  it('should call the onSubmit method', async(() => {
    fixture.detectChanges();
    spyOn(component, 'onFormSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onFormSubmit).toHaveBeenCalledTimes(0);
  }));

  it('form should be invalid', async(() => {
    component.regiForm.controls['FirstName'].setValue('');
    component.regiForm.controls['LastName'].setValue('');
    component.regiForm.controls['LastName'].setValue('');

    

  }));
});
