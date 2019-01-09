# Question: Design a service like tinyURL, a URL shortening service, a web service that provides short aliases for redirection of long URLs:

Goals:
Basically we need a one to one mapping to get a shorten URL which can retrieve the original URL later. This will involve saving such data into a database. 

Things we should consider:
1. What's the trafiic volume / length of the shortened URL?
2. What's the mapping function?
3. Single Machine or Multiple Machines?

Traffic: Let's assume we want to serve more than 1000 billion URLs. If we can use 62 characters [A-Z, a-z, 0-9] for the short URLs having length n, then we can have total 62^n URLs. So, we should keep our URLs as short as possible given that it should fulfill the requirement. For our requirement, we should use n=7 i.e the length of short URLs will be 7 and we can serve 62^7 ~= 3500 billion URLs.

