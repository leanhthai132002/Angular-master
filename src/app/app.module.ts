import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChampComponent } from './champ/champ.component';
import { TableComponent } from './table/table.component';
import { NameComponent } from './name/name.component';
import { IdentityComponent } from './identity/identity.component';
import { TableAvatarComponent } from './table/table-avatar/table-avatar.component';
import { TableDameComponent } from './table/table-dame/table-dame.component';
import { FormComponent } from './form/form.component';
import { ShowValidateComponent } from './components/show-validate/show-validate.component';

@NgModule({
  declarations: [
    AppComponent,
    ChampComponent,
    TableComponent,
    NameComponent,
    IdentityComponent,
    TableAvatarComponent,
    TableDameComponent,
    FormComponent,
    ShowValidateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule //đưa vào đây để FormComponent bên trên có thể dùng
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
