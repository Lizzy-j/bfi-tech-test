const moviesList = require('./array.json')

function organizeMovieData(movieData) {
  const updatedMovieList = {};

  for (const [name, [role, title]] of Object.entries(movieData)) {
    if (role === 'director') {
      updatedMovieList[title] = { 
        ...updatedMovieList[title], 
        director: [name] 
      };
    } else if (role === 'cast') {
      updatedMovieList[title] = {
        ...updatedMovieList[title],
        cast: [...(updatedMovieList[title]?.cast || []), name],
      };
    }
  }

  return updatedMovieList;
}

console.log(organizeMovieData(moviesList))

module.exports = organizeMovieData
