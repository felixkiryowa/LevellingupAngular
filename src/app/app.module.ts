import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedComponent } from './shared/shared.component';
import { ProductListComponent } from './product/product-list.component';
import { ConvertToSpacesPipe } from 'src/shared/convert-to-spaces.pipe';
import { StartComponent } from 'src/shared/star.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product/product-detail.guard';
import { TestingMaterialComponent } from './testing-material/testing-material.component';
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
  MatTableModule,
  MatSlideToggleModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher
} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SharedComponent,
    ProductListComponent,
    StartComponent,
    ConvertToSpacesPipe,
    ProductDetailComponent,
    TestingMaterialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    MatTableModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path:'products', component: ProductListComponent},
      { path: 'products/:id',
        canActivate: [ ProductDetailGuard ], 
      component: ProductDetailComponent },
      { path: 'welcome', component: HomeComponent },
      { path: 'material', component: TestingMaterialComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }


    ])
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
