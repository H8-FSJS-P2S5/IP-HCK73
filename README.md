# IP-HCK73

> Deployment Link: 

# API Documentation

## Endpoints

List of available endpoints:
- `POST /register`
- `POST /login`
- `POST /auth/google`

Routes below need authentication:
- `GET /user`
- `PUT /editProfile`

- `GET /games`
- `POST /games/recommendations`
- `GET /games/:id`

- `GET /favorites`
- `POST /favorites`
- `DELETE /favorites/:id`

## 1. POST /register
Description:
- Register a new user into the system

#### Request:
- body:
```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

*Response (201 - Created)*
```json
{
  "username": "string",
  "email": "string",
}
```

*Response (400 - Bad Request)*
```json
{
  "message": "Email is required"
}
```
OR
```json
{
  "message": "Password is required"
}
```
OR
```json
{
  "message": "Validation error message"
}
```

*Response (500 - Internal Server Error)*
```json
{
  "message": "Internal server error"
}
```

## 2. POST /login
Description:
- Login into the system

#### Request:
- body:
```json
{
  "email": "string",
  "password": "string"
}
```

*Response (200 - OK)*
```json
{
  "access_token": "string"
}
```

*Response (400 - Bad Request)*
```json
{
  "message": "Email is required"
}
```
OR
```json
{
  "message": "Password is required"
}
```


*Response (401 - Unauthorized)*
```json
{
  "message": "Error invalid email or password"
}
```

*Response (500 - Internal Server Error)*
```json
{
  "message": "Internal server error"
}
```

## 3. POST /auth/google
Description:
- Login into the system using google account

#### Request:
- body:
```json
{
  "googleToken": "string"
}
```

*Response (200 - OK)*
```json
{
  "access_token": "string"
}
```

*Response (201 - Created)*
```json
{
  "access_token": "string"
}
```

*Response (401 - Unauthorized)*
```json
{
  "message": "Error authentication"
}
```

*Response (500 - Internal Server Error)*
```json
{
  "message": "Internal server error"
}
```

## 4. GET /user
Description:
- Get user info that logged in

- headers:
```json
{
    "Authorization": "Bearer <accessToken>"
}
```

*Response (200 - OK)*
```json
{
  "id": "number",
  "username": "string",
  "email": "string",
  "password": "string",
  "createdAt": "date",
  "updatedAt": "date"
}
```

*Response (401 - Unauthorized)*
```json
{
  "message": "Error authentication"
}
```

*Response (500 - Internal Server Error)*
```json
{
  "message": "Internal server error"
}
```

## 5. PUT /editProfile
Description:
- Edit user profile

#### Request:
- headers:
```json
{
    "Authorization": "Bearer <accessToken>"
}
```

- body:
```json
{
    "username": "string",
    "email": "string"
}
```

*Response (200 - OK)*
```json
{
    "message": "Success update user profile"
}
```

*Response (400 - Bad Request)*
```json
{
  "message": "Validation error message"
}
```

*Response (401 - Unauthorized)*
```json
{
  "message": "Error authentication"
}
```

*Response (500 - Internal Server Error)*
```json
{
  "message": "Internal server error"
}
```

## 6. GET /games
Description:
- Get all games from the database

#### Request:
- headers:
```json
{
    "Authorization": "Bearer <accessToken>"
}
```

#### Request:
#### query parameters:
- search (optional)
  - `GET /games?search=war`
  - Description: Search games by title

- sort (optional)
  - `GET /games?sort=-releasedDate`
  - Description: Sort games by releasedDate

- page[size] (optional)
  - `GET /games?page[size]=10`
  - Description: Number of games per page, the default is 10

- page[number] (optional)
  - `GET /games?page[number]=3`
  - Description: The page number to retrieve


*Response (200 - OK)*
```json
{
  "page": "number",
  "data": [
    {
      "id": "number",
      "title": "string",
      "description": "string",
      "genre": "string",
      "imgUrl": "string",
      "releasedDate": "date",
      "metacriticRating": "number",
      "createdAt": "string",
      "updatedAt": "string"
    },
  ],
  "totalData": "number",
  "totalPage": "number",
  "dataPerPage": "number"
}
```

*Response (401 - Unauthorized)*
```json
{
  "message": "Error authentication"
}
```

*Response (500 - Internal Server Error)*
```json
{
  "message": "Internal server error"
}
```

## 7. POST /games/recommendations
Description:
- Get game recommendations from geminiAI

#### Request:
- headers:
```json
{
    "Authorization": "Bearer <accessToken>"
}
```

*Response (200 - Ok)*
```json
[
    {
        "id": "number",
        "title": "string",
        "description": "string",
        "genre": "string",
        "imgUrl": "string",
        "releasedDate": "date",
        "metacriticRating": "number",
        "createdAt": "string",
        "updatedAt": "string"
    },
]
```

*Response (401 - Unauthorized)*
```json
{
  "message": "Error authentication"
}
```

*Response (500 - Internal Server Error)*
```json
{
  "message": "Internal server error"
}
```

## 8. GET /games/:id
Description:
- Get games from the database based on params id

#### Request:
- headers:
```json
{
    "Authorization": "Bearer <accessToken>"
}
```

*Response (200 - Ok)*
```json
{
    "id": "number",
    "title": "string",
    "description": "string",
    "genre": "string",
    "imgUrl": "string",
    "releasedDate": "date",
    "metacriticRating": "number",
    "createdAt": "string",
    "updatedAt": "string"
}
```

*Response (401 - Unauthorized)*
```json
{
  "message": "Error authentication"
}
```

*Response (404 - Not Found)*
```json
{
  "message": "Data not found"
}
```

*Response (500 - Internal Server Error)*
```json
{
  "message": "Internal server error"
}
```

## 9. GET /favorites
Description:
- Get all favorite games from user that logged in

#### Request:
- headers:
```json
{
    "Authorization": "Bearer <accessToken>"
}
```

*Response (200 - Created)*
```json
[
    {
    "id": "number",
    "UserId": "number",
    "GameId": "number",
    "createdAt": "date",
    "updatedAt": "date",
    "Game": {
      "id": "number",
      "title": "string",
      "description": "string",
      "genre": "string",
      "imgUrl": "string",
      "releasedDate": "date",
      "metacriticRating": "number",
      "createdAt": "date",
      "updatedAt": "date"
    }
  },
]
```

*Response (401 - Unauthorized)*
```json
{
  "message": "Error authentication"
}
```

*Response (500 - Internal Server Error)*
```json
{
  "message": "Internal server error"
}
```

## 10. POST /favorites
Description:
- Add game to user favorites

#### Request:
- headers:
```json
{
    "Authorization": "Bearer <accessToken>"
}
```

*Response (201 - Ok)*
```json
[
    {
        "UserId": "number",
        "GameId": "number",
        "createdAt": "date",
        "updatedAt": "date"
    },
]
```

*Response (401 - Unauthorized)*
```json
{
  "message": "Error authentication"
}
```

*Response (500 - Internal Server Error)*
```json
{
  "message": "Internal server error"
}
```

## 11. DELETE /favorites/:id
Description:
- Delete favorite based on params id

#### Request:
- headers:
```json
{
  "Authorization": "Bearer <accessToken>"
}
```

*Response (200 - Ok)*
```json
{
  "message": "Success remove <game_title> from favorites"
}
```

*Response (400 - Bad Request)*
```json
{
  "message": "Validation error message"
}
```

*Response (401 - Unauthorized)*
```json
{
  "message": "Error authentication"
}
```

*Response (500 - Internal Server Error)*
```json
{
  "message": "Internal server error"
}
```