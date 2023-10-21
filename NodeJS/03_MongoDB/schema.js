// use MovieDB;

// show collections;

db.createCollection("movies", {
    validator:{
        $jsonSchema:{
            required:['ID','title', 'year', 'genre', 'director', 'actor', 'rating'],
            properties:{
                ID:{
                    bsonType: 'string',
                    description: 'Must be a string or title'
                },
                title:{
                    bsonType: 'string',
                    description: 'Must be a string or title'
                },
                year:{
                    bsonType: 'number',
                    description: 'Must be a number or year'
                },
                genre:{
                    bsonType: 'string',
                    description: 'Must be a string or genre'
                },
                director:{
                    bsonType: 'string',
                    description: 'Must be a number or director'
                },
                actor:{
                    bsonType: 'array',
                    description: 'Must be a number or actor id'
                },
                rating:{
                    bsonType: 'number',
                    description: 'Must be a number or rating'
                }
            }
        }
    },
    validationAction: 'error'
});

db.createCollection("actors",{
    validator:{
        $jsonSchema:{
            required:['id','name','nationality','movies'],
            properties:{
                id:{
                    bsonType: 'string',
                    description: 'Must be a string or ID'
                },
                name:{
                    bsonType:'string',
                    description:'Must be a string or name'
                },
                nationality:{
                    bsonType: 'string',
                    description: 'Must be a string or title'
                },
                movies:{
                    bsonType: 'array',
                    description: 'Must be a number or title'
                }
            }
        }
    },
    validationAction: 'error'
});

db.createCollection("director",{
    validator:{
        $jsonSchema:{
            required:['id','name', 'nationality', 'movies'],
            properties:{
                id:{
                    bsonType: 'string',
                    description: 'Must be a number or title'
                },
                name:{
                    bsonType: 'string',
                    description:'Must be a string or name'
                },
                nationality:{
                    bsonType: 'string',
                    description: 'Must be a string or title'
                },
                movies:{
                    bsonType: 'array',
                    description: 'Must be a array of movie names'
                }
            }
        }
    },
    validationAction: 'error'
});