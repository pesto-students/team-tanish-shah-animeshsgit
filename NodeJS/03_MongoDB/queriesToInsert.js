db.actors.insertMany([
    { id: 'A01', name: 'Robert Downey Jr', nationality: 'American', movies: ['M01', 'M02'] },
    { id: 'A02', name: 'Chris Evans', nationality: 'American', movies: ['M01', 'M03'] },
    { id: 'A03', name: 'Chris Hemsworth', nationality: 'Australian', movies: ['M01'] },
    { id: 'A04', name: 'Scarlett Johansson', nationality: 'American', movies: ['M01', 'M02', 'M03'] }
]);

db.director.insertMany([
    { id: 'D01', name: 'Joss Whedon', nationality: 'American', movies: ['M01'] },
    { id: 'D02', name: 'Jon Favreau', nationality: 'American', movies: ['M02'] },
    { id: 'D03', name: 'Anthony Russo', nationality: 'Australian', movies: ['M03'] }
]);
db.movies.insertMany([
    { ID: 'M01', title: 'The Avengers', year: 2012, genre: 'fiction', director: 'D01', actor: ['A01', 'A02', 'A03', 'A04'], rating: 8 },
    { ID: 'M02', title: 'Iron Man 2', year: 2010, genre: 'fiction', director: 'D02', actor: ['A01', 'A04'], rating: 7 },
    { ID: 'M03', title: 'Captain America: The Winter Soldier', year: 2014, genre: 'fiction', director: 'D03', actor: ['A01', 'A04'], rating: 8 }
]);