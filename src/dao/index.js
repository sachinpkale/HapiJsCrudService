var User = require('./entities/user').User

var exports = module.exports = {};

exports.get = function(name) {
	return User.findOne({where: {name: name}})
}

exports.create = function(user) {
	return User.create(user)
}

exports.update = function(user) {
	return User.upsert(user)
}

exports.delete = function(id) {
	return User.destroy({where: {id: id}})
}