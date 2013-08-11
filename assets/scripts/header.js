var menu = { "home": "#/home", "access": "#/access"},
    version = "1.0.0";

function header () {
    var message = menu + " -- " + version;

    console.log(message);
}

header();