const settings = require("./settings")
const knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host: settings.host,
    user     : settings.user,
    password : settings.password,
    database : settings.database,
  }
});

let lastName = process.argv[2]

knex.select('*').from('famous_people').timeout(1000).where({
	last_name: lastName
})

.then(console.log)
.catch(console.error)


.finally(function(){
	knex.destroy();
})