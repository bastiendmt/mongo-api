# mongo-api
A simple API made with Node Express and mongoDB

## Setup
``` 
docker pull mongo
docker run --name my_mongo -d -p 127.0.0.1:27017:27017 mongo
yarn run watch
```

## Endpoints
- Get all books
```GET /books ```

- Get a specific book
```/book/:id (get)```

- Add a book
```/book (put)```

with a json body of type 
{"title" : "some title", "author" : "a famous author"}

- Delete a book 
```DELETE /book/:id ```

- Update a book
``` POST /book/:id ```
