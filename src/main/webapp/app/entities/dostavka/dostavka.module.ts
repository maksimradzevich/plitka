import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PlitkashopSharedModule } from 'app/shared/shared.module';
import { DostavkaComponent } from './dostavka.component';
import { DostavkaDetailComponent } from './dostavka-detail.component';
import { DostavkaUpdateComponent } from './dostavka-update.component';
import { DostavkaDeleteDialogComponent } from './dostavka-delete-dialog.component';
import { dostavkaRoute } from './dostavka.route';

@NgModule({
  imports: [PlitkashopSharedModule, RouterModule.forChild(dostavkaRoute)],
  declarations: [DostavkaComponent, DostavkaDetailComponent, DostavkaUpdateComponent, DostavkaDeleteDialogComponent],
  entryComponents: [DostavkaDeleteDialogComponent]
})
export class PlitkashopDostavkaModule {}
