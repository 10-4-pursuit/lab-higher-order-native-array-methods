/**
 * Returns the song "Pink Elephants" from the song array, if it is in the array.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object} A single object or undefined if not found.
 */
function findPinkElephantsByTimestreet(songs) {
  return songs.find((song) => song.title === "Pink Elephants" && song.artist === "Timestreet");
}

/**
 * Returns the first song in the list that is under three minutes.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object} A single object or undefined if not found.
 */
function findFirstSongUnderThreeMinutes(songs) {
  return songs.find((song) => song.runtimeInSeconds < 180); // Assuming runtimeInSeconds is in seconds
}

/**
 * Returns the first song in the list where the song title equals the song album.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object} A single object or undefined if not found.
 */
function findFirstTitleTrack(songs) {
  return songs.find((song) => song.title === song.album);
}

module.exports = {
  findPinkElephantsByTimestreet,
  findFirstSongUnderThreeMinutes,
  findFirstTitleTrack,
};
