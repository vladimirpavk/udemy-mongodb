db.persons.aggregate([
    {
        $match: {
            "name.title": "mr"
        }
    }    
]).pretty()

db.persons.aggregate([
    {
        $match: {
            gender: 'female'
        }
    },
    {
        $group: {
            _id: {                
                    "state": "$location.state"
                 },
                    "totalPersons": { $sum:1 }                
            }    
    },
    {
        $sort:{
            "totalPersons" : -1
        }
    }
])

//practice 1
db.persons.aggregate([
    {
        $match:{
            "dob.age" : { $gt: 50 }
        }
    },
    {
        $group: {
            _id: {
                "gender": "$gender"
            },
            totalPersons: { $sum: 1 },
            averageAge: { $avg: "$dob.age" }
        }
    },
    {
        $sort: {
            "averageAge": -1
        }
    }
])

db.persons.aggregate([
    {
        $project: {
            _id: 0,
            gender: 1,
            name: 1,
            email: 1,
            birthDate: "$dob.date",
            age: "$dob.age",
            geoLocation: {
                "type": "Point",
                "coordinates":  ["$location.coordinates.latitude" ,"$location.coordinates.longitude"
                    
                ]
            }           
        }
    },
    {
        $project:{            
            gender: 1,
            email: 1,
            birthDate: 1,
            age: 1,
            geoLocation: 1,
            fullName: {
                $concat: [
                    { $toUpper: "$name.title" }, 
                    " " 
                    ,
                    { $toUpper: "$name.first" },
                    " ", 
                    { $toUpper: "$name.last" }
                ]
            }
        }
    }
])