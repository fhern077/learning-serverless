##  TODO API Function

This function take in http request params from api-gateway and process does params to return todo list
response items

1. build the function with ```yarn build``` this exports the js to the dist folder
2. stand up the function with ```yarn dev``` this will set the function to listen on 4500
3. curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://localhost:4500/api


## Learnings
typescript output directory was incorrect due to not setting a root path
Configured event_context to have path params specified in the the todo function
```
  todos:
    handler: dist/api/todos.handler
    events:
      - http: GET /todos
  todo:
    handler: dist/api/todo.handler
    events:
      - http:
          path: /todo/{id}
          method: GET
          request:
            parameters:
              id: true
```
