import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MenuIzquierdaComponent } from './menu-izquierda/menu-izquierda.component';
import { AreaDeContenidoComponent } from './area-de-contenido/area-de-contenido.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MenuIzquierdaComponent,
    AreaDeContenidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
