package com.marketing.api.controller;

import com.marketing.api.entity.Produit;
import com.marketing.api.serviceImpl.IProduit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(path = "/Produit", produces = MediaType.APPLICATION_JSON_VALUE)
@CrossOrigin(origins = "*")
public class ProduitController {

    @Autowired
    IProduit service;

    @GetMapping("/{id}")
    public Produit findById(@PathVariable Long id){
        return service.findById(id);
    }

    @PostMapping
    public void createProduit(@Valid @RequestBody Produit leProduit){
        service.create(leProduit);
    }

    @DeleteMapping
    public void deleteProduit(@Valid @RequestBody Produit leProduit){
        service.delete(leProduit);
    }

    @PutMapping
    public void updateProduit(@Valid @RequestBody Produit leProduit){
        service.update(leProduit);
    }

    @GetMapping
    public List<Produit> findAll(){
        return service.findAll();
    }
}
