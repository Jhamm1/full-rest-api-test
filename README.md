# Full-rest-api-test
This service tests the [JSONPlaceholder](http://jsonplaceholder.typicode.com/) API, including the following endpoints:

- GET	/posts
- GET	/posts/{Id}
- GET	/posts/1/comments
- GET	/comments?postId={Id}
- GET	/posts?userId={Id}
- POST	/posts
- PUT	/posts/{Id}
- PATCH	/posts/{Id}
- DELETE	/posts/{Id}

The diagram below shows the test the test service


> Diagram

The ***adapters*** are developed to reduce code duplication
The config includes the rool URL of the API being tested.
Log is used for stack trace purposes.

### Requirements
* Mocha
* Chai
* Supertest

## Installation
Install ***node.js*** and ***npm*** from the below link:

[https://nodejs.org/en/download]()

#### Create dependency package
	$ npm init
	
#### Install dependencies in a terminal 
`$ npm install supertest --save`

`$ npm install chai --save`

`$ npm install mocha --save`

`$ npm install body-parser --save`

`$ npm install mocha-junit-reporter --save`

`$ npm install mocha-html-reporter --save`

`$ npm install convert-csv-to-json --save`

#### Install dependencies using the makefile (alternative installation of dependencies)
Ensure that you're in the root of the repository

`$ cd full-rest-api-test`

`$ make deps`


#### Run the API tests
`$ npm test`

`$ mocha test/run.js --reporter mochawesome`

Run the tests from the Makefile

`$ make all`

To view the Test report, run the following command
`$ open mochawesome-report/mochawesome.html`