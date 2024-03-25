package webdtdi.spring.adminPage.repository;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import webdtdi.spring.adminPage.entity.Home;

@Repository
public interface HomeRepo extends JpaRepository<Home, Integer> {
    @Modifying
    @Transactional
    @Query("update DataAdmin h set h.fileData =:fileData where h.id = :id")
    void updateImg(@Param("id") Integer id, @Param("fileData") byte[] fileData);

    @Modifying
    @Transactional
    @Query("update DataAdmin h set h.content =:content, h.title =:title where h.id = :id")
    void updateContent(@Param("id") Integer id, @Param("content") String content, @Param("title") String title);
}
