##  Server-side using NodeJS, Express, and SQLite!
 
### Tasks:  
1. Build my own Node/Express API.
2. The API should be built upon an SQLite database that I'll populate with "dummy data" to simulate the data returned by the original API.
3. The goal is to keep the front end the same so I will want to emulate the structure of the original API's JSON objects so that the front-end will display the data correctly.
4. Make sure to add a .gitignore file to exclude all node modules from git so that my Express module and all its dependencies do not get stored in git.
5. Make sure that my SQLite database file, populated with sample data, is committed to GitHub along with my code.
6. Make sure to have a package.json file listing all required back-end node module requirements.
7. Add Bootstrap to your front-end and experiment with Bootstrap table styling to make your table of API data look better. For help with Bootstrap table styling, refer to: [Tables - Bootstrap v4.6](https://getbootstrap.com/docs/4.6/content/tables/)

### To run this project:
To download this Node.js project with Express from GitHub and run it using Visual Studio Code (VSCode), follow these steps:

1. **Install Node.js and npm:**
   If you haven't already, you need to install Node.js and npm (Node Package Manager) on your computer. You can download them from the official website: [Node.js](https://nodejs.org/).

2. **Install Visual Studio Code:**
   If you don't have VSCode installed, you can download it from the official website: [Visual Studio Code](https://code.visualstudio.com/).

3. **Clone the GitHub Repository:**
   Open your terminal (command prompt or PowerShell on Windows, or Terminal on macOS/Linux) and navigate to the directory where you want to store the project. Then, use the `git clone` command to clone the repository:

   ```bash
   git clone git@github.com:amanda-dasilva/NodeJSAndExpress-Project1.git
   ```

4. **Open the Project in VSCode:**
   Navigate to the project folder in your terminal:

   ```bash
   cd <project-folder>
   ```

   Then, open the project in VSCode:

   ```bash
   code .
   ```

   This command will open VSCode with the project folder loaded.

5. **Install Dependencies:**
   In the VSCode terminal, make sure you are inside the project folder. Then, run the following command to install the project's dependencies specified in the `package.json` file:

   ```bash
   npm install
   ```

6. **Start the Express Application:**
   Once the dependencies are installed, you can start the Express application. Typically, the entry point for a Node.js/Express project is an `app.js` or `server.js` file. Look for this file in your project folder. Then, run:

   ```bash
   node app.js
   ```

   or

   ```bash
   node server.js
   ```

   This will start your Express application, and it should be accessible at `http://localhost:3000` by default.

7. **Access the Application:**
   Open your web browser and navigate to `http://localhost:3000`.

Now you should have this Node.js/Express project from GitHub running in VSCode.

