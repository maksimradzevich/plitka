package plitkashop.domain;

import javax.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;

/**
 * A Dostavka.
 */
@Entity
@Table(name = "dostavka")
public class Dostavka implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "date")
    private LocalDate date;

    @Column(name = "name")
    private String name;

    @Column(name = "count")
    private Integer count;

    @Column(name = "price")
    private Double price;

    @Column(name = "buyer_phone")
    private String buyerPhone;

    @Column(name = "buyer_address")
    private String buyerAddress;

    @Column(name = "buyer_fio")
    private String buyerFio;

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

    public Dostavka date(LocalDate date) {
        this.date = date;
        return this;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getName() {
        return name;
    }

    public Dostavka name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getCount() {
        return count;
    }

    public Dostavka count(Integer count) {
        this.count = count;
        return this;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    public Double getPrice() {
        return price;
    }

    public Dostavka price(Double price) {
        this.price = price;
        return this;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getBuyerPhone() {
        return buyerPhone;
    }

    public Dostavka buyerPhone(String buyerPhone) {
        this.buyerPhone = buyerPhone;
        return this;
    }

    public void setBuyerPhone(String buyerPhone) {
        this.buyerPhone = buyerPhone;
    }

    public String getBuyerAddress() {
        return buyerAddress;
    }

    public Dostavka buyerAddress(String buyerAddress) {
        this.buyerAddress = buyerAddress;
        return this;
    }

    public void setBuyerAddress(String buyerAddress) {
        this.buyerAddress = buyerAddress;
    }

    public String getBuyerFio() {
        return buyerFio;
    }

    public Dostavka buyerFio(String buyerFio) {
        this.buyerFio = buyerFio;
        return this;
    }

    public void setBuyerFio(String buyerFio) {
        this.buyerFio = buyerFio;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Dostavka)) {
            return false;
        }
        return id != null && id.equals(((Dostavka) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Dostavka{" +
            "id=" + getId() +
            ", date='" + getDate() + "'" +
            ", name='" + getName() + "'" +
            ", count=" + getCount() +
            ", price=" + getPrice() +
            ", buyerPhone='" + getBuyerPhone() + "'" +
            ", buyerAddress='" + getBuyerAddress() + "'" +
            ", buyerFio='" + getBuyerFio() + "'" +
            "}";
    }
}
