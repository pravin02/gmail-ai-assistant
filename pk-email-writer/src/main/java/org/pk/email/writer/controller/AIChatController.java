package org.pk.email.writer.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;


@RestController
@RequestMapping("/api/ai/chat")
public class AIChatController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AIChatController.class);

    @Autowired
    private ChatClient chatClient;

    @PostMapping
    public Flux<String> getResponse(@RequestBody ChatRequest chatRequest) {
        LOGGER.info("getResponse: body: {}", chatRequest);
        return chatClient.prompt()
                .system("Email")
                .system("Reply")
                .user("Generate reply to an email - email trail is as below \n " + chatRequest.emailContent())
                .stream().content();
    }
}
