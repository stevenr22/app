import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { NotFound } from './views/not-found/not-found';
import { Perfil } from './views/perfil/perfil';
import { PrivateLayout } from './layout/private-layout/private-layout';
import { Dashboard } from './views/dashboard/dashboard';


export const routes: Routes = [
    // raiz rutas publicas: redireccion inicial
    { path: '', redirectTo: 'login', pathMatch: 'full' },

    // rutas publicas
    { path: 'login', component: Login, title: 'sysGI .:|:. Iniciar sesión' },
    { path: 'register', component: Register, title: 'sysGI .:|:. Registrarse' },

    // raiz rutas privadas:
    { 
        path: 'panel',
        component: PrivateLayout,
        children: [
            { path: '', component: Dashboard,  title: 'sysGI .:|:. dashboard'},
            { path: 'perfil', component: Perfil, title: 'sysGI .:|:. perfil' }
            // otras rutas hijos
        ], 
    },
    

    // Ruta comodin 404 
    { path: '**', component: NotFound }
];

