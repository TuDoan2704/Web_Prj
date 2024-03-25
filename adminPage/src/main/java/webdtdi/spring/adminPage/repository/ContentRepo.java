package webdtdi.spring.adminPage.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import webdtdi.spring.adminPage.entity.Content;

@Repository
public interface ContentRepo extends JpaRepository<Content,Long>{

//    Content updateAllBy(Content content);
}
