/**
 * Reorders the array so that the song objects are organized by their runtime. The shortest song should come first.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortByRuntimeAscending(songs) {
  // Sort the songs array in ascending order of runtimeInSeconds
  return songs.slice().sort((a, b) => a.runtimeInSeconds - b.runtimeInSeconds); // Assuming runtimeInSeconds is in seconds
}

/**
 * Reorders the array so that the song objects are organized by their artist name. The artist that comes last in the alphabet should come first.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortByArtistNameDescending(songs) {
  // Sort the songs array in descending order of artist names
  return songs.slice().sort((a, b) => b.artist.localeCompare(a.artist));
}

/**
 * Reorders the array so that the song objects are organized by their song title. The title that comes first in the alphabet should come first.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortBySongTitleAscending(songs) {
  // Sort the songs array in ascending order of song titles
  return songs.slice().sort((a, b) => a.title.localeCompare(b.title));
}

module.exports = {
  sortByRuntimeAscending,
  sortByArtistNameDescending,
  sortBySongTitleAscending,
};
