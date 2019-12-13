package plitkashop.web.rest;

import plitkashop.domain.Shops;
import plitkashop.repository.ShopsRepository;
import plitkashop.web.rest.errors.BadRequestAlertException;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional; 
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link plitkashop.domain.Shops}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class ShopsResource {

    private final Logger log = LoggerFactory.getLogger(ShopsResource.class);

    private static final String ENTITY_NAME = "shops";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final ShopsRepository shopsRepository;

    public ShopsResource(ShopsRepository shopsRepository) {
        this.shopsRepository = shopsRepository;
    }

    /**
     * {@code POST  /shops} : Create a new shops.
     *
     * @param shops the shops to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new shops, or with status {@code 400 (Bad Request)} if the shops has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/shops")
    public ResponseEntity<Shops> createShops(@RequestBody Shops shops) throws URISyntaxException {
        log.debug("REST request to save Shops : {}", shops);
        if (shops.getId() != null) {
            throw new BadRequestAlertException("A new shops cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Shops result = shopsRepository.save(shops);
        return ResponseEntity.created(new URI("/api/shops/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /shops} : Updates an existing shops.
     *
     * @param shops the shops to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated shops,
     * or with status {@code 400 (Bad Request)} if the shops is not valid,
     * or with status {@code 500 (Internal Server Error)} if the shops couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/shops")
    public ResponseEntity<Shops> updateShops(@RequestBody Shops shops) throws URISyntaxException {
        log.debug("REST request to update Shops : {}", shops);
        if (shops.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Shops result = shopsRepository.save(shops);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, shops.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /shops} : get all the shops.
     *

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of shops in body.
     */
    @GetMapping("/shops")
    public List<Shops> getAllShops() {
        log.debug("REST request to get all Shops");
        return shopsRepository.findAll();
    }

    /**
     * {@code GET  /shops/:id} : get the "id" shops.
     *
     * @param id the id of the shops to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the shops, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/shops/{id}")
    public ResponseEntity<Shops> getShops(@PathVariable Long id) {
        log.debug("REST request to get Shops : {}", id);
        Optional<Shops> shops = shopsRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(shops);
    }

    /**
     * {@code DELETE  /shops/:id} : delete the "id" shops.
     *
     * @param id the id of the shops to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/shops/{id}")
    public ResponseEntity<Void> deleteShops(@PathVariable Long id) {
        log.debug("REST request to delete Shops : {}", id);
        shopsRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
