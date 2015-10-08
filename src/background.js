/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('./views/index.html', {
    id: 'main',
    bounds: { width: 620, height: 500 }
  });
});

chrome.app.window.create('./views/index.html', {
  id: 'main',
  bounds: { width: 620, height: 500 }
});

 $("body").append('Test');
