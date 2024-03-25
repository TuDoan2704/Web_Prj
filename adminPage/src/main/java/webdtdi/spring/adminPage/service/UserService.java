package webdtdi.spring.adminPage.service;

import org.springframework.stereotype.Service;
import webdtdi.spring.adminPage.dto.UserDTO;
import webdtdi.spring.adminPage.entity.User;

public interface UserService {
    User getUserById(Long id);
    User saveAllUser(UserDTO userDTO);
}
