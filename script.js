'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false
};

const a = prompt('Один из последних просмотренных фильмов?', '');
const b = prompt('На сколько оцените его?', '');
const c = prompt('Один из последних просмотренных фильмов?', '');
const d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

/* console.log(JSON.stringify(personalMovieDB)); */
console.log(personalMovieDB);

/* const test = {
	a: 1,
	b: 2,
	c: 3,
	d: {
		e: 4,
		f: 5
	}
};

console.log(test); */


