import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ICourseParts, CourseParts } from 'app/shared/model/course-parts.model';
import { CoursePartsService } from './course-parts.service';

@Component({
  selector: 'jhi-course-parts-update',
  templateUrl: './course-parts-update.component.html'
})
export class CoursePartsUpdateComponent implements OnInit {
  isSaving: boolean;

  editForm = this.fb.group({
    id: [],
    npart: [],
    downloadLink: [],
    downloadDescription: [],
    testName: [],
    testQuestionCount: []
  });

  constructor(protected coursePartsService: CoursePartsService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ courseParts }) => {
      this.updateForm(courseParts);
    });
  }

  updateForm(courseParts: ICourseParts) {
    this.editForm.patchValue({
      id: courseParts.id,
      npart: courseParts.npart,
      downloadLink: courseParts.downloadLink,
      downloadDescription: courseParts.downloadDescription,
      testName: courseParts.testName,
      testQuestionCount: courseParts.testQuestionCount
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const courseParts = this.createFromForm();
    if (courseParts.id !== undefined) {
      this.subscribeToSaveResponse(this.coursePartsService.update(courseParts));
    } else {
      this.subscribeToSaveResponse(this.coursePartsService.create(courseParts));
    }
  }

  private createFromForm(): ICourseParts {
    return {
      ...new CourseParts(),
      id: this.editForm.get(['id']).value,
      npart: this.editForm.get(['npart']).value,
      downloadLink: this.editForm.get(['downloadLink']).value,
      downloadDescription: this.editForm.get(['downloadDescription']).value,
      testName: this.editForm.get(['testName']).value,
      testQuestionCount: this.editForm.get(['testQuestionCount']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ICourseParts>>) {
    result.subscribe(() => this.onSaveSuccess(), () => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError() {
    this.isSaving = false;
  }
}
