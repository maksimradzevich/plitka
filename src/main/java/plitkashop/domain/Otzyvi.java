package plitkashop.domain;

import javax.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;

/**
 * A Otzyvi.
 */
@Entity
@Table(name = "otzyvi")
public class Otzyvi implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "client_fio")
    private String clientFio;

    @Column(name = "text")
    private String text;

    @Column(name = "item_name")
    private String itemName;

    @Column(name = "date")
    private LocalDate date;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getClientFio() {
        return clientFio;
    }

    public Otzyvi clientFio(String clientFio) {
        this.clientFio = clientFio;
        return this;
    }

    public void setClientFio(String clientFio) {
        this.clientFio = clientFio;
    }

    public String getText() {
        return text;
    }

    public Otzyvi text(String text) {
        this.text = text;
        return this;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getItemName() {
        return itemName;
    }

    public Otzyvi itemName(String itemName) {
        this.itemName = itemName;
        return this;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public LocalDate getDate() {
        return date;
    }

    public Otzyvi date(LocalDate date) {
        this.date = date;
        return this;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Otzyvi)) {
            return false;
        }
        return id != null && id.equals(((Otzyvi) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Otzyvi{" +
            "id=" + getId() +
            ", clientFio='" + getClientFio() + "'" +
            ", text='" + getText() + "'" +
            ", itemName='" + getItemName() + "'" +
            ", date='" + getDate() + "'" +
            "}";
    }
}
