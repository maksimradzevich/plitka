package plitkashop.web.rest;

import plitkashop.domain.Plitka;
import plitkashop.repository.PlitkaRepository;
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
 * REST controller for managing {@link plitkashop.domain.Plitka}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class PlitkaResource {

    private final Logger log = LoggerFactory.getLogger(PlitkaResource.class);

    private static final String ENTITY_NAME = "plitka";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final PlitkaRepository plitkaRepository;

    public PlitkaResource(PlitkaRepository plitkaRepository) {
        this.plitkaRepository = plitkaRepository;
    }

    /**
     * {@code POST  /plitkas} : Create a new plitka.
     *
     * @param plitka the plitka to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new plitka, or with status {@code 400 (Bad Request)} if the plitka has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/plitkas")
    public ResponseEntity<Plitka> createPlitka(@RequestBody Plitka plitka) throws URISyntaxException {
        log.debug("REST request to save Plitka : {}", plitka);
        if (plitka.getId() != null) {
            throw new BadRequestAlertException("A new plitka cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Plitka result = plitkaRepository.save(plitka);
        return ResponseEntity.created(new URI("/api/plitkas/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /plitkas} : Updates an existing plitka.
     *
     * @param plitka the plitka to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated plitka,
     * or with status {@code 400 (Bad Request)} if the plitka is not valid,
     * or with status {@code 500 (Internal Server Error)} if the plitka couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/plitkas")
    public ResponseEntity<Plitka> updatePlitka(@RequestBody Plitka plitka) throws URISyntaxException {
        log.debug("REST request to update Plitka : {}", plitka);
        if (plitka.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Plitka result = plitkaRepository.save(plitka);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, plitka.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /plitkas} : get all the plitkas.
     *

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of plitkas in body.
     */
    @GetMapping("/plitkas")
    public List<Plitka> getAllPlitkas() {
        log.debug("REST request to get all Plitkas");
        return plitkaRepository.findAll();
    }

    /**
     * {@code GET  /plitkas/:id} : get the "id" plitka.
     *
     * @param id the id of the plitka to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the plitka, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/plitkas/{id}")
    public ResponseEntity<Plitka> getPlitka(@PathVariable Long id) {
        log.debug("REST request to get Plitka : {}", id);
        Optional<Plitka> plitka = plitkaRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(plitka);
    }

    /**
     * {@code DELETE  /plitkas/:id} : delete the "id" plitka.
     *
     * @param id the id of the plitka to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/plitkas/{id}")
    public ResponseEntity<Void> deletePlitka(@PathVariable Long id) {
        log.debug("REST request to delete Plitka : {}", id);
        plitkaRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
