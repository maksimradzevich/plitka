package plitkashop.domain;

import javax.persistence.*;

import java.io.Serializable;

/**
 * A Plitka.
 */
@Entity
@Table(name = "plitka")
public class Plitka implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "price")
    private Double price;

    @Column(name = "color")
    private String color;

    @Column(name = "material")
    private String material;

    @Column(name = "size")
    private String size;

    @Column(name = "shop_address")
    private String shopAddress;

    @Column(name = "count")
    private Integer count;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public Plitka name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public Plitka price(Double price) {
        this.price = price;
        return this;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getColor() {
        return color;
    }

    public Plitka color(String color) {
        this.color = color;
        return this;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getMaterial() {
        return material;
    }

    public Plitka material(String material) {
        this.material = material;
        return this;
    }

    public void setMaterial(String material) {
        this.material = material;
    }

    public String getSize() {
        return size;
    }

    public Plitka size(String size) {
        this.size = size;
        return this;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getShopAddress() {
        return shopAddress;
    }

    public Plitka shopAddress(String shopAddress) {
        this.shopAddress = shopAddress;
        return this;
    }

    public void setShopAddress(String shopAddress) {
        this.shopAddress = shopAddress;
    }

    public Integer getCount() {
        return count;
    }

    public Plitka count(Integer count) {
        this.count = count;
        return this;
    }

    public void setCount(Integer count) {
        this.count = count;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Plitka)) {
            return false;
        }
        return id != null && id.equals(((Plitka) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Plitka{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", price=" + getPrice() +
            ", color='" + getColor() + "'" +
            ", material='" + getMaterial() + "'" +
            ", size='" + getSize() + "'" +
            ", shopAddress='" + getShopAddress() + "'" +
            ", count=" + getCount() +
            "}";
    }
}
