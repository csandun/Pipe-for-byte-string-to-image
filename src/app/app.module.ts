import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { Base64Pipe } from './convert-base64-img.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule],
  providers: [],
  declarations: [AppComponent, Base64Pipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
