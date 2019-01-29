//mongoimport tvshows.json -d tvshows -c shows --jsonArray

//mongoimport boxoffice.json -d boxOffice -c movieStarts --jsonArray
//use boxOffice

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


db.shows.find({
    $and: [
        {
            "genres": "Action"
        },
        {
            "genres": "Thriller"
        }
    ]    
})
//the same but with $all operator
db.shows.find({
    "genres" : { $all: ["Action", "Thriller"] }
})


//second assigment
//mongoimport boxoffice-extended.json -d boxOffice -c exmovieStarts --jsonArray
//use boxOffice
db.exmoviestarts.find(
    { 
        "genre": { $size: 3 }
    }
)

db.exmoviestarts.find(
    {
        "meta.aired" : 2018
    }
)

db.exmoviestarts.find(
    {
        "ratings" : {
            $gt: 8
        }
    }
)