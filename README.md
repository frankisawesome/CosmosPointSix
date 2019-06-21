## Development

Cosmos Point Six is a MERN stack 'hello world' like project developed by Frank Li in collaboration with Sebastian Muir-Smith. The app is a simple message board app, allowing users to post whatever string and get the top ten most popular strings from the database. The front end uses react, is coded in the latest functional component + react hooks style. The backend uses express + node, to achieve a simple API with /new and /get endpoints. Mongoose is used for database queries and connection.

## Deployment

Cosmos Point Six is deployed using the Microsoft Azure platform. The database is the Cosmos DB with MongoDB API, which requires a simple setup process and is fairly robust. The front end is being displayed as part of the express server using express.static() middleware. The backend code is then deployed to Azure via github. The npm start script includes scripts to install all required modules then run the app.js as the entrypoint.

## About Us

Me (Frank Li) and Sebastian are both second year Math/IT students at QUT, and this is our first attempt at developing and deploying a 'full stack' web project.


