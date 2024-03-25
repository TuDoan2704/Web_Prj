package webdtdi.spring.adminPage.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@Entity

@Table(name = "pagecontent")
public class Content {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String dataContent;

    public Content(String dataContent) {
        this.dataContent = dataContent;
    }


    public Content() {

    }
}
