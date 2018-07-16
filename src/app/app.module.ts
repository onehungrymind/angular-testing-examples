import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';

import { ItemsService, WidgetsService } from './shared';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ItemsComponent } from './items/items.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';

import { WidgetsComponent } from './widgets/widgets.component';
import { WidgetDetailComponent } from './widgets/widget-detail/widget-detail.component';
import { WidgetsListComponent } from './widgets/widgets-list/widgets-list.component';



import {
  SimpleComponent,
  TemplateComponent,
  ServiceComponent,
  RemoteComponent,
  InputOutputComponent,
  RoutedComponent,
  IsolatedPipe,
  IsolatedService,
  AsyncServiceComponent
} from './examples';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemsComponent,
    ItemsListComponent,
    ItemDetailComponent,
    WidgetsComponent,
    WidgetDetailComponent,
    WidgetsListComponent,
    // EXAMPLES
    SimpleComponent,
    TemplateComponent,
    ServiceComponent,
    RemoteComponent,
    InputOutputComponent,
    RoutedComponent,
    IsolatedPipe,
    AsyncServiceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  providers: [ItemsService, WidgetsService, IsolatedService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
