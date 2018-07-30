import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { UltimatixComponent } from './ultimatix/ultimatix.component';
import { UltimatixService } from './ultimatix.service';
import { EmpFilterPipe } from './emp-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UltimatixComponent,
    EmpFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UltimatixService],
  bootstrap: [AppComponent]
})
export class AppModule { }
