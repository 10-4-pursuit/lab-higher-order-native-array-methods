/**
 * Returns an array of all of the song titles.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {string[]} An array of strings, all of which are song titles.
 */
function getSongTitles(songs) {
  return songs.map((song) => song.title);
}

/**
 * Returns an array of all of the song titles with the artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {string[]} An array of strings, all of which are in the format "<TITLE> by <ARTIST>".
 */
function getSongDetails(songs) {
  return songs.map((song) => `${song.title} by ${song.artist}`);
}

/**
 * Returns an array of objects, where each object has a key that is the song title and has a value that is the song artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 */
function getTitleAndArtist(songs) {
  return songs.map((song) => ({
    [song.title]: song.artist,
  }));
}

module.exports = {
  getSongTitles,
  getSongDetails,
  getTitleAndArtist,
};
