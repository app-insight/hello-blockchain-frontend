import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {SymmetricKeyRoutingModule} from './symmetric-key-routing.module';
import {SymmetricKeyComponent} from './symmetric-key.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    NgbAlertModule.forRoot(),
    FormsModule,
    SymmetricKeyRoutingModule
  ],
  declarations: [SymmetricKeyComponent]
})
export class SymmetricKeyModule {
}
