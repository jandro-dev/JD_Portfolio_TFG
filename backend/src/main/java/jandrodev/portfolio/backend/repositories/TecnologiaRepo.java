package jandrodev.portfolio.backend.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import jandrodev.portfolio.backend.models.entity.Tecnologia;

public interface TecnologiaRepo extends MongoRepository<Tecnologia,String> {
    
}
