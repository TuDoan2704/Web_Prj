package webdtdi.spring.adminPage.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import webdtdi.spring.adminPage.dto.ContentDTO;
import webdtdi.spring.adminPage.dto.HomeDTO;
import webdtdi.spring.adminPage.dto.UserDTO;
import webdtdi.spring.adminPage.entity.Content;
import webdtdi.spring.adminPage.entity.Home;
import webdtdi.spring.adminPage.entity.User;
import webdtdi.spring.adminPage.repository.ContentRepo;
import webdtdi.spring.adminPage.service.ContentService;
import webdtdi.spring.adminPage.service.HomeService;
import webdtdi.spring.adminPage.service.UserService;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class AdminPageController {
    @Autowired
    private UserService userService;
    @Autowired
    private ContentService contentService;
    @Autowired
    private HomeService homeService;
    @GetMapping("/{id}")
    public User getUserById(@PathVariable("id") Long id) {
        System.out.println("Hello");
        return userService.getUserById(id);
    }
//    @PostMapping("/add")
//    public User createUser(@RequestBody UserDTO userDTO){
//        return userService.saveAllUser(userDTO);
//    }

    @PostMapping("/add")
    public ContentDTO createUser(@RequestBody ContentDTO content){
        return contentService.saveAllUser(content);
    }
//    @PostMapping("/upload")
//    public HomeDTO insertDataHome(@RequestParam "file"){
//        return homeService.saveOrUpdate(homeDTO);
//    }
    @PostMapping("/upload/{id}")
    public ResponseEntity<HomeDTO> uploadFile(@PathVariable("id") Integer id,@RequestParam("file") MultipartFile file) throws IOException {
        HomeDTO fileEntity = homeService.updateFile(file, id);
        return ResponseEntity.ok(fileEntity);
    }
    @GetMapping("/getdata")
    public List<HomeDTO> getListData(){
        return homeService.getData();
    }

    @PostMapping("update-data")
    public void updateData(@RequestBody List<HomeDTO> listHomeDTO){
        homeService.updateData(listHomeDTO);
//        return  ResponseEntity.ok("Thaành công");
    };
}
