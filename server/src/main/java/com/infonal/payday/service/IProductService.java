package com.infonal.payday.service;

import com.infonal.payday.model.Product;

import java.util.List;

public interface IProductService {

    Product save(Product production);

    List<Product> findAll();
}
