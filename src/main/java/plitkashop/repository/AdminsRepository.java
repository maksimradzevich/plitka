package plitkashop.repository;
import plitkashop.domain.Admins;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Admins entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AdminsRepository extends JpaRepository<Admins, Long> {

}
