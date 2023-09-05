Build an Express server which responds to requests per the following API documentation:

# Emoji Server API Documentation

```js
const API = "https://emoji-server.onrender.com";
```

## GET /emojis

### Request:

```js
fetch(`${API}/emojis`);
```

### Response:

```js
{
"success": true,
"emojis": [
    {
      "id": 1,
      "character": "😀",
      "name": "Grinning Face"
    },
    {
      "id": 2,
      "character": "🚀",
      "name": "Rocket"
    },
    {
      "id": 3,
      "character": "🌟",
      "name": "Star"
    }]
}
```

## GET /emojis/:emojiId

### Request:

```js
fetch(`${API}/emojis/12`);
```

### Response:

```js
{
  "success": true,
  "emoji": {
    "id": 12,
    "character": "🏖️",
    "name": "Beach with Umbrella"
  }
}
```

## POST /emojis

### Request:

```js
fetch(`${API}/emojis`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: "Santa",
    character: "🎅",
  }),
});
```

### Response:

```js
{
  "success": true,
  "emoji": {
    "id": 31,
    "name": "santa",
    "character": "🎅"
  }
}
```

## DELETE /emojis/:emojiId

### Request:

```js
fetch(`${API}/emojis/2`, {
  method: "DELETE",
});
```

### Response:

```js
{
  "success": true,
  "emoji": {
    "id": 2,
    "character": "🚀",
    "name": "Rocket"
  }
}
```

## PUT /emojis/:emojiId

### Request:

```js
fetch(`${API}/emojis/31`, {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: "Santa",
    character: "🎅",
  }),
});
```

### Response:

```js
{
  "success": true,
  "emoji": {
    "id": 3,
    "character": "🎅",
    "name": "Santa"
  }
}
```
