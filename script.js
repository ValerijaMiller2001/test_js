'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false
};


//без цикла
// const a = prompt('Один из последних просмотренных фильмов?', '');
// const b = prompt('На сколько оцените его?', '');
// const c = prompt('Один из последних просмотренных фильмов?', '');
// const d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;






//условие с количеством фильмов
if (personalMovieDB.count < 10) {
	console.log('Просмотрено довольно мало фильмов!');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log('Вы классический зритель!');
} else if (personalMovieDB.count >= 30) {
	console.log('Вы киноман!');
} else {
	console.log('Произошла ошибка!');
}

//первый вариант написания цикла
for (let i = 0; i < 2; i++) {
	const a = prompt('Один из последних просмотренных фильмов?', '');
	const b = prompt('На сколько оцените его?', '');

	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log('done');
	} else {
		console.log('error');
		i--;	
	}
}
console.log(personalMovieDB);


//второй вариант написания цикла
// let  i = 0;
// while (i < 2) {
// 	const a = prompt('Один из последних просмотренных фильмов?', '');
// 	const b = prompt('На сколько оцените его?', '');
// 	i++;
// 	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// 		personalMovieDB.movies[a] = b;
// 		console.log('done');
// 	} else {
// 		console.log('error');
// 		i--;	
// 	}
// }

//третий вариант написания цикла
// let i = 0;
// do {
// 	const a = prompt('Один из последних просмотренных фильмов?', '');
// 	const b = prompt('На сколько оцените его?', '');
// 	i++;

// 	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// 		personalMovieDB.movies[a] = b;
// 		console.log('done');
// 	} else {
// 		console.log('error');
// 		i--;
// 	}
// }
// while (i < 2);