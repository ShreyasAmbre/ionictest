import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GittestpagePage } from './gittestpage.page';

const routes: Routes = [
  {
    path: '',
    component: GittestpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GittestpagePageRoutingModule {}
