function myMenu() {
    var element = document.getElementById("navigationbar");
    if (element.className === "nav-bar") {
        element.className += " responsive";
    } else {
        element.className = "nav-bar";
    }
  }