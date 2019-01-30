db.sports.updateOne({
        "title" : "Bikovi"
    }, 
    {
        $set:{
            "title": "Bulls",
            "requiresTeam" : true
        }
    },
    {
        upsert: true
    }
);

db.sports.updateOne({
        "title" : "Bikovi"
    }, 
    {
        $set:{
            "title": "Cows",
            "requiresTeam" : false
        }
    },
    {
        upsert: true
    }
);

db.sports.update(
    {
        "requiresTeam": true
    },
    {
        $set:{
            "numplayers": 5
        }
    }
)

db.sports.update(
    {
        "requiresTeam": true
    },
    {
        $max:{
            "numplayers": 10
        }
    }
)

//users
db.users.find({
    $and: [
        {
            "hobbies.title": "Sports"
        },
        {
            "hobbies.frequency": { $gte: 3}
        }
    ]
})

db.users.find({
    "hobbies": {
        $elemMatch: {
            "title": "Sports",
            "frequency": { $gte: 3 }
        }
    }
})

db.users.updateOne({
    "name": "Chris"
},
{
    $set: {
        "hobbies":[
            {
                "title": "Sports",
                "frequency": 4
            },
            {
                "title": "Cooking",
                "frequency": 2 
            }
        ]
    }
})

db.users.updateMany({
    "hobbies": {
        $elemMatch: {
            "title": "Sports",
            "frequency": { $gte: 3 }
        }
    }
},
{    
    $set: {
        "hobbies.$.highFrequency": true
    }
})

db.users.find({
    "hobbies.frequency": {$gt: 2}
})

db.users.updateMany(
    {
        "hobbies.frequency": {$gt: 2}
    },
    {
        $set:{
            "hobbies.$.goodFrequency": true
        }
    }
)