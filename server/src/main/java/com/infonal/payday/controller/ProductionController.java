package com.infonal.payday.controller;

import com.infonal.payday.model.Product;
import com.infonal.payday.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProductionController {

    @Autowired
    ProductService productService;

    @GetMapping("/getAll-products")
    public List<Product> getCountries() {
        return productService.findAll();
    }

    @PostMapping("/save-product")
    public Product saveUser(@RequestBody Product product) {
        return productService.save(product);
    }
}
