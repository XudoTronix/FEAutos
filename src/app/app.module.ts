import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { TestComponentComponent } from './components/test-component/test-component.component';
import { AutoListComponent } from './components/auto-list/auto-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChoferListComponent } from './components/chofer-list/chofer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    AutoListComponent,
    ChoferListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
