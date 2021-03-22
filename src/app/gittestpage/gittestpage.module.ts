import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GittestpagePageRoutingModule } from './gittestpage-routing.module';

import { GittestpagePage } from './gittestpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GittestpagePageRoutingModule
  ],
  declarations: [GittestpagePage]
})
export class GittestpagePageModule {}
