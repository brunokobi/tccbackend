module.exports = {
    "type":"postgres",
    "url":process.env.DATABASE_URL,
    // "host":"localhost",
    // "port":"5432",
    // "username":"postgres",
    // "password":"docker",
    // "database":"unisales",
    "entities":[
        "./dist/models/*.js"
    ],
    "migrations":[
        "./dist/database/migrations/*.js"
    ],
    "cli":{
        "migrationsDir":["./src/database/migrations"],
        "entitiesDir":"src/models"
    }
}