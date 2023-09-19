/**
 * Logs out all of the song titles.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 */
function printAllSongTitles(songs) {
  songs.forEach((song) => {
    console.log(song.title);
  });
}

/**
 * Logs out the song title and song artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 */
function printSongDetails(songs) {
  songs.forEach((song) => {
    console.log(`${song.title} by ${song.artist}`);
  });
}

/**
 * Logs out all of the song titles which have a runtime over three minutes.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 */
function printSongTitlesOverThreeMinutes(songs) {
  songs.forEach((song) => {
    if (song.runtimeInSeconds > 180) { // Assuming runtimeInSeconds is in seconds
      console.log(song.title);
    }
  });
}

module.exports = {
  printAllSongTitles,
  printSongDetails,
  printSongTitlesOverThreeMinutes,
};
