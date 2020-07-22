package com.marketing.api.repository;

import com.marketing.api.entity.Produit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProduitRepository extends JpaRepository<Produit,Long> {

    @Query("select p.nomproduit FROM Produit p Where p.nomproduit = ?1")
    Produit findByName(String nom);
}
