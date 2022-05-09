## Objects and Data Structures
### Use getters and setters

Using getters and setters to access data on objects could be better than simply looking for a property on an object. "Why?" you might ask. Well, here's an unorganized list of reasons why:

When you want to do more beyond getting an object property, you don't have to look up and change every accessor in your codebase.
Makes adding validation simple when doing a set.
Encapsulates the internal representation.
Easy to add logging and error handling when getting and setting.
You can lazy load your object's properties, let's say getting it from a server.