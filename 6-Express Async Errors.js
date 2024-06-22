/*
Express Async Errors :-
While this async middleware function solved the problem of repetive try catch blocks,
the issue we have is that we have to remember to call every time and this also makes 
our code a little bit noisy. 

Let me show you a different approach, we're going to use an npm module, and  this module 
will monkey patch our route handlers at run time. So when we send a request, to this 
endpoint, that module will wrap our route handler code inside somthin (async) likr this.

> run in terminal ->npm i express-async-errors

So we can see using express async errors module is very2 easy, and this is my suggested 
approach for handling async errors in express route handlers. 

However, if this module doesn't work, for your application, for whatever reason, then you
need to switch back need to switch back to the other approach and use async middleware function.
*/ 