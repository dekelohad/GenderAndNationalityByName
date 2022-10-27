# Nationality and Gender By name

The application allows users to find out the nationality and gender of people by first name.
 
 
## Technologies:
React ,Redux Toolkit, Node.js, Express.js.


## API routes:

### The API contains 1 route
  *	GET api/users/:userName - get user nationality and gender by userName.


### The Client consist of 4 pages:

1.  404 Error Page:
    *	If the user tries to go to an undefined route, he will be redirected to the 404 error page, which allows him to redirect to the home page.

2.  Home Page:
     * Contains a form that allows the user to add a new user to the AllUsers Page table.

3.  AllUsers Page:
     *	Shows all previously fetched users in the table.<br>

The app state is managed by Redux Toolkit and we persist the state using redux-persist , the state is consists of 1 slice: the userSlice. 
The asynchronous parts of the app are managed by redux-thunk.


## Getting started

### How to run the Server Side?
 
```
$ git clone https://github.com/dekelohad/GenderAndNationalityByName.git
cd GenderAndNationalityByName
$ npm install
$ npm run server
navigate to http://localhost:5000
```


### How to run the  Client Side?

```
$ open a new terminal
$ cd GenderAndNationalityByName/client
$ npm install
$ npm start
navigate to http://localhost:3000
 ```

 
 
 


 
