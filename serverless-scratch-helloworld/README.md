## Hello World Function

This function takes the event from the event.json and passes it to the handler function that is exported from ```helloworld.ts```.

1. build the function with ```yarn build``` this exports the js to the dist folder
2. execute the local invocation of the function with ```yarn invoke```

### Learnings
To invoke a function with an event this is the command
```
serverless invoke --function {function_name} --path event_mock.json
```
Checkout the tsconfig.json there were a few nuisances with getting this up &
running   ```"include": ["src/**/*", "src/**/*.json"],```
