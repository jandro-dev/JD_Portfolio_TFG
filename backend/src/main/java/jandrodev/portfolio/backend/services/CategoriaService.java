package jandrodev.portfolio.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jandrodev.portfolio.backend.models.entity.CategoriaSetup;
import jandrodev.portfolio.backend.repositories.CategoriaRepo;

@Service
public class CategoriaService {
    
    @Autowired
    private CategoriaRepo repo;

    public List<CategoriaSetup> getCategories() {

        return this.repo.findAll();
    }
}
