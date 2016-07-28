# NodeJsCrudService based on HapiJs framework

Simple NodeJS based RESTful service with async/await using HapiJS and Sequelize.

Instructions to build and run:
- npm install
- npm run build
- node lib/server.js
- This will start HTTP server on port 3000.

# API details:

1. Create - POST: 
    - curl 'http://localhost:3000/' -H 'Content-Type: application/json' --data-binary $'{"name": "Qwer", "age": 30}'
2. Retrieve - GET: 
    - curl 'http://localhost:3000/3' -H 'Accept: application/json'
3. Udate - PUT: 
    - curl 'http://localhost:3000/' -X PUT -H 'Accept: application/json' -H 'Content-Type: application/json' --data-binary $'{"id": 5, "name": "Abc", "age": 60}'
4. Delete - DELETE: 
    - curl 'http://localhost:3000/5' -X DELETE -H 'Accept: application/json' 'Content-Type: application/json'
