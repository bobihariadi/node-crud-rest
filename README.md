## content
express-session

basic-auth

bearer-auth(jwt)

## To install this project

npm install

### run this project

`yarn start`

### rest api with basic and bearer auth

username : admin

password : 123

## url postman
#### to get jwt token for bearer (no auth)
http://localhost:3000/v1/register

header

key : Content-Type

value : application/json


body

{
    "name"      : "Bobi",
    "email"     : "bobihariadi@gmail.com",
    "password"  : "123456"
}


#### bearer sample url, method GET
http://localhost:3000/bearer/people

#### basic sample url, method GET
http://localhost:3000/basic/people

#### basic sample url with params id, method GET
http://localhost:3000/basic/people/1