
| ID       | 2024-12-03-11:26 |
| -------- | ---------------- |
| **Tags** | #cyberSecurity   |
## What is a session token

Session tokens are essential components of session management in web application


### Life cycle of a session token

**Token generation**
- As soon an user log in, the server identifies the user by checking username and password (or other data)
- the server generates an unique token that may include identification data (user id, role, permissions), meta data (expiring time, IAT for creation timestamp). This information may be directly coded in the token (e.g., [[JWT (JSON Web Token)]] with digital signature) or referenced (e.g., the token is just a key to access a record memorized in a database table)

**Token storage (client side)**
- the token is send by the server to the client, as part of the HTTP response
- the client stores the token, generally in a [[cookie]] or in [[LocalStorage]] or [[SessionStorage]] (not recommended because of exposure to [[XSS (cross site scripting) attacks]]). This allows the user to avoid a manual login each time

**Subsequent requests**
- the client sends the token at each new HTTP requests (e.g., to access a particular section of the application or to get resources), usually in the header (as bearer token), or as cookie (cookies are automatically sent by the browser, no manual operation is needed)


Il client invia il token con ogni richiesta al server, di solito nell’header HTTP Authorization (es. Bearer token), oppure come cookie.
Il server verifica la validità del token, analizzando:
L'integrità del token (firma valida, nessuna modifica).
La scadenza (exp) per assicurarsi che il token non sia troppo vecchio.
Se il token è valido, il server utilizza i dati inclusi nel token (es. role) o i dati referenziati per determinare i permessi dell'utente.
Autorizzazione:

Una volta autenticato il token, il server confronta il ruolo e i permessi con le regole RBAC definite per la risorsa richiesta.
Questo può comportare controlli come:
L’utente ha il ruolo corretto per accedere a questa risorsa?
La richiesta rientra nei limiti della sessione?
Non è solo un matching di stringhe:
Anche se il token è rappresentato da una stringa, il sistema di gestione dei token coinvolge diversi aspetti di sicurezza:

Firmare e verificare il token:

I token JWT, ad esempio, sono firmati con un algoritmo crittografico (es. HMAC o RSA). La firma garantisce che i dati nel token non siano stati manomessi.
Il server utilizza la chiave segreta (o pubblica, in caso di RSA) per verificare che il token sia autentico.
Scadenza e revoca:

I token possono includere un timestamp di scadenza (exp). Questo impedisce che un token vecchio possa essere riutilizzato.
Per revocare un token prima della scadenza, si può mantenere una blacklist lato server o rigenerare i token per invalidare quelli esistenti.
Sicurezza del trasporto:

I token sono trasmessi su connessioni HTTPS, per proteggerli da intercettazioni (es. attacchi man-in-the-middle).
Nei cookie, le opzioni Secure e HttpOnly impediscono l'accesso tramite script lato client.
Difesa contro attacchi:

XSS: I cookie HttpOnly prevengono l'accesso tramite JavaScript.
CSRF: Si utilizzano token anti-CSRF abbinati ai session token.
Session fixation: I token sono rigenerati dopo eventi critici, come il login.

## References
