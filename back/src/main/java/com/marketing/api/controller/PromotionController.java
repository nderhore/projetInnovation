package com.marketing.api.controller;

import com.marketing.api.entity.Promotion;
import com.marketing.api.serviceImpl.IPromotion;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(path = "/Promotion", produces = MediaType.APPLICATION_JSON_VALUE)
@CrossOrigin(origins = "*")
public class PromotionController {

    @Autowired
    IPromotion service;

    @GetMapping("/{id}")
    public Promotion findById(@PathVariable String id){
        return service.findById(id);
    }

    @PostMapping
    public void createPromotion(@Valid @RequestBody Promotion laPromotion){
        service.create(laPromotion);
    }

    @DeleteMapping
    public void deletePromotion(@Valid @RequestBody Promotion laPromotion){
        service.delete(laPromotion);
    }

    @PutMapping
    public void updatePromotion(@Valid @RequestBody Promotion laPromotion){
        service.update(laPromotion);
    }

    @GetMapping
    public List<Promotion> findAll(){
        return service.findAll();
    }


}
