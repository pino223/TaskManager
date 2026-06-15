import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { BoardComponent } from './pages/board/board';
import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register';
import { ProfileComponent } from './pages/profile/profile';
import { TaskDetailComponent } from './pages/task-detail/task-detail';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'board', component: BoardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'task/:id', component: TaskDetailComponent },
  { path: '**', redirectTo: 'dashboard' }
];