package jandrodev.portfolio.backend.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jandrodev.portfolio.backend.models.entity.Disenio;
import jandrodev.portfolio.backend.models.entity.Proyecto;
import jandrodev.portfolio.backend.models.entity.Tecnologia;
import jandrodev.portfolio.backend.services.DisenioService;
import jandrodev.portfolio.backend.services.ProyectoService;
import jandrodev.portfolio.backend.services.TecnologiaService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api")
public class ApiController {
    
    @Autowired
    private TecnologiaService tecnologiaService;
    @Autowired
    private DisenioService disenioService;
    @Autowired
    private ProyectoService proyectoService;
    
    @GetMapping("/tecnologias")
    public ResponseEntity<List<Tecnologia>> tecnologies() {
        return ResponseEntity.status(HttpStatus.OK).body(tecnologiaService.getTecnologies());
    }

    @GetMapping("/diseños")
    public ResponseEntity<List<Disenio>> designs() {
        return ResponseEntity.status(HttpStatus.OK).body(disenioService.getDesigns());
    }

    @GetMapping("/proyectos")
    public ResponseEntity<List<Proyecto>> projects() {
        return ResponseEntity.status(HttpStatus.OK).body(proyectoService.getProjects());
    }
    
}
