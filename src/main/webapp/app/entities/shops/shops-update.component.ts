import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IShops, Shops } from 'app/shared/model/shops.model';
import { ShopsService } from './shops.service';

@Component({
  selector: 'jhi-shops-update',
  templateUrl: './shops-update.component.html'
})
export class ShopsUpdateComponent implements OnInit {
  isSaving: boolean;

  editForm = this.fb.group({
    id: [],
    address: [],
    time: [],
    name: [],
    phone: []
  });

  constructor(protected shopsService: ShopsService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ shops }) => {
      this.updateForm(shops);
    });
  }

  updateForm(shops: IShops) {
    this.editForm.patchValue({
      id: shops.id,
      address: shops.address,
      time: shops.time,
      name: shops.name,
      phone: shops.phone
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const shops = this.createFromForm();
    if (shops.id !== undefined) {
      this.subscribeToSaveResponse(this.shopsService.update(shops));
    } else {
      this.subscribeToSaveResponse(this.shopsService.create(shops));
    }
  }

  private createFromForm(): IShops {
    return {
      ...new Shops(),
      id: this.editForm.get(['id']).value,
      address: this.editForm.get(['address']).value,
      time: this.editForm.get(['time']).value,
      name: this.editForm.get(['name']).value,
      phone: this.editForm.get(['phone']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IShops>>) {
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
