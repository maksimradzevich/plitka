import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IPlitka, Plitka } from 'app/shared/model/plitka.model';
import { PlitkaService } from './plitka.service';

@Component({
  selector: 'jhi-plitka-update',
  templateUrl: './plitka-update.component.html'
})
export class PlitkaUpdateComponent implements OnInit {
  isSaving: boolean;

  editForm = this.fb.group({
    id: [],
    name: [],
    price: [],
    color: [],
    material: [],
    size: [],
    shopAddress: [],
    count: []
  });

  constructor(protected plitkaService: PlitkaService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ plitka }) => {
      this.updateForm(plitka);
    });
  }

  updateForm(plitka: IPlitka) {
    this.editForm.patchValue({
      id: plitka.id,
      name: plitka.name,
      price: plitka.price,
      color: plitka.color,
      material: plitka.material,
      size: plitka.size,
      shopAddress: plitka.shopAddress,
      count: plitka.count
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const plitka = this.createFromForm();
    if (plitka.id !== undefined) {
      this.subscribeToSaveResponse(this.plitkaService.update(plitka));
    } else {
      this.subscribeToSaveResponse(this.plitkaService.create(plitka));
    }
  }

  private createFromForm(): IPlitka {
    return {
      ...new Plitka(),
      id: this.editForm.get(['id']).value,
      name: this.editForm.get(['name']).value,
      price: this.editForm.get(['price']).value,
      color: this.editForm.get(['color']).value,
      material: this.editForm.get(['material']).value,
      size: this.editForm.get(['size']).value,
      shopAddress: this.editForm.get(['shopAddress']).value,
      count: this.editForm.get(['count']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IPlitka>>) {
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
