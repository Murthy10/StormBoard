# StormBoard

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.16.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Run all
docker run -d --name osmstream -p 2181:2181 -p 9092:9092 osmstream
docker run -d --name osmstorm -v /home/murthy/projects/java/storm/:/maped/ -p 8080:8080 osmstorm
node node-server/server.js

docker exec -it osmstorm bash
java -jar target/storm-1.0-SNAPSHOT-jar-with-dependencies.jar 6000

docker exec -it osmstream bash
python3 /opt/OSMstream/test_diff.py 

