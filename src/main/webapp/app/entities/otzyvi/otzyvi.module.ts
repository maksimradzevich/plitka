import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PlitkashopSharedModule } from 'app/shared/shared.module';
import { OtzyviComponent } from './otzyvi.component';
import { OtzyviDetailComponent } from './otzyvi-detail.component';
import { OtzyviUpdateComponent } from './otzyvi-update.component';
import { OtzyviDeleteDialogComponent } from './otzyvi-delete-dialog.component';
import { otzyviRoute } from './otzyvi.route';

@NgModule({
  imports: [PlitkashopSharedModule, RouterModule.forChild(otzyviRoute)],
  declarations: [OtzyviComponent, OtzyviDetailComponent, OtzyviUpdateComponent, OtzyviDeleteDialogComponent],
  entryComponents: [OtzyviDeleteDialogComponent]
})
export class PlitkashopOtzyviModule {}
