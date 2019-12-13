package plitkashop.domain;

import javax.persistence.*;

import java.io.Serializable;

/**
 * A CourseParts.
 */
@Entity
@Table(name = "course_parts")
public class CourseParts implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "npart")
    private Integer npart;

    @Column(name = "download_link")
    private String downloadLink;

    @Column(name = "download_description")
    private String downloadDescription;

    @Column(name = "test_name")
    private String testName;

    @Column(name = "test_question_count")
    private Integer testQuestionCount;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getNpart() {
        return npart;
    }

    public CourseParts npart(Integer npart) {
        this.npart = npart;
        return this;
    }

    public void setNpart(Integer npart) {
        this.npart = npart;
    }

    public String getDownloadLink() {
        return downloadLink;
    }

    public CourseParts downloadLink(String downloadLink) {
        this.downloadLink = downloadLink;
        return this;
    }

    public void setDownloadLink(String downloadLink) {
        this.downloadLink = downloadLink;
    }

    public String getDownloadDescription() {
        return downloadDescription;
    }

    public CourseParts downloadDescription(String downloadDescription) {
        this.downloadDescription = downloadDescription;
        return this;
    }

    public void setDownloadDescription(String downloadDescription) {
        this.downloadDescription = downloadDescription;
    }

    public String getTestName() {
        return testName;
    }

    public CourseParts testName(String testName) {
        this.testName = testName;
        return this;
    }

    public void setTestName(String testName) {
        this.testName = testName;
    }

    public Integer getTestQuestionCount() {
        return testQuestionCount;
    }

    public CourseParts testQuestionCount(Integer testQuestionCount) {
        this.testQuestionCount = testQuestionCount;
        return this;
    }

    public void setTestQuestionCount(Integer testQuestionCount) {
        this.testQuestionCount = testQuestionCount;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof CourseParts)) {
            return false;
        }
        return id != null && id.equals(((CourseParts) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "CourseParts{" +
            "id=" + getId() +
            ", npart=" + getNpart() +
            ", downloadLink='" + getDownloadLink() + "'" +
            ", downloadDescription='" + getDownloadDescription() + "'" +
            ", testName='" + getTestName() + "'" +
            ", testQuestionCount=" + getTestQuestionCount() +
            "}";
    }
}
