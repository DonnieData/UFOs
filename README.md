# UFOs
Building a dynamic webpage to filter and display data  using JavaScript.

## Resources 
- Javascript ES5, HTML, VS Code 1.51.1
- [D3.js](https://d3js.org/) JavaScript library 


## Overview 
The purpose of this project is to build a dynamic web application by utiling javascript and html. 

### Components  
#Data 
[The data]() that is parsed and displayed via the web page is in JSON format.

### JavaScript 
A JavaScript script is created to parse the data and interact with the html web page using the D3 library. This library allows the script to detect on the user-end, such as text input and take specific action. In this case such action is to filter our data based on the criteria which is the users search input. 

###TML 
HTML code is built-out to create structure and userend interface for the web application. The necessary links and tags are also incorporated into the html to allow the javascript script to work in conjuction. 

## Results
Combining the main components allows a web page to be rendered in which data can be transformed and cleanly displayed within a table. 
The JavaScript aspects allow users to have the ability to filter "back-end" data through the web page. 

Users can input a search criteria on the web page within the fields shown below. 
The web page is able to filter by single parameter or multipe, returning the results (rows of data) that meet the provided paramters. 

ex. to searching for UFO sighting occurences by date -- simply enter the desired date in 00/00/0000 format. 
![search]()


## Summary 
Upon full deployment of the web application, I find there to be a drawback in which data is provided in the back-end. 
A great future update may include a script to get "live data" or a method of scraping data so that new data is easily and effincently added. 



