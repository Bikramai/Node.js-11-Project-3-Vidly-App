/* 
How to encapsulate logic in a single place? where should we move logic to?
-> An amateur programmer may think, Okey, I'm going to create a function like 
generate authentication token put the function somewhere that we can reuse, 
maybe in another module that we can import in both auth and user modules, and
with this we have the logic in a single place. 

Well, that is true that works but with this approch we will end up with a lot of 
functions hanging all over the place. In OOP we have principle called information
export principle that means an object that has enugh information and is an export
in a given area, that object should be responsible for making decisions and performing
tasks. As a real workd exampple, think of a chef. A chef has the knowledge of cooking.
That's why the act of cooking in the restaurant is done by the chef, not by the waiter.
The waiter doesn't have the right knowledge, the right information about cooking at a 
restaurant. So if chef is an object, we should give the act of cooking to the chef.
Now take this principle and apply it in this code. 

So here as part of creating this json webtoken, what do we need in the payload, we need the 
id of the user. Tomorrow, we may need the name of the user, or the email, so all of thid info
is encapsulated where? In the user object, so it's the user object that should be resposible for 
generating this authentication token. So that function that I wrote here, generate authentication
token, that function should not be hanging somewhere in the module, that should be a method in the
user object. So here we have a user object, that we load from the database. We need to add the method
in this user object like this, user.generateAuthenticationToken and this will give us this token.

As simple as that. Now how can we add this? We need to go to our user module where we defined the user
module and make a simple change. So let's go to user.js,

*/