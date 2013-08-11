/*! rodrigobraga.github.io - v1.0.0 - 2013-08-08
* Copyright (c) 2013 ; Licensed  */
'use strict';

function foo () {
    /// documentation
    console.log("Bar");
}

foo();
var menu = { "home": "#/home", "access": "#/access"},
    version = "1.0.0";

function header () {
    var message = menu + " -- " + version;

    console.log(message);
}

header();