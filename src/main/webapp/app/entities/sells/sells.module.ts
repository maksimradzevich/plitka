import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PlitkashopSharedModule } from 'app/shared/shared.module';
import { SellsComponent } from './sells.component';
import { SellsDetailComponent } from './sells-detail.component';
import { SellsUpdateComponent } from './sells-update.component';
import { SellsDeleteDialogComponent } from './sells-delete-dialog.component';
import { sellsRoute } from './sells.route';

@NgModule({
  imports: [PlitkashopSharedModule, RouterModule.forChild(sellsRoute)],
  declarations: [SellsComponent, SellsDetailComponent, SellsUpdateComponent, SellsDeleteDialogComponent],
  entryComponents: [SellsDeleteDialogComponent]
})
export class PlitkashopSellsModule {}
