# Adonis/Lucid Playground project
This project was created to reproduce a bug on preload method.

## How to run it

- Setup postgres instance
- copy default env `cp .env.example .env` 
- Edit .env with your postgres values
- Run migrations `node ace migration:run`
- Hit endpoint to create sample data `http://127.0.0.1:3333/create`
- Hit endpoint to get data `http://127.0.0.1:3333/get`

- If you check console debug queries you should see something like this:

```
"pg" Post (3.16 ms) SELECT * FROM "posts" WHERE "title" = ? [ 'post 2' ]
"pg" Category (2.32 ms) SELECT * FROM "categories" WHERE 1 = ? [ 0 ]
```

The second query should not be fired since is a `nullable` relation