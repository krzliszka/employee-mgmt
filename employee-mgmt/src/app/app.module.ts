<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
>>>>>>> 0ca97c1fdaa126c75aacadbabf3f6e988fd9991c
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { EmployeeService } from './employee.service';
=======
>>>>>>> 0ca97c1fdaa126c75aacadbabf3f6e988fd9991c

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
<<<<<<< HEAD
    BrowserModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
=======
    BrowserModule
  ],
  providers: [],
>>>>>>> 0ca97c1fdaa126c75aacadbabf3f6e988fd9991c
  bootstrap: [AppComponent]
})
export class AppModule { }
