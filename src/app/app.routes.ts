import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MonstersComponent } from './components/monsters/monsters.component';
import { MonsterDetailComponent } from './components/monster-detail/monster-detail.component';
import { AllMonstersComponent } from './components/all-monsters/all-monsters.component';

export const routes: Routes = [
  { path: 'monsters', component: HomeComponent },
  { path: '', component: AllMonstersComponent },
  { path: 'monsters/:id', component: MonsterDetailComponent },
  { path: '**', redirectTo: '' }
];
