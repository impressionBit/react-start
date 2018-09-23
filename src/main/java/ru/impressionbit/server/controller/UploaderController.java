package ru.impressionbit.server.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.util.Base64;

@Controller
public class UploaderController {

    private Logger log = LoggerFactory.getLogger(WebSocketController.class);

    @RequestMapping(value = "/api/upload", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<String> handleFileUpload(
            @RequestParam("name") String name,
            @RequestParam("file") MultipartFile file) throws Exception {

        BufferedImage bufferedImage;
        InputStream inputStream;
        byte[] imageInByte;
        String base64String = "";

        if (!file.isEmpty()) {
            inputStream = file.getInputStream();
            bufferedImage = ImageIO.read(inputStream);

            log.debug("Name: " + name);
            log.debug("Width: " + bufferedImage.getWidth());
            log.debug("Height: " + bufferedImage.getHeight());

            ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
            ImageIO.write(bufferedImage, "jpg", byteArrayOutputStream);
            byteArrayOutputStream.flush();
            imageInByte = byteArrayOutputStream.toByteArray();
            byteArrayOutputStream.close();

            base64String = Base64.getEncoder().encodeToString(imageInByte);
        }

        return ResponseEntity.ok()
                .contentType(MediaType.TEXT_PLAIN)
                .body(base64String);
    }

}