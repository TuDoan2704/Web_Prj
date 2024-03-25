package webdtdi.spring.adminPage.service.serviceIpml;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import webdtdi.spring.adminPage.dto.UserDTO;
import webdtdi.spring.adminPage.entity.User;
import webdtdi.spring.adminPage.repository.userRepository;
import webdtdi.spring.adminPage.service.UserService;

@Service
public class UserServiceIpml implements UserService {
    @Autowired
    private userRepository userRepo;

    @Override
    public User getUserById(Long id){
        System.out.println();
        return userRepo.findAllById(id);
    }
    @Override
    public User saveAllUser(UserDTO userDTO){
        User user = new User(userDTO.getUserName(), userDTO.getPassword(), userDTO.getRole());
        return userRepo.save(user);
    }
}
