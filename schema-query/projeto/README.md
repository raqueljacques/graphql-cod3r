## Fragment

Reuse fragments of data that are heavily used to facilitate queries.

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
