package plitkashop.domain;

import javax.persistence.*;

import java.io.Serializable;

/**
 * A Solders.
 */
@Entity
@Table(name = "solders")
public class Solders implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "fio")
    private String fio;

    @Column(name = "phone")
    private String phone;

    @Column(name = "address")
    private String address;

    @Column(name = "shop")
    private String shop;

    @Column(name = "plitka_count")
    private String plitkaCount;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFio() {
        return fio;
    }

    public Solders fio(String fio) {
        this.fio = fio;
        return this;
    }

    public void setFio(String fio) {
        this.fio = fio;
    }

    public String getPhone() {
        return phone;
    }

    public Solders phone(String phone) {
        this.phone = phone;
        return this;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public Solders address(String address) {
        this.address = address;
        return this;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getShop() {
        return shop;
    }

    public Solders shop(String shop) {
        this.shop = shop;
        return this;
    }

    public void setShop(String shop) {
        this.shop = shop;
    }

    public String getPlitkaCount() {
        return plitkaCount;
    }

    public Solders plitkaCount(String plitkaCount) {
        this.plitkaCount = plitkaCount;
        return this;
    }

    public void setPlitkaCount(String plitkaCount) {
        this.plitkaCount = plitkaCount;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Solders)) {
            return false;
        }
        return id != null && id.equals(((Solders) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Solders{" +
            "id=" + getId() +
            ", fio='" + getFio() + "'" +
            ", phone='" + getPhone() + "'" +
            ", address='" + getAddress() + "'" +
            ", shop='" + getShop() + "'" +
            ", plitkaCount='" + getPlitkaCount() + "'" +
            "}";
    }
}
