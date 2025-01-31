package jandrodev.portfolio.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jandrodev.portfolio.backend.models.entity.Proyecto;
import jandrodev.portfolio.backend.repositories.ProyectoRepo;

@Service
public class ProyectoService {
    
    @Autowired
    private ProyectoRepo repo;

    public List<Proyecto> getProjects() {

        return this.repo.findAll();
    }
}
