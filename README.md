# Note Taker

[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Project Summary

To modify starter code to create an application called **Note Taker** that can be used to write and save notes. As the frontend has already been created, the project requires building the backend and connecting the two. The whole application is then to be deployed to Heraku.

 *Application to use an Express.js backend and will save and retrieve note data from a JSON file.*

## Packages Used

- Node.js: Executes JavaScript code outside a web browser.
- Express.js: Node.js web application framework providing broad features to build web & mobile applications.                                                                 
- Inquirer: Provides a logical and straightforward way to capture user input in a Node.js command line interface application.
- Fs: A file system module that allows you to work with the file system on your computer.
- NPM uuid 9.0.0: Used to create a random id number for each node.

## Note Taker

The Note Take is an easy to use web application for writing and saving notes; which can also be deleted or cleared before being saved. The application has been purposedly designed to meet several non-functional requirements such as, usability and accessibility. 

By the user clicking on a button named 'Get Started' the application navigates to the home page which consists of two columns. The main area enables the user to enter and save a new note.  On the left is a note history consisting of a list of each note stored in the web application.  Each note is contained in a separate row displaying it's title and a bin icon to delete the note. The user can click on the title to display the note.

Each note created consists of the following properties:
- title.
- text.
- Id number.

## Project Description

The objective of this project was to modify starter code to create an application called Note Taker that can be used to write and save notes using an Express.js back end to retrieve note data from a JSON file. 

The following files were created and code written to achieve the necessary functionality:

**server.js**
- List dependencies.
- Initialize express app.
- Middleware for parsing of JSON data.
- Route middleware.
- Setup Listener.

**htmlRoute.js**
- List dependencies.
- Request to return notes.html.
- Request to return index.html.

**apiRoutes**
- List dependencies.
- Post a new note: 
    - with a unique Id, 
    - save AND,
    - return to client.
- Delete a note:
  - read all notes from db.json file,
  - delete note with given id property,
  - rewrite notes to db.json.

**Note**: A description of how to use the completed web application appears in the 'Usage' section below.

## Installation

To install this application, simply download from Github.

## Usage

An easy to use no fuss note taker with a range of real life uses. 

The following step by step instructions describe how to use the application:

- Upon opening the application the user is presented with a landing page. 

- By clicking on the "start button" the user is presented with the notes page. 

- To add a note the user enters the heading and their text and clicks on the save icon in the top right hand corner of the web page. 

- The title of new note appears in the note history summary list in the left-hand column.

- By clicking on the title listed the note is displayed.

- To delete a note the user clicks on the bin icon next to the note they want to delete. 

- To clear a note without saving the user clicks on the '+' icon in the top right hand corner of the web page.

## Deployed Application and Screenshots

### Link to the deployed application



## Screenshot

**Landing Page**

![image](https://user-images.githubusercontent.com/115671306/219522206-92bcc734-b1f0-4ff0-bc79-91040c4053df.png)



**Main Page**

![image](https://user-images.githubusercontent.com/115671306/219521439-b84f5493-c9e8-4f3e-b0d4-d157fe326f35.png)


## Licence

MIT








