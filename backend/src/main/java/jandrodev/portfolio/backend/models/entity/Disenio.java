package jandrodev.portfolio.backend.models.entity;

import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@RequiredArgsConstructor
@Document(collection = "disenios")
public class Disenio {
    
     @NonNull
     private String nombre;

     @NonNull
     private String fecha;

     @NonNull
     private String link;

     @NonNull
     private String rutaImagen;

}
