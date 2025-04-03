# Getting Started

### Reference Documentation
For further reference, please consider the following sections:

* [Official Apache Maven documentation](https://maven.apache.org/guides/index.html)
* [Spring Boot Maven Plugin Reference Guide](https://docs.spring.io/spring-boot/3.4.4/maven-plugin)
* [Create an OCI image](https://docs.spring.io/spring-boot/3.4.4/maven-plugin/build-image.html)
* [Spring Web](https://docs.spring.io/spring-boot/3.4.4/reference/web/servlet.html)

### Guides
The following guides illustrate how to use some features concretely:

* [Building a RESTful Web Service](https://spring.io/guides/gs/rest-service/)
* [Serving Web Content with Spring MVC](https://spring.io/guides/gs/serving-web-content/)
* [Building REST services with Spring](https://spring.io/guides/tutorials/rest/)

### How to setup Ollama and deekseek R1 model
1. Browse the https://ollama.com/ url and download the setup.
2. Go to the https://ollama.com/search models search page and search DeepSeek-r1 else https://ollama.com/library/deepseek-r1:1.5b use the URL.
3. Once Ollama client installed execute `ollama run deepseek-r1:1.5b` command it may take few minute depends on your internet connection.
4. To verify setup browse http://localhost:11434/ url should show `Ollama is running` and your good to go.


### How to run project
1. Run the application using `mvn clean install -U` command once application up and running execute below curl.
2. It may take some time as model is setup on local according to available resources it will work. 
3. Request Details:
curl --location 'http://localhost:8080/api/ai/chat' \
--header 'Content-Type: application/json' \
--data '{
"emailContent": "Hi Pravin, Connecting with you regarding one of the githug project you have developed.",
"tone": "professional"
}'
4. Response:
   <think>
   Okay, so I need to respond to this email that Pravin sent. Let me read through it again.

He says, "Hi Pravin, Connecting with you regarding one of the githug project you have developed." Hmm, he's just mentioning someone and a project they're working on. He didn't ask any specific questions or want to discuss something in detail.

I wonder why he wrote it like that. Maybe he wants to set up a meeting or schedule? Or perhaps he doesn't remember the exact details of the project yet. It could also be a way for him to acknowledge their interest without getting into specifics.

Since I don't have any additional context, the best approach is to ask how I can help further. That way, I can clarify my needs and ensure we're going in the right direction.
</think>

Certainly! Here's a thoughtful response based on your query:

---

Hi Pravin,

I wanted to confirm how I can assist you with our githug project. Could you please let me know more about what you're working on or if there’s something specific you’d like discussed?

Thank you for reaching out!

Best regards,  
[Your Name]

--- 

This approach is friendly and open-ended, inviting further discussion.