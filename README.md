## content
express-session,
basic-auth,
bearer-auth(jwt)

To install this project

## npm install

run this project

### `yarn start`

rest api with basic and bearer auth

username : admin
password : 123

url postman

http://localhost:3000/people

http://localhost:3000/people/1

# to get jwt token for bearer
http://localhost:3000/register

header
key : Content-Type
value : application/json

body
{
    "name"      : "Bobi",
    "email"     : "bobihariadi@gmail.com",
    "password"  : "123456"
}


to check bearer

http://localhost:3000/me