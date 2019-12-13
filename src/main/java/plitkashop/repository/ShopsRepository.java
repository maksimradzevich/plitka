package plitkashop.repository;
import plitkashop.domain.Shops;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Shops entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ShopsRepository extends JpaRepository<Shops, Long> {

}
