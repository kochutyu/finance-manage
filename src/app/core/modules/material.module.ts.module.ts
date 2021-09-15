import {NgModule} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonToggleModule} from "@angular/material/button-toggle";

const modules = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatSelectModule,
  MatFormFieldModule,
  MatButtonToggleModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule {
}
