# AngularDataApp
AngularJS template of a small website that allows you to HTTP POST a formulary and HTTP GET data from an API so It can be shown in a table.

## :hammer_and_wrench: Functionalities :hammer_and_wrench:
### NavBarMenu
- [x] The template includes a NavBarMenu that allows users to change between screens.

### Screen 1 - List
- [x] This screen has a table that is filled onInit with fetched data from a free online API REST.
- [x] You can also send a HTTP DELETE of the item by pressing the red crosses on the rows of the table.

### Screen 2 - Form
- [x] This screen allows users to create an item and send it by HTTP POST to an url

-------------------------------------------------------------------------------------------

## :rocket: SetUp Tutorial :rocket:
In the following lines I will explain the necessary configurations to recreate the development of the environment of this project.

### :wrench: Command Line Configurations :wrench:
1) Create the angular project (after writing the command press yes and select CSS)
```
ng new angular-data-app
```

2) Enter the project folder.
```
cd angular-data-app
```

3) Create the two components of this project: the form and the list pages.
```
ng g c angular-form
ng g c angular-list
```

4) Install bootstrap and jQuery
```
npm install bootstrap --save
npm install jquery --save
```

5) Add project to a github repository (Create one first and copy the url).
```
git init
git remote add origin <url>
git add .
git commit -m "Comment"
git push origin master
```

6) Try it (by default it is located on localhost:4200).
```
ng serve --open
```
  
### :wrench: Code Configurations - Navigation :wrench:

1) Change the /src/app/app-routing-module.ts so it imports the new components and create the new rutes. Also, delete the default NgModule code. Here is the complete code of the file.
```
import { RouterModule, Routes } from '@angular/router';

import { AngularFormComponent } from './angular-form/angular-form.component';
import { AngularListComponent } from './angular-list/angular-list.component';


const app_routes: Routes = [
    { path: 'list', component: AngularListComponent},
    { path: 'form', component: AngularFormComponent},
    { path: '**', pathMatch:'full', redirectTo: 'list'}
];

export const AppRoutingModule = RouterModule.forRoot(app_routes, {useHash: true, scrollPositionRestoration: 'enabled'});
```

2) Delete the default code of /src/app/app.component.html and add the NavBarMenu with the paths of the const app-routes previously added. Moreover, include the router-outlet so the code under the navBarMenu is the one selected by the /src/app/app-routing-module.ts. Here is the complete code of the file.

```
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" [routerLink]="['list']">List <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" [routerLink]="['form']">Form <span class="sr-only">(current)</span></a>
      </li>
    </ul>
  </div>
</nav>

<br>

<router-outlet></router-outlet>
```

3) At this point the NavBarMenu will work but bootstrap won't. So, we need to open /angular.json and include bootstrap in the style options. The style options will end up like this:
```
"styles": [
    "src/styles.css",
    "node_modules/bootstrap/dist/css/bootstrap.min.css"
],
```

4) And boom, navigation working. If you want to try it, just `ng serve --open`. You are free to add whatever code you want in the html file of both components.

### :wrench: Code Configurations - HTTP Requests :wrench:

1) Import the HTTP and Form libraries in the /src/app/app.module.ts and include them in the NgModule imports
```
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
...
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    app_routing
  ],
```

2) Import the HTTP libraries in both /src/app/angular-list/angular-list.component.ts and /src/app/angular-form/angular-form.component.ts
```
import { HttpClient } from '@angular/common/http';
```

3) It is important to know that there are different ways to trigger an angular function. In the case of the list component, the HTTP GET will be produced when the component is charged (onInit). It is fairly simple, so just change the constructor to include the HttpClient on it, create the GetRequest and introduce the data on a list of items (copy the code from /src/app/angular-list/angular-list.component.ts, there are barely any changes aside from the getAllPeople() function).

4) Now, for the form ts file, you will send the form onSubmit so, you can delete the implementation of the onInit. Again, change the constructor and create a function to send the data with POST and other with GET so you can choose which method to use by commenting one of the lines in the onSubmit function.

5) At this point it might be useful to copy the html code of angular-data-app/src/app/angular-list/angular-form.component.html and angular-data-app/src/app/angular-list/angular-list.component.html. Basically in the list html file you are getting the fetched items and printing them in a table and, in the form file, you are just triggering the onSubmit function when clicking the Submit button.

6) If you want to see it with more clarity, you can add the following code in the /src/styles.css. It will give the form and the table some padding and it will showcase in red the wrong input boxes.:
```
body { padding: 20px; }
.form-control.ng-touched.ng-invalid {
    border: 2px solid red;
}
```


---

# :recycle: Autogenerated Text :recycle:

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
