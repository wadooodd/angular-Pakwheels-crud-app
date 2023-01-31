# 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Project Description
## Part 1
You are required to develop a single-page web application for creating an online vehicle buying and selling
system (e.g., Pakwheels).
The basic requirements are as follows.
* On startup, the application should display a list of featured used cars and bikes available for
selling. There should be a list of available vehicles (cars and bikes) belonging to each category. The
list should be displayed in grid form. Each vehicle should be displayed with an image, title,
location, price, date added, and rating. 
* There should be a navigation bar that contains various categories for filtering the search. Filtering
categories should include the city (top five cities of Pakistan), make (any ten companies), price
range, year, mileage, color, engine capacity, vehicle type (car/bike), and rating (1—5).

* After selecting a particular category, the list of available vehicles should be updated accordingly.
If multiple categories are selected, the list should vehicle that reflects all selected categories.

Hint: make use of angular components and directives to change the view of the vehicleslist based
on the selected category option.
* Upon clicking on a vehicle, its details should be displayed which must include: 
1. The complete title and picture of the vehicle.
2. The information of the vehicle including price, location, model, year, transmission,
mileage, color, registered in, assembly, engine capacity, last updated, etc.
3. A brief features list of the vehicle.
4. Overall condition (exterior, interior, engine, transmission, suspension, steering, etc.) of
the vehicle.
5. Seller’s information including contact number, email, location, contact hours, etc.
6. Seller’s comments on the vehicle.

## Part 2
In 2nd part, you are required to implement Web API (using Express and Node) for the Angular UI
already developed in Part 1. For the data manipulation, you are required to use MongoDB with
the API.
