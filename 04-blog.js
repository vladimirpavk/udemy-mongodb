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

//with validation error
db.posts.insertOne(
    {
        title : "This is my first post",
        text : "Story about how I wrote my first post.",
        tags : [ "first", "post"],
        creator : 'nikolas',
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
                        description: 'must be a string and is required...'
                    },
                    'text': {
                        bsonType : 'string',
                        description: 'must be a string and is required...'
                    },
                    'creator': {
                        bsonType: 'objectId',
                        description: 'must be a objectid and is required...'
                    },
                    'comments': {
                        bsonType: 'array',
                        description: 'must be an array and is required...',
                        items: {
                            bsonType: 'object',
                            required: ['text', 'author'],
                            properties: {
                                'text': {
                                    bsonType : 'string',
                                    description: 'must be a string and is required...'
                                },
                                'author': {
                                    bsonType: 'objectId',
                                    description: 'must be a objectid and is required...'
                                }
                            }
                        }
                    }
                }
            }
        }
    }        
)
