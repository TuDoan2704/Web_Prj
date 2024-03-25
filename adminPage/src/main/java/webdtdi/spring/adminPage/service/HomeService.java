package webdtdi.spring.adminPage.service;

import org.springframework.web.multipart.MultipartFile;
import webdtdi.spring.adminPage.dto.HomeDTO;

import java.io.IOException;
import java.util.List;

public interface HomeService {
    HomeDTO updateFile(MultipartFile file, Integer id) throws IOException;
    void updateData(List<HomeDTO> listHomeDTO);
    List<HomeDTO> getData();
}
