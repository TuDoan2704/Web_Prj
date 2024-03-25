package webdtdi.spring.adminPage.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
@NoArgsConstructor

public class HomeDTO {

    private Integer id;
    private String title;
    private String content;
    private String fileName;
    private byte[] fileData;
    private String menu;

    public HomeDTO(Integer id, String title, String content, String fileName, byte[] fileData, String menu) {
        this.title =title;
        this.fileName =fileName;
        this.content =content;
        this.fileData = fileData;
        this.id = id;
        this.menu = menu;
    }
}
