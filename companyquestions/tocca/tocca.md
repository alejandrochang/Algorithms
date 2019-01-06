# Tocca Questions

1. What are the main differences between API and web service?

Ans: 
API and Web Services serve as a means of communication. The only difference is that a Web Servie facilitates interaction between two machines over a network. An API acts as an interface between two different applications so that they can communicate with each other. All Web Services are API's, but no all API's are Web Services. Web Services might not perform all the operations that an API would perform. A Web Service only uses three style of use SOAP, REST and XML_RPC, whereas an API can use any style of communication. A Web Service always needs a network for it's operation whereas an API doesn't. 

2. Is there any difference between PUT and POST operations?

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
