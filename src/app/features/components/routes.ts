import { Routes } from "@angular/router";

export const COMPONENTS_ROUTES: Routes = [
    {
        path: 'buttons', 
        loadComponent: () => 
            import('./buttons/buttons.component')
             .then(m => m.ButtonsComponent),
            title: 'Buttons'
    },
     {
    path: 'cards',
    loadComponent: () =>
      import('./cards/cards.component')
        .then(m => m.CardsComponent),
    title: 'Cards'
  }
]