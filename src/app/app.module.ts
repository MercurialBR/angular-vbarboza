import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BannerComponent } from './components/banner/banner.component';
import { BannerInfiniteComponent } from './components/banner-infinite/banner-infinite.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillComponent } from './components/skills/skill/skill.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CertificationComponent } from './components/certification/certification.component';
import { ItemComponent } from './components/certification/item/item.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { NameComponent } from './components/name/name.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerComponent,
    BannerInfiniteComponent,
    SkillsComponent,
    SkillComponent,
    ProjectsComponent,
    CertificationComponent,
    ItemComponent,
    AboutMeComponent,
    NameComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
