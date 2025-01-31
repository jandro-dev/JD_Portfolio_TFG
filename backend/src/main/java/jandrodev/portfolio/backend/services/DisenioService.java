package jandrodev.portfolio.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jandrodev.portfolio.backend.models.entity.Disenio;
import jandrodev.portfolio.backend.repositories.DisenioRepo;

@Service
public class DisenioService {
    
    @Autowired
    private DisenioRepo repo;

    public List<Disenio> getDesigns() {

        return this.repo.findAll();
    }
}
