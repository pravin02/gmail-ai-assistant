# Gmail-AI-Assistant

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


### How to configure extension in developer mode
1. Type `chrome://extensions/`in browser tab.
2. From top right corner enable the developer mode.
3. From top left corner click on `Load Unpacked` button and browse the extension source code.
4. Once directory selected you should be able to see the extension on the window with title `
   AI Email Assistant`.
5. Go to the another tab and open GMAIL and select email on which you would to test the extension.
6. Once email selected click on reply button you will see `AI Reply` button got added immediate before Send button.
7. Click on `AI Reply` button(Make sure your running backend on 8080 port and CORS is enabled) backend will pass the email trail context to the deepseek model and will stream the response.

### Video
[gmail AI assistance.mp4](gmail%20AI%20assistance.mp4)