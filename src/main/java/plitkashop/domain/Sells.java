package plitkashop.domain;

import javax.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;

/**
 * A Sells.
 */
@Entity
@Table(name = "sells")
public class Sells implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "date")
    private LocalDate date;

    @Column(name = "count")
    private Integer count;

    @Column(name = "total_price")
    private Double totalPrice;

    @Column(name = "client_counts")
    private Integer clientCounts;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public Sells date(LocalDate date) {
        this.date = date;
        return this;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Integer getCount() {
        return count;
    }

    public Sells count(Integer count) {
        this.count = count;
        return this;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    public Double getTotalPrice() {
        return totalPrice;
    }

    public Sells totalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
        return this;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public Integer getClientCounts() {
        return clientCounts;
    }

    public Sells clientCounts(Integer clientCounts) {
        this.clientCounts = clientCounts;
        return this;
    }

    public void setClientCounts(Integer clientCounts) {
        this.clientCounts = clientCounts;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Sells)) {
            return false;
        }
        return id != null && id.equals(((Sells) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Sells{" +
            "id=" + getId() +
            ", date='" + getDate() + "'" +
            ", count=" + getCount() +
            ", totalPrice=" + getTotalPrice() +
            ", clientCounts=" + getClientCounts() +
            "}";
    }
}
