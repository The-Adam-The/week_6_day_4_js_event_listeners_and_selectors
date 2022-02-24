// console.log('App loaded', window);


//Need to wait for DOM content to load before applying the callback
//DOMContentLoaded is an actual event
document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('h1');
    title.textContent = 'Harry Potter and The Insider Trading on Wall Street';

    const welcomeParagraph = document.querySelector('#welcome-paragraph');
    console.log(welcomeParagraph);

    //change .blue>li text
    const blueElementText = document.querySelector('li.blue');
    blueElementText.textContent = 'Test sentence to differentiate class and viewable text.'

    //will return the first 'blue' element as a html element
    const blueElement = document.querySelector('.blue');
    console.log(blueElement);
    
    //will return just the textcontent
    console.log(blueElement.textContent);

    //console.dir() shows javascript information on an object
    console.dir(blueElement);

    //select an element and add
    const redLiElement = document.querySelector('li.red');
    redLiElement.classList.add('bold');
    console.dir(redLiElement);

    //will return all '.red' elements -- returns a NodeList
    const allRedElements = document.querySelectorAll('.red');
    console.log(allRedElements);

    //will return all 'li' elements -- returns a NodeList
    const allLiElements = document.querySelectorAll('li');
    console.log(allLiElements);

    // creating a new li element
    const newListItem = document.createElement('li');
    newListItem.textContent = 'Purple';
    newListItem.classList.add('purple');

    // append new <li> element to the ul
    const list = document.querySelector('ul');
    list.appendChild(newListItem);

});