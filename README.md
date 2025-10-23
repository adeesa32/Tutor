# Front project Release

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

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

There is a file called data-api.service.ts in the location of src/app/services en el cual se ve el acceso al backend y se extrae en los componentes.

- Los componentes que necesiten datos del back toman los datos del data-api.service.ts de su componente .ts, por ejemplo:
el componente de activity.component.html toma los datos de su activity.component.ts y se pueden realizar operaciones con los mismos.


To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

!!!!!!OJO! debería iniciar en login, pero por facilidad lo estoy redirigiendo a Teachers
Modificar las rutas en el archivo app-routing-module.ts

Estructura:
-Login  
-Home (no funciona)
-Home-app 	(home)  
-Strategies	(strategies) 
-recomended 

-Instructions	(activities) (no va a funcionar)
	-Activity/1
		-resultados -> homeapp
-Prueba		(free reading)
	-libro/1...n
-statistics (statistics)
-Libros
  -LibroDetail
-LoginTeacher
  - Teacher

-navbar
-page-not-found
-singup  (registro)

Para las pruebas la información que "recupera" se encuentra en:
C:\Users\52667\arq.soft\src\app\libro\components\prueba\prueba.component.ts
  21,19:       title: 'The Jungle Book',
C:\Users\52667\arq.soft\src\app\core\service\libros\libro-s.service.ts
  18,20:        title: 'The Jungle Book                          ',
