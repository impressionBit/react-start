package ru.impressionbit.server.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Controller;

import ru.impressionbit.server.domain.Message;

@Controller
public class WebSocketController {

    private Logger log = LoggerFactory.getLogger(WebSocketController.class);

    private final SimpMessageSendingOperations messagingTemplate;

    @Autowired
    public WebSocketController(SimpMessageSendingOperations messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

    @MessageMapping("/message")
    @SendTo("/server/message")
    public void getAndSendMessage(String message) {
        try {
            String answer = "WebSocket get message : " + message;
            log.info(answer);
            messagingTemplate.convertAndSend("/server/message", new Message(answer));
        } catch (Exception e) {
            log.error(String.valueOf(e));
        }
    }

}
