enum Status {
  closed = "closed",
  open = "open"
}

export interface ITodoItems {
  id: number;
  name: string;
  status: Status;
}

/**
 * Lambda Handler that will return todoList array
 *
 * @param  {any} _event
 * The incoming message body to the the lambda handler this wil vary by trigger i.e dynamo, http_event, cloud_watch etc
 * @param  {any} _context
 * this contains metadata about the context in * which the function was invoked i.e environment arns etc.
 * @param  {any} done
 * the resolution of the lambda's invocation
 *
 */
export const handler: any = async (_event: any, _context: any, done: any) => {
  const todoItems: ITodoItems[] = [
    {
      id: 0,
      name: "clean up",
      status: Status.open
    },
    {
      id: 1,
      name: "clean up",
      status: Status.open
    },
    {
      id: 2,
      name: "clean up",
      status: Status.open
    }
  ];

  done(null, {
    statusCode: 200,
    body: JSON.stringify({ todoItems })
  });
};
