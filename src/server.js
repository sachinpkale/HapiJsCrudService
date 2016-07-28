require("babel-polyfill");
var bodyParser = require('body-parser');

var dao = require('./dao')

var Hapi = require('hapi')
var server = new Hapi.Server()
server.connection({ 
    host: 'localhost', 
    port: 3000 
})
server.start((err) => {
    if (err)
        throw err
    console.log('Server running at:', server.info.uri)
})

server.route({
	method: 'GET',
	path: '/{name}',
	handler: async function(req, res) {
		let name = req.params.name
		let user = await dao.get(name)
		console.log(user)
		if(user)
			res(user)
		else
			res("User is not found")
	}
})


server.route({
	method: 'POST',
	path: '/',
	handler: async function(req, res) {
		let user = Object.assign({}, req.body)
		let status = await dao.create(user)
		res(status)
	}
})

server.route({
	method: 'PUT',
	path: '/',
	handler: async function(req, res) {
		let user = Object.assign({}, req.body)
		let status = await dao.update(user)
		res(status)
	}
})


server.route({
	method: 'DELETE',
	path: '/{id}',
	handler: async function(req, res) {
		let id = req.params.id 
		let status = await dao.delete(id)
		res(status + " Row/s are deleted")
	}
})
