# Tocca Questions

1. What are the main differences between API and web service?
 
API and Web Services serve as a means of communication. The only difference is that a Web Servie facilitates interaction between two machines over a network. An API acts as an interface between two different applications so that they can communicate with each other. All Web Services are API's, but not all API's are Web Services. Web Services might not perform all the operations that an API would perform. A Web Service only uses three style of use SOAP, REST and XML_RPC, whereas an API can use any style of communication. A Web Service always needs a network for it's operation whereas an API doesn't. A Web Service is merely an API wrapped in HTTP.

2. Is there any difference between PUT and POST operations?

Both PUT and POST can be used for creating. However, when deciding which one to use you have to ask yourtself "what are you performing the action to?". Better is to choose between PUT and POST based on idempotence of the action. 

PUT implies putting a resource - completely replacing whatever is available at the given URL with a different thing. By definition, PUT IS idempotent. You can do it as many times as you like and the result is always the same. YOU can PUT a resource whether it previously exist or not (eg. to Create or Update). POST updates a resource, adds a su resource or causes a change. A POST is NOT idempotent. 

PUT is for creating when you know the URL of the thing you will create. POST can be used to create when you know the URL of the "factory" of the category of things you're going to create. 

PUT /expense-report/45262

POST /expense-report



Idempotence: Is the property of certain operations whereby they can be applied multiple times without changing the result beyond the initial application. 


3. Coding Question:

Develop an API that accesses a Firebase real-time database to extract and return
groups of 50 records from the document user_profile
user_profile structure is the following:
User_profile: {
$user_id: { misc. profile information }
}
The API must be designed in such a way that it returns the profiles in a JSON object that
contains no more than 50 profiles at one time. Many requests to this API can be
performed to download all the profiles in the database
Technologies to be used: Javascript, Firebase function and or any other tools from the
FIrebase or GCloud environments. Preferred framework: Express - if proposing to use a
different one or not to use this one, please provide the reason why.
Code to be provided in a GitHub or equivalent repository accessible to Tocca.

4. How would you secure the above API?

5. Architecture Question: Design the architecture of an API or set of API's to collect customer information from a CRM (ex. Salesforce) and aggregate this information into a Firestone database. Note: The proposed architecture must take into account the fact that the applications is used in a multitenant environment. 

5. How would you improve the above API so that when there is a change in Salesforce the information in Firestore is updated?
