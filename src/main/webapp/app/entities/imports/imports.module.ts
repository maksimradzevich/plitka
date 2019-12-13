import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PlitkashopSharedModule } from 'app/shared/shared.module';
import { ImportsComponent } from './imports.component';
import { ImportsDetailComponent } from './imports-detail.component';
import { ImportsUpdateComponent } from './imports-update.component';
import { ImportsDeleteDialogComponent } from './imports-delete-dialog.component';
import { importsRoute } from './imports.route';

@NgModule({
  imports: [PlitkashopSharedModule, RouterModule.forChild(importsRoute)],
  declarations: [ImportsComponent, ImportsDetailComponent, ImportsUpdateComponent, ImportsDeleteDialogComponent],
  entryComponents: [ImportsDeleteDialogComponent]
})
export class PlitkashopImportsModule {}
