//must have this user
//use admin
db.createUser({
    user: 'vladimirpavk',
    pwd: 'observer',
    roles: ["userAdminAnyDatabase"]
})

//use admin
db.auth('vladimirpavk', 'observer')

/*assigment

use tempDb
Database Admin
*/
db.createUser({
    user: 'dbAdmin',
    pwd: 'pass123',
    roles: ['dbAdmin']
});
/*
UserAdmin
*/
db.createUser({
    user: 'dbAUser',
    pwd: 'pass123',
    roles: ['userAdmin']
});
/*
Developer
*/
db.createUser({
    user: 'dbDeveloper',
    pwd: 'pass123',
    roles: ['readWrite']
});