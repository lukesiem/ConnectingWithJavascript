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

let input = {first_name:process.argv[2], last_name:process.argv[3], birthdate: process.argv[4]}



knex('famous_people').insert(input)
.then(console.log)
.catch(console.error)


.finally(function(){
	knex.destroy();
})