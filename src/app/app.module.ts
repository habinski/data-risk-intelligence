import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';


//Material style modules
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';

// Conponents
import { UserTableComponent } from './components/user-table/user-table.component';
import { UserItemComponent } from './components/user-item/user-item.component'
import { HttpClientModule } from '@angular/common/http';
// import { AddUserComponent } from './components/add-user/add-user.component';
import { AddUserPopupComponent } from './components/add-user-popup/add-user-popup.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserTableComponent,
    UserItemComponent,
    // AddUserComponent,
    AddUserPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    CdkAccordionModule,
    MatButtonModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatInputModule,
    MatDatepickerModule, MatNativeDateModule, MatTableModule,
    MatSelectModule,
    MatDialogModule,
    HttpClientModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
