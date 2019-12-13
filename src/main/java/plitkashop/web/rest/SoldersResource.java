package plitkashop.web.rest;

import plitkashop.domain.Solders;
import plitkashop.repository.SoldersRepository;
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
 * REST controller for managing {@link plitkashop.domain.Solders}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class SoldersResource {

    private final Logger log = LoggerFactory.getLogger(SoldersResource.class);

    private static final String ENTITY_NAME = "solders";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final SoldersRepository soldersRepository;

    public SoldersResource(SoldersRepository soldersRepository) {
        this.soldersRepository = soldersRepository;
    }

    /**
     * {@code POST  /solders} : Create a new solders.
     *
     * @param solders the solders to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new solders, or with status {@code 400 (Bad Request)} if the solders has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/solders")
    public ResponseEntity<Solders> createSolders(@RequestBody Solders solders) throws URISyntaxException {
        log.debug("REST request to save Solders : {}", solders);
        if (solders.getId() != null) {
            throw new BadRequestAlertException("A new solders cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Solders result = soldersRepository.save(solders);
        return ResponseEntity.created(new URI("/api/solders/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /solders} : Updates an existing solders.
     *
     * @param solders the solders to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated solders,
     * or with status {@code 400 (Bad Request)} if the solders is not valid,
     * or with status {@code 500 (Internal Server Error)} if the solders couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/solders")
    public ResponseEntity<Solders> updateSolders(@RequestBody Solders solders) throws URISyntaxException {
        log.debug("REST request to update Solders : {}", solders);
        if (solders.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Solders result = soldersRepository.save(solders);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, solders.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /solders} : get all the solders.
     *

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of solders in body.
     */
    @GetMapping("/solders")
    public List<Solders> getAllSolders() {
        log.debug("REST request to get all Solders");
        return soldersRepository.findAll();
    }

    /**
     * {@code GET  /solders/:id} : get the "id" solders.
     *
     * @param id the id of the solders to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the solders, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/solders/{id}")
    public ResponseEntity<Solders> getSolders(@PathVariable Long id) {
        log.debug("REST request to get Solders : {}", id);
        Optional<Solders> solders = soldersRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(solders);
    }

    /**
     * {@code DELETE  /solders/:id} : delete the "id" solders.
     *
     * @param id the id of the solders to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/solders/{id}")
    public ResponseEntity<Void> deleteSolders(@PathVariable Long id) {
        log.debug("REST request to delete Solders : {}", id);
        soldersRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
