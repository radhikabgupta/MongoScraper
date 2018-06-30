# MongoScraper

The application will let the user scrape news articles from New York Times website. When the user clicks on Scrape Article button a certain amount of articles will get displayed as a card with the following information Title, Link to the Article from New York Times on the web page.

The user can save the article by clicking on Save Article button. The saved article can be viewed by clicking on Saved Article link present in the Navbar.

A note can be created in the saved article by clicking on Create Notes button. Once the button is clicked a modal will get displayed for the user to create a note. As many number of notes can be created for a particular article, and the note is displayed for all the users who wants to view the note. A note can be deleted by clicking on the delte button on the side of the note.

## Technologies Used
- Node.js
- MongoDB/ Mongoose
- cheerio NPM Package
- request NPM Package
- express NPM Package
- body-parser NPM Package

## Screenshots
![Overview](https://github.com/radhikabgupta/MongoScraper/blob/master/public/assets/img/sp-01.jpg)

This app uses Cheerio to scrape the New York Times articles:
![Overview](https://github.com/radhikabgupta/MongoScraper/blob/master/public/assets/img/sp-02.jpg)

![Overview](https://github.com/radhikabgupta/MongoScraper/blob/master/public/assets/img/sp-03.jpg)

<br/>Users can click on the link to take them to the corresponding NYT article, or click the 'Save Article' button to save the article:<br/>
![Overview](https://github.com/radhikabgupta/MongoScraper/blob/master/public/assets/img/sp-04.jpg)

<br/>Once an article is saved, the user has the option to add their own notes to the articles, or to remove them:<br/>
![Overview](https://github.com/radhikabgupta/MongoScraper/blob/master/public/assets/img/sp-05.jpg)

<br/>The user can also delete notes that are no longer needed by clicking on the 'X':<br/>
![Overview](https://github.com/radhikabgupta/MongoScraper/blob/master/public/assets/img/sp-06.jpg)

## Installation
- clone the repository
- change into the new directory
- npm install

## Running
- node server.js

## Assignment Instructions
[Week-18 Assignment Instructions](https://github.com/radhikabgupta/MongoScraper/blob/master/homework_instructions.md)
