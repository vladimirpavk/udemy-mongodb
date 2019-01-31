db.places.insertOne({
    name: 'Anna Rooms',
    location: {
        type: "Point",
        coordinates: [
            23.8756763,
            40.397844
        ]        
    }
});

db.places.find({
    location:{
        $near:{
            $geometry:{
                type: "Point",
                coordinates: [
                    23.8796494,
                    40.3986619
                ]
            }
        }
    }
})

db.places.createIndex({location:"2dsphere"})

const p1 = [ 22.09673, 44.06423];
const p2 = [ 22.09652, 44.06225];
const p3 = [ 22.09681, 44.00609];
const p4 = [ 22.09743, 44.06107];
const p5 = [ 22.09724, 44.06241];
const p6 = [ 22.09739, 44.06430];

db.areas.insertOne({
    name: 'Palestinsko naselje',
    area: {
        type: "Polygon",
        coordinates: [
            [ p1, p2, p3, p4, p5, p6, p1 ]
        ]        
    }
});

db.areas.createIndex({area: "2dsphere"})

//is inside
db.areas.findOne({
    area: {
        $geoIntersects: {
            $geometry: {
                type:"Point",
                coordinates: [ 22.09679, 44.06178]
            }
        }
    }
})

//is outside
db.areas.findOne({
    area: {
        $geoIntersects: {
            $geometry: {
                type:"Point",
                coordinates: [ 22.097130, 44.063879]
            }
        }
    }
})

//practice
db.places.insertMany([
    {
        name: 'Palestinsko naselje 122',
        location: {
            type: "Point",
            coordinates: [ 22.09709, 44.06399]
        }
    },
    {
        name: 'Palestinsko naselje 178',
        location: {
            type: "Point",
            coordinates: [ 22.09679, 44.06178]
        }
    },
    {
        name: 'Kineski tržni centar',
        location: {
            type: "Point",
            coordinates: [ 22.10086, 44.0623]
        }
    }
])

db.places.createIndex({location: "2dsphere"})

db.places.find({
    location: {
        $near:{
            $geometry:{
                type: "Point",
                coordinates: [ 22.09683, 44.06231]
            },
            $minDistance: 100,
            $maxDistance: 1000
        }
    }
})

const p1 = [ 22.09673, 44.06423];
const p2 = [ 22.09652, 44.06225];
const p3 = [ 22.09681, 44.00609];
const p4 = [ 22.09743, 44.06107];
const p5 = [ 22.09724, 44.06241];
const p6 = [ 22.09739, 44.06430];

db.places.find({
    location: {
        $geoWithin: {
            $geometry:{
                type: "Polygon",
                coordinates: [ [ p1, p2, p3, p4, p5, p6, p1 ] ]
            }
        }
    }
})

db.areas.insertOne({
    name: 'Palestinsko naselje',
    area: {
        type: "Polygon",
        coordinates: [
            [ p1, p2, p3, p4, p5, p6, p1 ]
        ]        
    }
});

db.areas.findOne({
    area:{
        $geoIntersects:{
            $geometry:{
                type: "Point",
                coordinates: [ 22.09679, 44.06178]
            }
        }
    }
})

