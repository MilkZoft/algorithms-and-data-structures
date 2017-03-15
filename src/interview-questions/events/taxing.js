/*
 If you were building a search tool and wanted search
 results to pop up as you typed but the server call was taxing,
 write a function that gets called on every key down but calls the server
 when the user stops typing for 400ms.
*/

const searchField = document.getElementById('searchField');
let lastTimeId;

searchField.addEventListener('keydown', (e) => {
  if (typeof lastTimeId !== 'undefined') {
    clearTimeout(lastTimeId);
  }

  lastTimeId = setTimeout(() => {
    // Do search stuff
    console.log(`Do search for ${searchField.value}`);
  }, 400);
});
