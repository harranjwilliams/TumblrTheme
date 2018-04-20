(function(root) {

    var ensureString = function(str) {
        return !str ? '' : str;
    };

    var basicVariables = {
      quote : {JSQuote},
      source: {JSSource},
      length: {JSLength}
    };

    root.tumblrData = { basicVariables: basicVariables };

})(this);
