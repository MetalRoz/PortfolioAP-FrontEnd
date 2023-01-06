import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutmeComponent } from './about-me/edit-aboutme.component';
import { AgregarEducationComponent } from './education/agregar-education.component';
import { EditarEducationComponent } from './education/editar-education.component';
import { AgregarExpComponent } from './experiences/agregar-exp.component';
import { EditarExpComponent } from './experiences/editar-exp.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { AgregarProyectoComponent } from './projects/agregar-proyecto.component';
import { EditarProyectoComponent } from './projects/editar-proyecto.component';
import { AgregarSkillComponent } from './skills/agregar-skill.component';
import { EditarSkillComponent } from './skills/editar-skill.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path:'edit-aboutme/:id', component: EditAboutmeComponent },
  { path:'agregar-exp', component: AgregarExpComponent },
  { path:'editar-exp/:id', component: EditarExpComponent },
  { path:'agregar-education', component: AgregarEducationComponent },
  { path:'editar-education/:id', component: EditarEducationComponent },
  { path:'editar-skill/:id', component: EditarSkillComponent },
  { path:'agregar-skill', component: AgregarSkillComponent },
  { path:'agregar-proyecto', component: AgregarProyectoComponent },
  { path:'editar-proyecto/:id', component: EditarProyectoComponent },
  { path:'**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }