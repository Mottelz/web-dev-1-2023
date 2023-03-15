# Gamey
This is a demo project using express that will create a board game database.

## Routes
*The table below describes the routes currently available with this project.*

| Route | Method | Request Body | Description |
|--|--|--|--|
| `/` | `GET` | | The home page |
| `/error` | `GET` | | Causes an internal error |
| `/games/search?query=:q`| `GET` | | Searches for a game matching `:q`|
`/games/game`| `POST`| `{ name: "game", designer: "some human" }`| Adds a game to the database |