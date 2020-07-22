package com.marketing.api.serviceImpl;

import com.marketing.api.entity.Promotion;

import java.util.List;

public interface IPromotion {

    Promotion findById(String id);

    void create(Promotion laPromotion);

    void update(Promotion laPromotion);

    void delete (Promotion  laPromotion);

    List<Promotion> findAll();

}
