import { FooterModule } from './footer/footer.module';
import { NavbarModule } from './navbar/navbar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphqlModule } from 'src/app/@graphql/modules/graphql.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GraphqlModule,
    NavbarModule,
    FooterModule
  ],
  exports: [NavbarModule, FooterModule]
})
export class SharedModule { }
