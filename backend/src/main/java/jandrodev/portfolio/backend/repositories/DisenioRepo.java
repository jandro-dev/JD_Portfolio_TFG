package jandrodev.portfolio.backend.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import jandrodev.portfolio.backend.models.entity.Disenio;

public interface DisenioRepo extends MongoRepository<Disenio,String>{
    
}
