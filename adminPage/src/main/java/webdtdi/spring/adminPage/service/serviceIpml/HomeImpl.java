package webdtdi.spring.adminPage.service.serviceIpml;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import webdtdi.spring.adminPage.dto.HomeDTO;
import webdtdi.spring.adminPage.entity.Home;
import webdtdi.spring.adminPage.repository.HomeRepo;
import webdtdi.spring.adminPage.service.HomeService;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class HomeImpl implements HomeService {
    @Autowired
    private HomeRepo homeRepo;
    @Override
    public HomeDTO updateFile(MultipartFile file, Integer id) throws IOException {

//        homeRepo.save(home);
        String fileName = file.getOriginalFilename();
        String fileType = file.getContentType();
        byte[] fileData = file.getBytes();
//        Home home = new Home(fileName,fileName,fileName,fileData);
        homeRepo.updateImg(id, fileData);
        return null;
    }

    @Override
    public void updateData(List<HomeDTO> listHomeDTO) {
        for (HomeDTO homeDTO: listHomeDTO){
            homeRepo.updateContent(homeDTO.getId(), homeDTO.getContent(), homeDTO.getTitle());
        }
    }

    @Override
    public List<HomeDTO> getData() {

        List<Home> home = homeRepo.findAll();
        List<HomeDTO> homeDTOS = new ArrayList<>();
        for(Home item: home){
            HomeDTO homeDTO = new HomeDTO(item.getId(),item.getTitle(),item.getContent(), item.getFileName(), item.getFileData(), item.getMenu());
            homeDTOS.add(homeDTO);        }
        return homeDTOS;
    }

}
