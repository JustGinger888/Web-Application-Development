const express = require('express');
const app = express();

const songs = [
    {
        id: "1",
        artist: "pom",
        title: "two",
        year: "2020"
    },
    {
        id:'2',
        artist: "pom",
        title: "down the rabbit hole",
        year: "2018"
    },
    {
        id:'3',
        artist: "blondes",
        title: "crybaby",
        year: "2020"
    }
];

app.get('/all', (req,res)=> {
    res.json(songs)
});


app.get('/artist/:artistName', (req,res)=> {
    const matchingArtist = songs.filter ( song => song.artist.toLowerCase() == req.params.artistName);
    res.json(matchingArtist);
});

app.get('/artist/:artistName/song/:songName', (req,res)=> {
    const matchingArtist = songs.filter ( song => song.artist.toLowerCase() == req.params.artistName);
    const matchingSongs = matchingArtist.filter ( song => song.title.toLowerCase() == req.params.songName);
    res.json(matchingSongs);
});

app.get('/before/:before', (req,res)=> {
    matchingYear = songs.filter ( song => song.year.toLowerCase() < req.params.before);
    res.json(matchingYear);
});

app.get('/after/:after', (req,res)=> {
    const matchingYear = songs.filter ( song => song.year.toLowerCase() >= req.params.after);
    res.json(matchingYear);
});


app.listen(8080);