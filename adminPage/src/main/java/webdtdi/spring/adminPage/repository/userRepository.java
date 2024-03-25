package webdtdi.spring.adminPage.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import webdtdi.spring.adminPage.entity.User;

@Repository
public interface userRepository extends JpaRepository<User, Long>{
//    User findByUserName(String userName);
    User findAllById(Long id);
//    User save();

}
