Notes:

Since the web module will be receiving the requests and routing them into the proper processing backend services, such as the OData service you have just defined, it will also be responsible for enforcing authentication.
These routing logics are done by an application called approuter. You can see the Node.js module being called as the starting script for the web module as defined in the file package.json.

The approuter will scan the file xs-app.json to route patterns in the request to the right destinations.