import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { NotFound } from './views/not-found/not-found';
import { DashboardLayout } from './layout/dashboard-layout/dashboard-layout';
import { Perfil } from './views/perfil/perfil';


export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: 'dashboard-layout', component: DashboardLayout },
    { path: 'perfil', component: Perfil },
    

    // Ruta comodin 404 
    { path: '**', component: NotFound }
];

