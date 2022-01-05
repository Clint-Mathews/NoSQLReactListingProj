# Restaurant Listing

Listing of restaurants using Astra NoSQL DB and react + express for FE and BE.

To Run the project  : 
FE side : yarn start:front
BE side: yarn run start:back
## Tech Stack
React,
Express,
Astra NoSQL DB 

## Env update needed
For the Application to work you need to create a local .env file and add Three keys :
<br />
ENDPOINT - which is the url endpoint to document api from Astra
<br />
ASTRA_TOKEN - token generated for the API call to work
<br />
REACT_APP_PORT - port to run the server
<br />
<br />
DocumentAPI is being used for API calls to make this work you will need to create a Database and schema in Astra. Create a collection and add hotel documents against it using swagger from the doucment API in Astra.
