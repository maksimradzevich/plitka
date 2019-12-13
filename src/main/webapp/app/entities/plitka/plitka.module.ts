import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PlitkashopSharedModule } from 'app/shared/shared.module';
import { PlitkaComponent } from './plitka.component';
import { PlitkaDetailComponent } from './plitka-detail.component';
import { PlitkaUpdateComponent } from './plitka-update.component';
import { PlitkaDeleteDialogComponent } from './plitka-delete-dialog.component';
import { plitkaRoute } from './plitka.route';

@NgModule({
  imports: [PlitkashopSharedModule, RouterModule.forChild(plitkaRoute)],
  declarations: [PlitkaComponent, PlitkaDetailComponent, PlitkaUpdateComponent, PlitkaDeleteDialogComponent],
  entryComponents: [PlitkaDeleteDialogComponent]
})
export class PlitkashopPlitkaModule {}
