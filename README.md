# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > The module that contains the code is Kids.js. The algorithm is first deciding what item was clicked and comparing it's data-type to the string "child." When this is true, a name and a wish are accessed using it's dataset and the window alert appeared with its information.
2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > The find `findCelebrityMatch()` function is invoked inside the for..of loop to be sure that the matching information is displayed between the kids, celebrity, sport, and wish.
3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > The name of the sport that the celebrity plays can be displayed by accessing the assigned dataset or accessing the property '.sport' from the database(structed clone that is imported).
4. Can you describe, in detail, the algorithm that is in the `main` module?
   > Line 5 selects an element with the id "element" using a query selector. it is then assigned to the varible "mainContainer".
   Line 7 is a series of html syntax including invocations of the kids, clebrities, and pairings functions defining "applicationHTML".
   Line 26 then sets the inner html of the container element to be equal to applicationHTML thus registering it our html to the DOM.

