import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PlitkashopSharedModule } from 'app/shared/shared.module';
import { CoursePartsComponent } from './course-parts.component';
import { CoursePartsDetailComponent } from './course-parts-detail.component';
import { CoursePartsUpdateComponent } from './course-parts-update.component';
import { CoursePartsDeleteDialogComponent } from './course-parts-delete-dialog.component';
import { coursePartsRoute } from './course-parts.route';

@NgModule({
  imports: [PlitkashopSharedModule, RouterModule.forChild(coursePartsRoute)],
  declarations: [CoursePartsComponent, CoursePartsDetailComponent, CoursePartsUpdateComponent, CoursePartsDeleteDialogComponent],
  entryComponents: [CoursePartsDeleteDialogComponent]
})
export class PlitkashopCoursePartsModule {}
