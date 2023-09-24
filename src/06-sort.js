/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Reorders the array so that the song objects are organized by their runtime. The shortest song should come first.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortByRuntimeAscending(songs) {
 // Using the sort method with a custom comparison function
 songs.sort((a, b) => a.runtimeInSeconds - b.runtimeInSeconds);
 return songs;
}

/**
 * Reorders the array so that the song objects are organized by their artist name. The artist that comes last in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortByArtistNameDescending(songs) {
  // Using the sort method to reorder the songs array by artist name in descending order
  return songs.sort((a, b) => {
    const artistA = a.artist.toLowerCase();
    const artistB = b.artist.toLowerCase();
    
    // Sorting artistA before artistB
    if (artistA > artistB) return -1; 
    // Sorting artistB before artistA
    if (artistA < artistB) return 1;  
     // If Artists are equal, maintain the order
    return 0; 
  });
}

/**
 * Reorders the array so that the song objects are organized by their song title. The title that comes first in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortBySongTitleAscending(songs) {
  // Using the sort method to reorder the songs array by song title in ascending order
  return songs.sort((a, b) => {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();
    
    // Sorting titleA before titleB
    if (titleA < titleB) return -1; 
     // Sorting titleB before titleA
    if (titleA > titleB) return 1;  
    // If Titles are equal, maintain the order
    return 0; 
  });
}

module.exports = {
  sortByRuntimeAscending,
  sortByArtistNameDescending,
  sortBySongTitleAscending,
};
