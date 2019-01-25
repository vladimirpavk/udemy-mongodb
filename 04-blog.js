[
    {
        "firstname" : "Vladimir",
        "lastname" : "Pavković",
        "age" : 41,
        "email" : "vladimirpavk@gmail.com"
    },
    {
        "firstname" : "Petar",
        "lastname" : "Petrović",
        "age" : 26,
        "email" : "petar.petkovic@bbc.com"
    },
    {
        "firstname" : "Rade",
        "lastname" : "Mitrović",
        "age" : 26,
        "email" : "radmit@gmail.com"
    }
]

db.posts.insertOne(
    {
        title : "This is my first post",
        text : "Story about how I wrote my first post.",
        tags : [ "first", "post"],
        creator : ObjectId("5c4acac36f5e33482799ee37"),
        comments : [
        {
            author : ObjectId("5c4acac36f5e33482799ee38"),
            text : "This is the first comment"
        },
        {
            author : ObjectId("5c4acac36f5e33482799ee39"),
            text : "This is second comment"
        }]        
    }
)

db.createCollection('posts', {
        validator : {
            $jsonSchema : {
                bsonType : 'object',
                required : ['title', 'text', 'creator', 'comments'],
                properties : {
                    'title' : {
                        bsonType : 'string',
                        descrption: ''
                    }
                }
            }
        }
    }    
)