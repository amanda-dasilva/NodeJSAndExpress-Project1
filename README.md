

<img width="150px" src="https://www.nscc.ca/img/aboutnscc/visual-identity-guidelines/artwork/nscc-jpeg.jpg" >  
  

# WEBD 1000 - Assignment 2 

##  Module 2: Server-side JS
 
### Instructions:  

- Clone this repository to your local machine, make the required changes in the cloned folder, and **commit & push** the entire folder up to GitHub 
- You must ensure that your solution has been pushed to GitHub in order to get credit for the assignment.  

### Preliminary Step:

You should have completed Assignment 1 and already built a front-end on top of a chosen API from the list of publicly available APIs listed at [https://github.com/toddmotto/public-apis](https://github.com/toddmotto/public-apis).


### Tasks:  

#### Part 1

 1. Copy your Assignment One code into the front-end folder of this repository. **The front-end should not need to be modified for this part of the assignment, other than changing the URL of the API to point to your own back-end API (see below)**. 

 2. In the back-end folder of this repository, do the following:

	a. Build your own Node/Express API to simulate the API that you chose in Assignment 1.

	b. The API should be built upon an SQLite database that you populate with "dummy data" to simulate the data returned by the original API. The dummy data could be copied from the API's data, but **it should somehow be clear that the data is coming from your own API**. Perhaps put a suffix or prefix within one field in the database to show that it is coming from your own API.

	c. If the original API gave you image links, you might want to store a few of those image links in your SQLite database to see the same images or you can simply use the URL's of any online sample images.

	d. As we were simply displaying data from the API before, we will not need full CRUD operations, simply READ operations. However, the goal is not to change the front end so you will want to emulate the structure of the original API's JSON objects so that the front-end will display the data correctly.

	 e. Make sure to add a .gitignore file to exclude all node modules from git so that your Express module and all its dependencies do not get stored in git.

	f. Make sure that your SQLite database file, populated with sample data, is committed to GitHub along with your code.

	g. You should have a package.json file listing all required back-end node module requirements.

#### Part 2

1. Once Part 1 is complete, we are going to modify the front-end at least as far as styling is concerned.

2. Add Bootstrap to your front-end and experiement with Bootstrap table styling to make your table of API data look better. For help with Bootstrap table styling, refer to: [Tables - Bootstrap v4.6](https://getbootstrap.com/docs/4.6/content/tables/)

3. Make sure that all the work as successfully committed and pushed to GitHub to submit this Assignment.

> Written with [StackEdit](https://stackedit.io/).  
