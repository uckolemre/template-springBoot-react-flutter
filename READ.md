# Server

For build and run

cd /backend

mvnw clean install

cd target

java -jar payday-0.0.1-SNAPSHOT.jar

Server run on 8080

## Reast API with h2(embed database)

Get Token => default username admin@example.com password=12345
```
curl -X POST http://localhost:8080/authenticate -H "Content-Type:application/json" -d "{\"username\":\"admin@example.com\", \"password\":\"12345\"}"

{
  "token" : "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImlhdCI6MTUyNDY0OTI4OSwiZXhwIjoxNTI0NjUyODg5fQ.Lj1w6vPJNdJbcY6cAhO3DbkgCAqpG7lzztzUeKMyNyE"
}
```

After rest request must be following wiht headers
```
curl -X GET http://localhost:8080/me -H "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImlhdCI6MTUyNDY0OTI4OSwiZXhwIjoxNTI0NjUyODg5fQ.Lj1w6vPJNdJbcY6cAhO3DbkgCAqpG7lzztzUeKMyNyE"
```
### Rest API URLS

#### Getmethod(token is necessary)

http://localhost:8080/get-user 

http://localhost:8080/getAll-products

#### Postmethod(token is necessary)

http://localhost:8080/save-user => body {id:'',name:'',price:'',available:'',description:''}

http://localhost:8080/save-product => body {id:'',fullname:'',email:'',title:''}


# Web Client (react)

cd client/web-react

npm install

npm run start => defaul port 3000

You can check http://localhost:3000

![React Examples](/images/react1.png)

![React Examples](/images/react2.png)

![React Examples](/images/react3.png)

![React Examples](/images/react4.png)
