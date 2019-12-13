import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PlitkashopSharedModule } from 'app/shared/shared.module';
import { ShopsComponent } from './shops.component';
import { ShopsDetailComponent } from './shops-detail.component';
import { ShopsUpdateComponent } from './shops-update.component';
import { ShopsDeleteDialogComponent } from './shops-delete-dialog.component';
import { shopsRoute } from './shops.route';

@NgModule({
  imports: [PlitkashopSharedModule, RouterModule.forChild(shopsRoute)],
  declarations: [ShopsComponent, ShopsDetailComponent, ShopsUpdateComponent, ShopsDeleteDialogComponent],
  entryComponents: [ShopsDeleteDialogComponent]
})
export class PlitkashopShopsModule {}
