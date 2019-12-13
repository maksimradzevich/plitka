import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PlitkashopSharedModule } from 'app/shared/shared.module';
import { AdminsComponent } from './admins.component';
import { AdminsDetailComponent } from './admins-detail.component';
import { AdminsUpdateComponent } from './admins-update.component';
import { AdminsDeleteDialogComponent } from './admins-delete-dialog.component';
import { adminsRoute } from './admins.route';

@NgModule({
  imports: [PlitkashopSharedModule, RouterModule.forChild(adminsRoute)],
  declarations: [AdminsComponent, AdminsDetailComponent, AdminsUpdateComponent, AdminsDeleteDialogComponent],
  entryComponents: [AdminsDeleteDialogComponent]
})
export class PlitkashopAdminsModule {}
