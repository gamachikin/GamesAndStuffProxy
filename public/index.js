const setObj = function (key, obj) {
    localStorage.setItem(key, JSON.stringify(obj))
}
const getObj = function (key) {
    return JSON.parse(localStorage.getItem(key))
}

if (localStorage.getItem("theme")) {
    document.body.setAttribute("theme", localStorage.getItem("theme"))
} else {
    document.body.setAttribute("theme", "main")
}

if (localStorage.getItem("theme")) {
    document.body.setAttribute("theme", localStorage.getItem("theme"))
}
console.log(localStorage.getItem("theme"))

// Function to change the tab title
function changeTabTitle(newTitle) {
    document.title = newTitle;  // Change the title of the current tab
    localStorage.setItem('tabTitle', newTitle);  // Store the tab title in local storage
}

// Function to change the favicon
function changeFavicon(faviconUrl) {
    var favicon = document.querySelector('link[rel="shortcut icon"]');
    if (favicon) {
        favicon.href = faviconUrl;  // Change the favicon of the current tab
        localStorage.setItem('faviconUrl', faviconUrl);  // Store the favicon URL in local storage
    }
}

// Check if there are stored values for tab title and favicon and apply them
window.onload = function() {
    var storedTitle = localStorage.getItem('tabTitle');
    var storedFaviconUrl = localStorage.getItem('faviconUrl');
    
    if (storedTitle) {
        changeTabTitle(storedTitle);
    }
    
    if (storedFaviconUrl) {
        changeFavicon(storedFaviconUrl);
    }
};

// Function to change the tab title
function changeTabTitle(newTitle) {
    document.title = newTitle;  // Change the title of the current tab
    localStorage.setItem('tabTitle', newTitle);  // Store the tab title in local storage
}

// Function to change the favicon
function changeFavicon(faviconUrl) {
    var favicon = document.querySelector('link[rel="shortcut icon"]');
    if (favicon) {
        favicon.href = faviconUrl;  // Change the favicon of the current tab
        localStorage.setItem('faviconUrl', faviconUrl);  // Store the favicon URL in local storage
    }
}

// Check if there are stored values for tab title and favicon and apply them
window.onload = function() {
    var storedTitle = localStorage.getItem('tabTitle');
    var storedFaviconUrl = localStorage.getItem('faviconUrl');
    
    if (storedTitle) {
        changeTabTitle(storedTitle);
    }
    
    if (storedFaviconUrl) {
        changeFavicon(storedFaviconUrl);
    }
};
function debug() {
  console.log(getObj('customapps'))
}

function clearcustomapps() {
  setObj('customapps', [])
  console.log('Removed all custom apps!')
  window.location.reload()
}

function clearcustomgames() {
  setObj('customgames', [])
  console.log('Removed all custom games!')
  window.location.reload()
}
function loadcustomgame() {
  if (!getObj('customgames')) {
    setObj('customgames', [])
  }
  var name = prompt('What should this game be named? (required)')
  var url = prompt("What's this game's url? (required)")
  var icon = prompt("What's this game's icon? (optional)")
  var description = prompt("What's this game's description? (optional)")

  if (!name || !url) return alert('All required fields must be filled in')
  if (name.length > 15) return alert('Game name is too long (max 30 characters)')

  fetch('https://www.uuidtools.com/api/generate/v4')
    .then((response) => response.json())
    .then((data) => {
      var customgames = getObj('customgames') || []
      customgames.push(JSON.parse(`{ "title": "${name} (Custom game)", "url": "${url}", "id": "${data[0]}", "image": "${icon}", "description": "${description}" }`))
      console.log(customgames)
      setObj('customgames', customgames)

      console.log(getObj('customgames'))
      //window.location.href = self.location
    })
}
