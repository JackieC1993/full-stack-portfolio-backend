Welcome to the Backend DimSums Repository

<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiMtsjCPVSK9xtfYiWPb2QFN0C8uq6W4pBzw&usqp=CAU" width="300">

Dimsums Backend Repository Structure:
Folder Structure:
src/: Contains the source code for the backend.
config/: Configuration files for the database, environment variables, etc.
controllers/: Controllers handling the business logic for Dimsums and Reviews.
db/: Database-related files, including models and migrations.
middleware/: Custom middleware functions.
routes/: API routes for Dimsums and Reviews.
tests/: Unit tests, integration tests, or end-to-end tests.
app.js: Entry point for the Express.js application.


package.json: Lists project dependencies and scripts.
package-lock.json or yarn.lock: Lock file specifying dependency versions.
.env: Environment variables file (not in the repository; developers create their own copy).
Configuration:

config/database.js: Database connection configuration.
config/env.js: Environment-specific configuration.
Database:

db/models/Dimsum.js: Sequelize model for Dimsum entities.
db/models/Review.js: Sequelize model for Review entities.

routes/dimsums.js: Express.js routes for Dimsums.
routes/reviews.js: Express.js routes for Reviews.
Controllers:

controllers/dimsumsController.js: Logic for handling Dimsum-related operations.
controllers/reviewsController.js: Logic for handling Review-related operations.
Middleware:

Documentation:

README.md: Instructions for setting up and running the backend.

Git Clone this repository: https://github.com/JackieC1993/full-stack-portfolio-backend.git
Cd to this repository: https://github.com/JackieC1993/full-stack-portfolio-backend.git
npm install express @4
npm install pg-promise
npm install morgan
npm install cors 

check nodemon server.js









Open in Browser:
Open your web browser and navigate to http://localhost:8888.

Now, you should be able to use your dimsums app. The app is set up with basic CRUD operations for dimsums and reviews.

/dimsums: View a list of dimsums.
/dimsums/new: Add a new dimsum.
/dimsums/:id: View details of a specific dimsum.
/dimsums/:id/edit: Edit a specific dimsum.
