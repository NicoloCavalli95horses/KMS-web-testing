---
ID: 2025-02-10-10:52
tags:
  - "#definition"
  - clientSideAttacks
  - pushNotification
---
## Definition

In modern web development, cross-origin communication allows different web pages or frames from different domains to interact with each other securely:
- One popular mechanism for achieving this is using the `postMessage` API in JavaScript

The `window.postMessage` method is a secure way to enable communication between two windows (or tabs) that belong to different origins ([[domain]]).

It allows scripts from one window to safely pass messages to another window, even if they originate from different domains. This is particularly useful for:
- embedding third-party widgets
- iframes
- cross-origin communication

## Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>Origin 1</title>
</head>
<body>
  <button onclick="sendMessage()">Send Message</button>

  <script>
    function sendMessage() {
      const otherWindow =   
      window.open('https://origin2.com');
      const message = 'Hello from Origin 1!';
      const targetOrigin = 'https://origin2.com';
      otherWindow.postMessage(message, targetOrigin);
    }
  </script>
</body>
</html>
```

```html
<!DOCTYPE html>
<html>
<head>
  <title>Origin 2</title>
</head>
<body>
  <script>
    window.addEventListener('message', receiveMessage, false);

    function receiveMessage(event) {
      if (event.origin === 'https://origin1.com') {
        alert('Received message: ' + event.data);
      }
    }
  </script>
</body>
</html>
```

### Security concerns

- `postMessage` enables applications to communicate purely within the browser, so web servers are not involved in client-to-client communications
- no security policy are implemented by default, so the developer is responsible for ensuring that no unauthorized communication occur


---
#### References
- https://medium.com/@mrajaeim/understanding-window-postmessage-and-window-parent-postmessage-in-javascript-f09d4eac68ba
- [[(Weissbacher, Robertson, et al., 2015)]]
- [[(Chinprutthiwong, Vardhan, et al., 2021)]]
