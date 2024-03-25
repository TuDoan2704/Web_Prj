package webdtdi.spring.adminPage.service;

import org.springframework.stereotype.Service;
import webdtdi.spring.adminPage.dto.ContentDTO;
import webdtdi.spring.adminPage.dto.UserDTO;
import webdtdi.spring.adminPage.entity.Content;
import webdtdi.spring.adminPage.entity.User;


public interface ContentService {
    ContentDTO saveAllUser(ContentDTO content);
}
