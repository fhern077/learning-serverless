/**
 * Simple lambda handler that will return hello world
 *
 * @param  {any} _event
 * The incoming message body to the the lambda handler this wil vary by trigger i.e dynamo, http_event, cloud_watch etc
 * @param  {any} _context
 * this contains metadata about the context in * which the function was invoked i.e environment arns etc.
 * @param  {any} done
 * the resolution of the lambda's invocation
 *
 *
 */
export const handler: any = async (_event: any, _context: any, done: any) => {
  done(null, _event);
};
