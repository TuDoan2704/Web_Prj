package webdtdi.spring.adminPage.service.serviceIpml;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import webdtdi.spring.adminPage.dto.ContentDTO;
import webdtdi.spring.adminPage.entity.Content;
import webdtdi.spring.adminPage.repository.ContentRepo;
import webdtdi.spring.adminPage.service.ContentService;
@Service
public class ContentImpl implements ContentService {
    @Autowired
    private ContentRepo contentRepo;
    @Override
    public ContentDTO saveAllUser(ContentDTO contentDTO) {
        Content content = new Content(contentDTO.getDataContent());
        contentRepo.save(content);
        return null;
    }
}
