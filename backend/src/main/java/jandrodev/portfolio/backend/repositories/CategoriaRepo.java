package jandrodev.portfolio.backend.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import jandrodev.portfolio.backend.models.entity.CategoriaSetup;

public interface CategoriaRepo extends MongoRepository<CategoriaSetup,String> {
    
}
