package com.marketing.api.serviceImpl;

import com.marketing.api.entity.Produit;
import com.marketing.api.entity.Promotion;

import java.util.List;

public interface IProduit {

    Produit findById(Long id);

    void create(Produit leProduit);

    Produit findByName(String nom);

    void update(Produit leProduit);

    void delete (Produit  leProduit);

    List<Produit> findAll();


}
