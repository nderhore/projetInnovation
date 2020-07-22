package com.marketing.api.entity;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name="promotion")
public class Promotion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idqrcode")
    private String id;

    private String description;

    private LocalDate dateDebut;

    private LocalDate dateFin;

    private Integer pourcentagePromo;

    @ManyToOne
    @JoinColumn(name="id_produit")
    private Produit leProduit;



    public Promotion() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getDateDebut() {
        return dateDebut;
    }

    public void setDateDebut(LocalDate dateDebut) {
        this.dateDebut = dateDebut;
    }

    public LocalDate getDateFin() {
        return dateFin;
    }

    public void setDateFin(LocalDate dateFin) {
        this.dateFin = dateFin;
    }

    public Integer getPourcentagePromo() {
        return pourcentagePromo;
    }

    public void setPourcentagePromo(Integer pourcentagePromo) {
        this.pourcentagePromo = pourcentagePromo;
    }


    public Produit getLeProduit() {
        return leProduit;
    }

    public void setLeProduit(Produit leProduit) {
        this.leProduit = leProduit;
    }

}
