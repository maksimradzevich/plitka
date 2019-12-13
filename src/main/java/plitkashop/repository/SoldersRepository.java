package plitkashop.repository;
import plitkashop.domain.Solders;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Solders entity.
 */
@SuppressWarnings("unused")
@Repository
public interface SoldersRepository extends JpaRepository<Solders, Long> {

}
