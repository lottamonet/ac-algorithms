/*1) Add a script tag to the bottom of the page for your code.
2) Add an event listener to the button so that it calls a makeMadLib function when clicked.
3)In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Laura really likes pink cucumbers.") -->

Bonus: Make an object with the list elements as keys and the inputs as values.*/

function makeMadLib(e){
    e.preventDefault();
    let noun = $("#noun").val();
    let adjective = $("#adjective").val();
    let person = $("#person").val();
    let story = person + " really likes " + adjective + " " + noun + ".";
    $("#story").append("<p>" + story + "</p>")
    let obj {
        noun: noun,
        adjective:
    }
}



$("#lib-button").on("click", function(e){
    makeMadLib(e);
});