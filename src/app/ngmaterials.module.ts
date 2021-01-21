import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
  imports:[MatInputModule, MatCardModule, MatPaginatorModule],
  exports:[MatInputModule, MatCardModule, MatPaginatorModule]
})
export class MaterialAppModule{}


