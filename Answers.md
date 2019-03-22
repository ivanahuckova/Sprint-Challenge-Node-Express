- [ ] Mention two parts of Express that you learned about this week.
      _Request and Response. The req object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on. The res object represents the HTTP response that an Express app sends when it gets an HTTP request._

- [ ] Describe Middleware?

  _Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next. So as it name suggests it comes in middle of something and that is request and response cycle.They are invoked by the Express routing layer before the final request handler, and thus sits in the middle between a raw request and the final intended route. A few fine points of terminology around middleware:_

* [ ] Describe a Resource?

  _The fundamental concept in any RESTful API is the resource. A resource is an object with a type, associated data, relationships to other resources, and a set of methods that operate on it._

- [ ] What can the API return to help clients know if a request was successful?

  _HTTP status code and ideally message/error message_

- [ ] How can we partition our application into sub-applications?

  _Express Routers are a way to split an application into sub-applications to make it more modular and easier to maintain and reason about._
