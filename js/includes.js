//Loads common elements when page is loaded.
(function() {
    var loadIncludes = function() {
        $("#navigation").load("navigation.html"); //The div to replace followed by the name of the file to replace it with
    };
    $(document).ready(function() {
        loadIncludes();
    });
})();