package jandrodev.portfolio.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jandrodev.portfolio.backend.models.entity.Tecnologia;
import jandrodev.portfolio.backend.repositories.TecnologiaRepo;

@Service
public class TecnologiaService {
    
    @Autowired
    private TecnologiaRepo repo;

    public List<Tecnologia> getTecnologies() {

        return this.repo.findAll();
    }
}
