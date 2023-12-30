var target = document.getElementById("myDiv");
target.innerHTML += `    <!-- Add Bootstrap Navbar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <!-- Your Site Name -->
    <a class="navbar-brand" href="index.html">Manjunatha M R Name</a>

    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="index.html">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="writing.html">Writing</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="mathematics.html">Mathematics</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="photography.html">Photography</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="drawing.html">Drawing</a>
            </li>
        </ul>
    </div>
</nav>`;
