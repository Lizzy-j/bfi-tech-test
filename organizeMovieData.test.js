const moviesList = require('./array.json');
const organizeMovieData = require('./organizeMovieData')

describe('organizeMovieData', () => {
	it('organizes movie data correctly', () => {
		const result = organizeMovieData(moviesList)

		expect(result).toEqual({
			'Once Upon a Time...in Hollywood': {
				cast: ['Brad Pitt', 'Leonardo DiCaprio', 'Margot Robbie'],
				director: ['Quentin Tarantino'],
			},
			Goodfellas: {
				cast: ['Ray Liotta', 'Robert De Nero', 'Joe Pesci'],
				director: ['Martin Scorsese'],
			},
			'The Wild Bunch': {
				cast: ['William Holden', 'Ernest Borgnine', 'Robert Ryan'],
				director: ['Sam Peckinpah'],
			},
		});
	});
});


