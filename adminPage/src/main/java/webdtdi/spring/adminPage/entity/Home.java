package webdtdi.spring.adminPage.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity(name = "DataAdmin")
public class Home
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "title")
    private String title;

    @Column(name = "content")
    private String content;

    @Column(name = "file_name")
    private String fileName;

    @Column(name = "menu")
    private String menu;

    @Column(name = "file_data")
    @Lob
    private byte[] fileData;
    public Home() {

    }

}
