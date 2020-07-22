package com.marketing.api.service;

import com.marketing.api.entity.Promotion;
import com.marketing.api.repository.PromotionRepository;
import com.marketing.api.serviceImpl.IPromotion;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PromotionService implements IPromotion {

    @Autowired
    private PromotionRepository repo;

    @Override
    public Promotion findById(String id) {
        try {
            return repo.findById(id).get();
        }
        catch(Exception e){
            return null;
        }
    }

    @Override
    public void create(Promotion laPromotion) {
        repo.save(laPromotion);
    }

    @Override
    public void update(Promotion laPromotion) {
        Promotion unePromotion = this.findById(laPromotion.getId());
        unePromotion.setDateDebut(laPromotion.getDateDebut());
        unePromotion.setDateFin(laPromotion.getDateFin());
        unePromotion.setDescription(laPromotion.getDescription());
        unePromotion.setLeProduit(laPromotion.getLeProduit());
        unePromotion.setPourcentagePromo(laPromotion.getPourcentagePromo());
        repo.save(unePromotion);
    }

    @Override
    public void delete(Promotion laPromotion) {
        repo.delete(laPromotion);
    }

    @Override
    public List<Promotion> findAll() {
        return repo.findAll();
    }
}
