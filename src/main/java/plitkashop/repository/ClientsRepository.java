package plitkashop.repository;
import plitkashop.domain.Clients;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Clients entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ClientsRepository extends JpaRepository<Clients, Long> {

}
