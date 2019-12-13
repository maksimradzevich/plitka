package plitkashop.web.rest;

import plitkashop.domain.Otzyvi;
import plitkashop.repository.OtzyviRepository;
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
 * REST controller for managing {@link plitkashop.domain.Otzyvi}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class OtzyviResource {

    private final Logger log = LoggerFactory.getLogger(OtzyviResource.class);

    private static final String ENTITY_NAME = "otzyvi";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final OtzyviRepository otzyviRepository;

    public OtzyviResource(OtzyviRepository otzyviRepository) {
        this.otzyviRepository = otzyviRepository;
    }

    /**
     * {@code POST  /otzyvis} : Create a new otzyvi.
     *
     * @param otzyvi the otzyvi to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new otzyvi, or with status {@code 400 (Bad Request)} if the otzyvi has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/otzyvis")
    public ResponseEntity<Otzyvi> createOtzyvi(@RequestBody Otzyvi otzyvi) throws URISyntaxException {
        log.debug("REST request to save Otzyvi : {}", otzyvi);
        if (otzyvi.getId() != null) {
            throw new BadRequestAlertException("A new otzyvi cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Otzyvi result = otzyviRepository.save(otzyvi);
        return ResponseEntity.created(new URI("/api/otzyvis/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /otzyvis} : Updates an existing otzyvi.
     *
     * @param otzyvi the otzyvi to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated otzyvi,
     * or with status {@code 400 (Bad Request)} if the otzyvi is not valid,
     * or with status {@code 500 (Internal Server Error)} if the otzyvi couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/otzyvis")
    public ResponseEntity<Otzyvi> updateOtzyvi(@RequestBody Otzyvi otzyvi) throws URISyntaxException {
        log.debug("REST request to update Otzyvi : {}", otzyvi);
        if (otzyvi.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Otzyvi result = otzyviRepository.save(otzyvi);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, otzyvi.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /otzyvis} : get all the otzyvis.
     *

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of otzyvis in body.
     */
    @GetMapping("/otzyvis")
    public List<Otzyvi> getAllOtzyvis() {
        log.debug("REST request to get all Otzyvis");
        return otzyviRepository.findAll();
    }

    /**
     * {@code GET  /otzyvis/:id} : get the "id" otzyvi.
     *
     * @param id the id of the otzyvi to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the otzyvi, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/otzyvis/{id}")
    public ResponseEntity<Otzyvi> getOtzyvi(@PathVariable Long id) {
        log.debug("REST request to get Otzyvi : {}", id);
        Optional<Otzyvi> otzyvi = otzyviRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(otzyvi);
    }

    /**
     * {@code DELETE  /otzyvis/:id} : delete the "id" otzyvi.
     *
     * @param id the id of the otzyvi to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/otzyvis/{id}")
    public ResponseEntity<Void> deleteOtzyvi(@PathVariable Long id) {
        log.debug("REST request to delete Otzyvi : {}", id);
        otzyviRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
