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
                "coordinates":  [
                    {
                        $convert:{
                            input: "$location.coordinates.latitude",
                            to: "double",
                            onError: 0,
                            onNull: 0
                        }
                    },
                    {
                        $convert:{
                            input: "$location.coordinates.longitude",
                            to: "double",
                            onError: 0,
                            onNull: 0
                        }
                    }                    
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

db.friends.aggregate([
    {
        $unwind: "$hobbies"
    },
    {
        $group: {
            _id:{
                "age": "$age"
            },
            allHobbies: {$addToSet: "$hobbies"}            
        }
    }    
])

db.friends.aggregate([
    {
        $project:{
            _id: 0,
            name: 1,
            hobbies: 1,
            age: 1,
            examDifficulty: "$examScores.difficulty"
        }
    }
])

//show only first element in the array
db.friends.aggregate([
    {
        $project:{
            _id: 0,
            name: 1,
            hobbies: 1,
            age: 1,
            firstExam: {$slice: ["$examScores", 1]}
        }
    }
])

//the last two -2
db.friends.aggregate([
    {
        $project:{
            _id: 0,
            name: 1,
            hobbies: 1,
            age: 1,
            firstExam: {$slice: ["$examScores", -2]}
        }
    }
])

//only second element
db.friends.aggregate([
    {
        $project:{
            _id: 0,
            name: 1,
            hobbies: 1,
            age: 1,
            firstExam: {$slice: ["$examScores", 2, 1]}
        }
    }
])

db.friends.aggregate([
    {
        $project:{
            _id: 0,
            name: 1,
            hobbies: 1,
            age: 1,
            numExams: {$size: "$examScores"}
        }
    }
])

db.friends.aggregate([
    {
        $project:{
            _id: 0,
            name: 1,
            hobbies: 1,
            age: 1,
            examScores2: {$filter: {
                input: "$examScores",
                as: 'eS',
                cond: {
                    $gt: ["$$eS.score", 60]
                }
            }}
        }
    }
])

db.friends.aggregate([
    {
        $unwind: "$examScores"
    },
    {
        $project:{
            _id: 1,
            name: 1,
            age: 1,
            score: "$examScores.score"
        }
    },
    {
        $sort: { "score": -1}
    },
    {
        $group:{
            _id: "$_id",
            maxScore: {
                $max: "$score"
            }     
        }
    }   
])

db.persons.aggregate([
    {
        $bucket:{
            groupBy: "$dob.age",
            boundaries: [ 0, 18, 30, 50, 80, 120],
            output:{
                numOfPersons: {
                    $sum: 1
                },
                averageAge:{
                    $avg: "$dob.age"
                }               
            }
        }
    }
])
