package plitkashop.repository;
import plitkashop.domain.CourseParts;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the CourseParts entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CoursePartsRepository extends JpaRepository<CourseParts, Long> {

}
