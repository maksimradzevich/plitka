package plitkashop.web.rest;

import plitkashop.domain.Imports;
import plitkashop.repository.ImportsRepository;
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
 * REST controller for managing {@link plitkashop.domain.Imports}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class ImportsResource {

    private final Logger log = LoggerFactory.getLogger(ImportsResource.class);

    private static final String ENTITY_NAME = "imports";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final ImportsRepository importsRepository;

    public ImportsResource(ImportsRepository importsRepository) {
        this.importsRepository = importsRepository;
    }

    /**
     * {@code POST  /imports} : Create a new imports.
     *
     * @param imports the imports to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new imports, or with status {@code 400 (Bad Request)} if the imports has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/imports")
    public ResponseEntity<Imports> createImports(@RequestBody Imports imports) throws URISyntaxException {
        log.debug("REST request to save Imports : {}", imports);
        if (imports.getId() != null) {
            throw new BadRequestAlertException("A new imports cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Imports result = importsRepository.save(imports);
        return ResponseEntity.created(new URI("/api/imports/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /imports} : Updates an existing imports.
     *
     * @param imports the imports to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated imports,
     * or with status {@code 400 (Bad Request)} if the imports is not valid,
     * or with status {@code 500 (Internal Server Error)} if the imports couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/imports")
    public ResponseEntity<Imports> updateImports(@RequestBody Imports imports) throws URISyntaxException {
        log.debug("REST request to update Imports : {}", imports);
        if (imports.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Imports result = importsRepository.save(imports);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, imports.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /imports} : get all the imports.
     *

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of imports in body.
     */
    @GetMapping("/imports")
    public List<Imports> getAllImports() {
        log.debug("REST request to get all Imports");
        return importsRepository.findAll();
    }

    /**
     * {@code GET  /imports/:id} : get the "id" imports.
     *
     * @param id the id of the imports to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the imports, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/imports/{id}")
    public ResponseEntity<Imports> getImports(@PathVariable Long id) {
        log.debug("REST request to get Imports : {}", id);
        Optional<Imports> imports = importsRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(imports);
    }

    /**
     * {@code DELETE  /imports/:id} : delete the "id" imports.
     *
     * @param id the id of the imports to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/imports/{id}")
    public ResponseEntity<Void> deleteImports(@PathVariable Long id) {
        log.debug("REST request to delete Imports : {}", id);
        importsRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
