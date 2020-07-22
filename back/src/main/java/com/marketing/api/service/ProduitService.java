package com.marketing.api.service;

import com.marketing.api.entity.Produit;
import com.marketing.api.entity.Promotion;
import com.marketing.api.repository.ProduitRepository;
import com.marketing.api.serviceImpl.IProduit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProduitService implements IProduit {

    @Autowired
    private ProduitRepository repo;

    @Override
    public Produit findById(Long id) {
        try{
            return repo.findById(id).get();
        }
        catch(Exception e){
            return null;
        }
    }

    @Override
    public void create(Produit leProduit) {
        repo.save(leProduit);
    }

    @Override
    public Produit findByName(String nom) {
        return repo.findByName(nom);
    }

    @Override
    public void update(Produit leProduit) {
        Produit unProduit = this.findById(leProduit.getId());
        unProduit.setNomproduit(leProduit.getNomproduit());
        unProduit.setPrix(leProduit.getPrix());
        repo.save(unProduit);
    }

    @Override
    public void delete(Produit leProduit) {
        repo.delete(leProduit);
    }

    @Override
    public List<Produit> findAll() {
        return repo.findAll();
    }


}
