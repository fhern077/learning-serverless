##  TODO API Function

This function takes the event from the event.json and passes it to the handler function that is exported from ```helloworld.ts```.

1. build the function with ```yarn build``` this exports the js to the dist folder
2. stand up the function with ```yarn dev``` this will set the function to listen on 4500
3. curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://localhost:4500/api
