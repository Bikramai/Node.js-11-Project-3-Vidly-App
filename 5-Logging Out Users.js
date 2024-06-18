/* 
Logging out users, Do we need a separate route for that? 
No, Coz we are not storing this token anywhere in the server, 
so we don't need a separate route handler to delete this token.
So technically we need to implement the logging out feature on 
the client, not on the server. So on the client application, 
when the user wants to logout, you simply delete a token from 
the client. 

Store token on the server on the database. This is a very bad practice,
coz these tokens are like keys that give a client access to protected api
endpoints. if a hacker can get access to your database, you can see all 
these tokens for authenticated users, they don't even need to know the 
password of a user they can simply get their authentication token and send
it to the server to execute requests on behalf of a user. 

So we shouldn't store tokens in your database, and if you know what you're doing,
and you really want to store the token in the database, make sure to encrypt it, 
to hash it, just like the passwords. 

Storing the token in plain text in database, is like getting the passport or Driver
Licence of all the users, put them in a central place and then anyone, any malicious 
user who has access to the central place they can simply get these passwords, 
they can get these drivers licences and imitate other uses, other clients.

So, once again, do not store the tokens on the server, store them on the client,
and as a security best practice, whenever you're sending the token from the client
to the server, make sure to use https so a hacker in the middle sniffing traffic 
they cannot read the token sent from the client to the server. So the data is 
encrypted between the client and the server.

*/