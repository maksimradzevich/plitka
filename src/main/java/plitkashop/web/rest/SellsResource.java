package plitkashop.web.rest;

import plitkashop.domain.Sells;
import plitkashop.repository.SellsRepository;
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
 * REST controller for managing {@link plitkashop.domain.Sells}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class SellsResource {

    private final Logger log = LoggerFactory.getLogger(SellsResource.class);

    private static final String ENTITY_NAME = "sells";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final SellsRepository sellsRepository;

    public SellsResource(SellsRepository sellsRepository) {
        this.sellsRepository = sellsRepository;
    }

    /**
     * {@code POST  /sells} : Create a new sells.
     *
     * @param sells the sells to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new sells, or with status {@code 400 (Bad Request)} if the sells has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/sells")
    public ResponseEntity<Sells> createSells(@RequestBody Sells sells) throws URISyntaxException {
        log.debug("REST request to save Sells : {}", sells);
        if (sells.getId() != null) {
            throw new BadRequestAlertException("A new sells cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Sells result = sellsRepository.save(sells);
        return ResponseEntity.created(new URI("/api/sells/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /sells} : Updates an existing sells.
     *
     * @param sells the sells to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated sells,
     * or with status {@code 400 (Bad Request)} if the sells is not valid,
     * or with status {@code 500 (Internal Server Error)} if the sells couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/sells")
    public ResponseEntity<Sells> updateSells(@RequestBody Sells sells) throws URISyntaxException {
        log.debug("REST request to update Sells : {}", sells);
        if (sells.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Sells result = sellsRepository.save(sells);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, sells.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /sells} : get all the sells.
     *

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of sells in body.
     */
    @GetMapping("/sells")
    public List<Sells> getAllSells() {
        log.debug("REST request to get all Sells");
        return sellsRepository.findAll();
    }

    /**
     * {@code GET  /sells/:id} : get the "id" sells.
     *
     * @param id the id of the sells to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the sells, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/sells/{id}")
    public ResponseEntity<Sells> getSells(@PathVariable Long id) {
        log.debug("REST request to get Sells : {}", id);
        Optional<Sells> sells = sellsRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(sells);
    }

    /**
     * {@code DELETE  /sells/:id} : delete the "id" sells.
     *
     * @param id the id of the sells to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/sells/{id}")
    public ResponseEntity<Void> deleteSells(@PathVariable Long id) {
        log.debug("REST request to delete Sells : {}", id);
        sellsRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
