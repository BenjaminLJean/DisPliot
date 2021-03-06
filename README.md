# Project Overview

## Project Name

DisPliot

## Project Description

In this project, its going to be a typing test that pulls pokemon, moves, locations, items, and different things that are associated from the pokemon universe and display them inside of a text box that you'll see. There will be a time limit of one minute and the person has to type as many words as they can within the minute and they will be notified on how many words per minute they can type. 

## API and Data Sample

Specify the API you are using and include a link. Show us a snippet of JSON returned by your API so we know you can access it and get the info you need

PokiAPI

pokemon?limit=100&offset=50


    "count": 1118,
    "next": "https://pokeapi.co/api/v2/pokemon?offset=60&limit=10",
    "previous": "https://pokeapi.co/api/v2/pokemon?offset=40&limit=10",
    "results": [
        {
            "name": "dugtrio",
            "url": "https://pokeapi.co/api/v2/pokemon/51/"
        },
        {
            "name": "meowth",
            "url": "https://pokeapi.co/api/v2/pokemon/52/"
        },
        {
            "name": "persian",
            "url": "https://pokeapi.co/api/v2/pokemon/53/"
        },
        {
            "name": "psyduck",
            "url": "https://pokeapi.co/api/v2/pokemon/54/"
        },
        {
            "name": "golduck",
            "url": "https://pokeapi.co/api/v2/pokemon/55/"
        },
        {
            "name": "mankey",
            "url": "https://pokeapi.co/api/v2/pokemon/56/"
        },
        {
            "name": "primeape",
            "url": "https://pokeapi.co/api/v2/pokemon/57/"
        },
        {
            "name": "growlithe",
            "url": "https://pokeapi.co/api/v2/pokemon/58/"
        },
        {
            "name": "arcanine",
            "url": "https://pokeapi.co/api/v2/pokemon/59/"
        },
        {
            "name": "poliwag",
            "url": "https://pokeapi.co/api/v2/pokemon/60/"
        }
    ]
}



## Wireframes

Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.

https://www.figma.com/file/9CkN3BfpAExPernYFYdT5H/Untitled?node-id=0%3A1


#### MVP 

- Access the pokeapi and be able to use different sources for words.
- Input the words into a scrambler to randomize them and put them back into a container.  
- create the timer for the test
- make a restart function that allows the user to restart the game
- create a results function that returns the words typed within that minute. 
- create basic layout of text box html
- create result box
- create welcome

#### PostMVP  

- Add second API(Maybe)
- random information about marvel at the bottom near result. 
- find a way to store data and list it up on previous attempt.
- highlighting the current word that your on. 
- make a rank system thats poki-type based. (only after everything else)

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|August 30| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|August 30| Project Approval | Complete
|August 31| Creating the test (JavaScript) | Complete
|September 1| Styling the HTML and a bit of css | Complete
|September 2| Getting the flexcode nice/dandy | Complete
|September 2| MVP and PostMVP recheck | Complete
|September 3| Presentations | Complete

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

https://www.figma.com/file/nmOOVi5ZB5wqwQ2xU3XXHa/impooootanse?node-id=0%3A1

## Timeframes

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Creating randomizer | H | 2hrs| 3hrs |
| Creating text box | H | 3hrs| 3hrs |
| Making Timer | H | 1hrs| 2.5hrs |
| Returning results | H | 2hrs| 3hrs |
| Creating reset | H | 2.5hrs| 3hrs |
| CSS/Flexbox | H | 3hrs| 4hrs |
| HTML | H | 2.5hrs| 1.5hrs |
| Welcome/Introduction | M | 1hrs| 0.5hrs |
| Adding random facts | L | 2.5hrs| 0hrs |
| Previous attempts | L | 3hrs| 0hrs |
| Input validation | H | 3hrs| 2hrs |
| Highlighting | M | 2.5hrs| 3.5hrs |
| Total | H | 30hrs| 26hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function processCurrentText() {

  current_input = input_area.value;
  current_input_array = current_input.split("");
  characterTyped++;
  errors = 0;
  quoteSpanArray = quote_text.querySelectorAll("span");
  quoteSpanArray.forEach((character, index) => {

   ...
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
```
async function getPokemonName() {
  try {
    const res = await axios.get(`${url}${randomNum()}`);
    console.log(res.data.name);
    quotes_array.push(res.data.name);
    quotes_array.push(res.data.types[0].type.name)
  } catch (error) {
    console.log(error);
  }

}

async function getPokemonType() {
  try {
    const res = await axios.get(`${url}${randomNum()}`);
    console.log(res.data.types[0].type.name);
    quotes_array.push(res.data.types[0].type.name)
  } catch (error) {
    console.log(error);
  }

}
```