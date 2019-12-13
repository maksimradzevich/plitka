package plitkashop.repository;
import plitkashop.domain.Plitka;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Plitka entity.
 */
@SuppressWarnings("unused")
@Repository
public interface PlitkaRepository extends JpaRepository<Plitka, Long> {

}
