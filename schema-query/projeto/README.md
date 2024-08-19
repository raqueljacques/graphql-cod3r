## npm install

Importar arquivos do graphql

```
npm i -s graphql-import
```

## Rodar aplicação

```
nvm use
```

```
npm start
```

## Fragment

Reuse fragments of data that are heavily used to facilitate queries.

Example to use in Apollo playground.

```javascript
query {
    user(id: 3)
    {
        ...completedUser
    }
    users
    {
        ...completedUser
    }
}

fragment completedUser on User
{
    id name email age salary vip profile { id name}
}
```

## Queries to test in playground

```javascript
{
  exampleProduct
  {
    name
  }
  lotteryNumbers
  user(id: 3)
  {
    email
  }
  users
  {
    id email profile{ name }
  }
  profiles
  {
    id
    name
  }
  profile(id: 1)
  {
    name
  }
  user(id: 3)
  {
    ...completedUser
  }
}
```
