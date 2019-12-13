package plitkashop.repository;
import plitkashop.domain.Dostavka;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Dostavka entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DostavkaRepository extends JpaRepository<Dostavka, Long> {

}
