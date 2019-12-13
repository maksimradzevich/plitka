package plitkashop.repository;
import plitkashop.domain.Otzyvi;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Otzyvi entity.
 */
@SuppressWarnings("unused")
@Repository
public interface OtzyviRepository extends JpaRepository<Otzyvi, Long> {

}
