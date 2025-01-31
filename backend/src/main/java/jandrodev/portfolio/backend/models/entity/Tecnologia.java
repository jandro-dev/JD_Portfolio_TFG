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
@Document(collection ="tecnologias")
public class Tecnologia {

    @NonNull
    private String nombre;

    @NonNull
    private Integer anios;

    @NonNull
    private Integer meses;

    @NonNull
    private String rutaImagen;
    
}
