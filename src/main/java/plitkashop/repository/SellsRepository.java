package plitkashop.repository;
import plitkashop.domain.Sells;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Sells entity.
 */
@SuppressWarnings("unused")
@Repository
public interface SellsRepository extends JpaRepository<Sells, Long> {

}
