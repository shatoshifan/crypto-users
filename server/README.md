# Summary

The API was built with Express, MongoDB and Mongoose. I would consider potentially moving to NexJS API functionality, but there is also a good argument to keep it seperate and utilize a more micro-service archticture, with the API self contained.

## Instructions

```bash
# install all dependencies with
yarn
# or npm if you prefer
npm install
# to startup the server
yarn start
# npm if you like
npm start
```

### Next Steps

The credentials for the API should be moved to env variables or some other solution. I have kept it simple for the purposes of this assignment and assigned read-only access to the user that is accessing the database.

### Limitations

The database will handle 200k records and as it is noSQL. To accomodate a larger dataset than the example provided, the API will need some modifications, as well as the front end. You can add parameters like offset and limit, and you can leverage some MongoDB functionality as well to reduce the amount of records being returned. For the purposes of this assignment, I have left these additions out of scope and would rank them as high priority on the backlog for an upcoming sprint.
