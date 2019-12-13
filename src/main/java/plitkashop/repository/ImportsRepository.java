package plitkashop.repository;
import plitkashop.domain.Imports;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Imports entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ImportsRepository extends JpaRepository<Imports, Long> {

}
