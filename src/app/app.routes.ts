import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => 
            import( './features/introduction/introduction.component')
            .then(m=>m.IntroductionComponent),
            title: "Introduction"
    },
    {
        path: 'components',
        loadChildren:() => 
            import('./features/components/routes')
        .then(m=>m.COMPONENTS_ROUTES)
    },
    { path: '**', redirectTo: '' }
];
