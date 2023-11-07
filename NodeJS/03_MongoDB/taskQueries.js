// a) Find all movies released in a specific year. 
db.movies.find({ year: 2014 })
// b) Find all movies in a specific genre.
db.movies.find({ genre: "fiction" })
// c) Find all movies directed by a specific director.
db.movies.aggregate([
    {
        $lookup: {
            from: 'director',
            localField: "ID",
            foreignField: "movies",
            as: "movie_Director_details",
        },
    },
]);
// d) Find all movies that a specific actor acted in.
db.movies.aggregate([
    {
        $lookup: {
            from: 'actors',
            localField: "ID",
            foreignField: "movies",
            as: "movie_Actor_details",
        },
    },
]);
// e) Find all directors from a specific nationality.
db.director.find({ nationality: "American" })
// f) Find all actors from a specific nationality.
db.actors.find({ nationality: "American" })