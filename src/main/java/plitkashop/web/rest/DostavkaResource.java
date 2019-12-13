package plitkashop.web.rest;

import plitkashop.domain.Dostavka;
import plitkashop.repository.DostavkaRepository;
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
 * REST controller for managing {@link plitkashop.domain.Dostavka}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class DostavkaResource {

    private final Logger log = LoggerFactory.getLogger(DostavkaResource.class);

    private static final String ENTITY_NAME = "dostavka";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final DostavkaRepository dostavkaRepository;

    public DostavkaResource(DostavkaRepository dostavkaRepository) {
        this.dostavkaRepository = dostavkaRepository;
    }

    /**
     * {@code POST  /dostavkas} : Create a new dostavka.
     *
     * @param dostavka the dostavka to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new dostavka, or with status {@code 400 (Bad Request)} if the dostavka has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/dostavkas")
    public ResponseEntity<Dostavka> createDostavka(@RequestBody Dostavka dostavka) throws URISyntaxException {
        log.debug("REST request to save Dostavka : {}", dostavka);
        if (dostavka.getId() != null) {
            throw new BadRequestAlertException("A new dostavka cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Dostavka result = dostavkaRepository.save(dostavka);
        return ResponseEntity.created(new URI("/api/dostavkas/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /dostavkas} : Updates an existing dostavka.
     *
     * @param dostavka the dostavka to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated dostavka,
     * or with status {@code 400 (Bad Request)} if the dostavka is not valid,
     * or with status {@code 500 (Internal Server Error)} if the dostavka couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/dostavkas")
    public ResponseEntity<Dostavka> updateDostavka(@RequestBody Dostavka dostavka) throws URISyntaxException {
        log.debug("REST request to update Dostavka : {}", dostavka);
        if (dostavka.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Dostavka result = dostavkaRepository.save(dostavka);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, dostavka.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /dostavkas} : get all the dostavkas.
     *

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of dostavkas in body.
     */
    @GetMapping("/dostavkas")
    public List<Dostavka> getAllDostavkas() {
        log.debug("REST request to get all Dostavkas");
        return dostavkaRepository.findAll();
    }

    /**
     * {@code GET  /dostavkas/:id} : get the "id" dostavka.
     *
     * @param id the id of the dostavka to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the dostavka, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/dostavkas/{id}")
    public ResponseEntity<Dostavka> getDostavka(@PathVariable Long id) {
        log.debug("REST request to get Dostavka : {}", id);
        Optional<Dostavka> dostavka = dostavkaRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(dostavka);
    }

    /**
     * {@code DELETE  /dostavkas/:id} : delete the "id" dostavka.
     *
     * @param id the id of the dostavka to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/dostavkas/{id}")
    public ResponseEntity<Void> deleteDostavka(@PathVariable Long id) {
        log.debug("REST request to delete Dostavka : {}", id);
        dostavkaRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
