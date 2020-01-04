# Docker Notes

### Questions to ask yourself

Q: Why do we need Docker?
A: Compatibility/Dependency, long setup time, different dev/test/pro environments.

Q: What is the matrix from hell?
A: The compatibility issues that come with using many different services and making sure they work well together. For example using a web server (Node.js), DB (MongoDB), Messaging(Redis) and Orchestration system all have to run in parallel. Any time something changes everything has to be made sure that is working properly under the same OS system. Not all developers use the same OS, we have to use something that allows that compatibility and flexibility.

Q: What can Docker do?
A: Separate these different needs: server, db, messaging/caching into different containers with their own respective libraries and dependencies.

Q: What are containers?
A: Containers are completely isolated environments, they can have their own processses, network, environments. They all share the same OS kernel.

Q: What does sharing the OS kernel mean?
A: Different operating systems such as Ubuntu and OS. As long as they are using underlying kernel such as *Linux* developers can use different OS systems on the same Docker Host. However, if a user dev Windows, he would not be able to use that host.

Q: Containers vs Virtual Machines?
A: Containers hold the application + libraries + dependencies on top of docker, on top of the OS and on top of hardware infrastructure. In the case of VM's they run the application + libraries + dependencies + operating system on top infrastructure. 

The advantage for Docker is its utilization is less, the size of space is smaller, which allows Docker to boot up in seconds. 

Q: How is it done?
A: Running docker images/instances is as easy as running commands.

Q: Container vs. Image?
A: A Docker Image is a package, or template (plan) it used to create one ore more containers. Containers are running instances of images that are isolated and have their own environments and set of processes.

Q: 
A:

Q:
A: