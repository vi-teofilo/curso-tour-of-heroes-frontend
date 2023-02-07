import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MessagesComponent } from './components/messages/messages.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

const COMPONENTS = [MessagesComponent, ToolbarComponent]
const MODULES = [FlexLayoutModule,MaterialModule ]

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,MODULES,AppRoutingModule
  ],
  exports:[COMPONENTS, MODULES],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parantModule?: CoreModule){
    if (parantModule) {
      throw new Error('CoreModule has already been loaded.import this module in the AppModule')
    }
  }
}
