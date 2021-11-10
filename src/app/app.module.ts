import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { AboutComponent } from './about/about.component';
import { CvComponent } from './cv/cv.component';
import { SamplesComponent } from './samples/samples.component';
import { StackComponent } from './stack/stack.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    MyFooterComponent,
    AboutComponent,
    CvComponent,
    SamplesComponent,
    StackComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
