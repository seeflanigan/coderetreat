// based on the module pattern explained at
// http://javascriptplayground.com/blog/2012/04/javascript-module-pattern
//
var coderetreat = (function() {
  var getBorn = function () {
    return "Welcome to Life";
  };

  var exist = function() {
    return undefined;
  };

  var stopBreathing = function() {
    return "Farewell, hope you made the most of it";
  };

  return {
    begin: getBorn,
    run: exist,
    end: stopBreathing
  };
})();
