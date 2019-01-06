# Tocca Questions

1. What are the main differences between API and web service?

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
