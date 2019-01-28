mongoimport tvshows.json -d tvshows -c shows --jsonArray

db.shows.find({
    "rating.average": { $gt: 9.2 },
    "runtime": {$lt: 100}
})

//or using logical operators
db.shows.find({
    $and: [
        {
            "rating.average": {$gt: 9.2}
        },
        {
            "runtime": {$lt: 100}
        }
    ]
})

mongoimport boxoffice.json -d boxOffice -c movieStarts --jsonArray
use boxOffice

db.movieStarts.find({
    $or: [
        {
            "genre": "drama"
        },
        {
            "genre": "action"
        }
    ]    
})

db.movieStarts.find({
    
})

db.movieStarts.find({
    $expr: {
        $gt: ["$visitors", "$expectedVisitors"]
    }
})
