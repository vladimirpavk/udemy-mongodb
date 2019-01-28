db.companies.insertOne({
    name: 'MultiSoft',
    city: 'Belgrade',
    employees: 200
})

db.companies.insertMany([
    {
        name: 'BelgradeSoft',
        city: 'Belgrade',
        employees: 400
    },
    {
        name: 'NišSoft',
        city: 'Niš',
        employees: 1200
    }
])

db.companies.insertOne({
    name: 'BorSoft',
    employees: 10
},
{
    writeConcern: {
        w:1,
        j: true
    }
})

db.companies.insertOne({
    name: 'SuboticaSoft',
    employees: 30
},
{
    writeConcern: {
        w:1,
        j: false
    }
})

db.companies.insertMany([    
    {
        name: 'ZaječarSoft',
        employees: 5
    },
    {
        _id: ObjectId("5c4cd4611091f2c9d1655116"),
        name: 'ZrenjaninSoft',
        employees: 40
    },
    {
        name: 'NegotinSoft',
        employees: 10
    }
],
{
    ordered: false
})
