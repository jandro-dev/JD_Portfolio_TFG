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
@Document(collection = "proyectos")
public class Proyecto {
    
    @NonNull
    private String nombre;

    @NonNull
    private String descripcion;

    @NonNull
    private String link;

    @NonNull
    private String rutaImagen;

    @NonNull
    private Boolean colaborativo;

}
