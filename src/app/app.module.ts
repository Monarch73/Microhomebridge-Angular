import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SwitchesService } from './shared/switches.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './modules/app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { WindowModalComponent } from './components/window-modal/window-modal.component';
import { NewSwitchComponent } from './components/new-switch/new-switch.component';
import { SwitchComponent } from './components/switch/switch.component';
import { SwitchesComponent } from './components/switches/switches.component';

@NgModule({
  declarations: [
    AppComponent,
    WindowModalComponent,
    NewSwitchComponent,
    SwitchComponent,
    SwitchesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ SwitchesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
