/*
Notes:-
In Express we have this error middleware, which is basically a function with 4 arguments.
Error, request, response, and next.
This function catches any error in the request process in the pipeline. So here we use, 
winston to log the error, and then return a 500 or internal server error with a friendly
message to the client. Now as I told you this only works for errors that happen in the 
request processing pipeline. It will ignore anything outside the context of express.
So if something goes wrong during our application startup, this function is not going to 
executed. So, that's why in index.js we need to call winston that handle exceptions to get 
any uncaught exceptions and log them to a file. Now as I told you before, this only works 
with uncaught exceptions. It will not work with unhandle promise rejections. But i know there 
is an open issue on the GitHub page, someone suggested that we need to add this feature to winston, 
and chancess are it will be available in the future. So far now we need to subscribe to 
unhandledRejection event of the process object. Here we simply throw and exception and then get
winston that  exception, log it, and terminate the process.

So as a best practice when you are dealing with these kind of exceptions, you should terminate the 
node process, coz the process can be in an unclean state. So we should restart it with a clean state.
In production we use tools that we call process managers,  which are responsible for automathically
restarting a node process. so that's all about error handling and logging.

Now if we look at the code in index.js, we can see this code is really growing out of hand.
we have so much stuff happening here. And quite a few require statemnents on top of the file.
This is not how we build enterprise applications. we have to refactor this module, and make it clean, 
and maintainable.

*/