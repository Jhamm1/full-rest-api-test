deps:
	- npm install supertest --save
	- npm install chai --save
	- npm install mocha --save
	- npm install body-parser --save
	- npm install mocha-junit-reporter --save
	- npm install mocha-html-reporter --save
	- npm install convert-csv-to-json --save
	- npm install logger --save
	- npm install fs --save

all:
	- mocha test/run.js --reporter mochawesome
	- open mochawesome-report/mochawesome.html
