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
  },
    {
    path: 'dropdowns',
    loadComponent: () =>
      import('./dropdowns/dropdowns.component')
  .then(m => m.DropdownsComponent),
    title: 'Dropdowns'
  },
    {
    path: 'selects',
    loadComponent: () =>
      import('./select/select.component')
    .then (m => m.SelectComponent),
    title: 'Select'
  },
     {
    path: 'forms',
    loadComponent: () =>
      import('./forms/forms.component')
    .then (m => m.FormsComponent),
    title: 'Forms'
  }
]