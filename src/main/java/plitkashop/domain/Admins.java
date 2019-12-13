package plitkashop.domain;

import javax.persistence.*;

import java.io.Serializable;

/**
 * A Admins.
 */
@Entity
@Table(name = "admins")
public class Admins implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "fio")
    private String fio;

    @Column(name = "phone")
    private String phone;

    @Column(name = "shop_address")
    private String shopAddress;

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

    public Admins fio(String fio) {
        this.fio = fio;
        return this;
    }

    public void setFio(String fio) {
        this.fio = fio;
    }

    public String getPhone() {
        return phone;
    }

    public Admins phone(String phone) {
        this.phone = phone;
        return this;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getShopAddress() {
        return shopAddress;
    }

    public Admins shopAddress(String shopAddress) {
        this.shopAddress = shopAddress;
        return this;
    }

    public void setShopAddress(String shopAddress) {
        this.shopAddress = shopAddress;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Admins)) {
            return false;
        }
        return id != null && id.equals(((Admins) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Admins{" +
            "id=" + getId() +
            ", fio='" + getFio() + "'" +
            ", phone='" + getPhone() + "'" +
            ", shopAddress='" + getShopAddress() + "'" +
            "}";
    }
}
