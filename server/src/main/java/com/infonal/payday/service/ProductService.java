package com.infonal.payday.service;

import com.infonal.payday.model.Product;
import com.infonal.payday.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService {

    @Autowired
    ProductRepository produtionRepository;

    @Override
    public Product save(Product production) {
        return produtionRepository.save(production);
    }

    @Override
    public List<Product> findAll() {
        return (List<Product>) produtionRepository.findAll();
    }


}
