import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PlitkashopSharedModule } from 'app/shared/shared.module';
import { SoldersComponent } from './solders.component';
import { SoldersDetailComponent } from './solders-detail.component';
import { SoldersUpdateComponent } from './solders-update.component';
import { SoldersDeleteDialogComponent } from './solders-delete-dialog.component';
import { soldersRoute } from './solders.route';

@NgModule({
  imports: [PlitkashopSharedModule, RouterModule.forChild(soldersRoute)],
  declarations: [SoldersComponent, SoldersDetailComponent, SoldersUpdateComponent, SoldersDeleteDialogComponent],
  entryComponents: [SoldersDeleteDialogComponent]
})
export class PlitkashopSoldersModule {}
