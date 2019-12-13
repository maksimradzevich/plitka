package plitkashop.domain;

import javax.persistence.*;

import java.io.Serializable;

/**
 * A Shops.
 */
@Entity
@Table(name = "shops")
public class Shops implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "address")
    private String address;

    @Column(name = "time")
    private String time;

    @Column(name = "name")
    private String name;

    @Column(name = "phone")
    private String phone;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAddress() {
        return address;
    }

    public Shops address(String address) {
        this.address = address;
        return this;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getTime() {
        return time;
    }

    public Shops time(String time) {
        this.time = time;
        return this;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getName() {
        return name;
    }

    public Shops name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public Shops phone(String phone) {
        this.phone = phone;
        return this;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Shops)) {
            return false;
        }
        return id != null && id.equals(((Shops) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Shops{" +
            "id=" + getId() +
            ", address='" + getAddress() + "'" +
            ", time='" + getTime() + "'" +
            ", name='" + getName() + "'" +
            ", phone='" + getPhone() + "'" +
            "}";
    }
}
