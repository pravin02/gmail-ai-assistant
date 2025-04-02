package org.pk.email.writer.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/ai/chat")
public class AIChatController {

    Logger LOGGER = LoggerFactory.getLogger(AIChatController.class);



    @PostMapping
    public ResponseEntity<String> getResponse(@RequestBody ChatRequest chatRequest) {
        LOGGER.info("getResponse: body: {}", chatRequest);
       return  ResponseEntity.ok("This service will generate response based on Deekseek-r1 model");
    }
}
