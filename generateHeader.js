var target = document.getElementById("myDiv");
target.innerHTML += `<header> <h1>Ink into Black Black Into Ink</h1> <div class='menu-icon' onclick='toggleMenu()'>☰</div> <nav id='main-menu'> <ul id='dropdown-menu'> <li><a href='index.html'>About</a></li> <li><a href='writing.html'>Writing</a></li> <li><a href='mathematics.html'>Mathematics</a></li> <li><a href='photography.html'>Photography</a></li> <li><a href='drawing.html'>Drawing</a></li> </ul> </nav> <nav> <ul> <li><a href='index.html'>About</a></li> <li><a href='writing.html'>Writing</a></li> <li><a href='mathematics.html'>Mathematics</a></li> <li><a href='photography.html'>Photography</a></li> <li><a href='drawing.html'>Drawing</a></li> </ul> </nav> </header> `;

// Define toggleMenu globally
function toggleMenu(){
    var menu = document.getElementById('dropdown-menu');
    menu.style.display ='block'
  }

