package jandrodev.portfolio.backend.models.entity;

import java.util.List;

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
@Document(collection = "categorias")
public class CategoriaSetup {

    @NonNull
    private String iconoCategoria;

    @NonNull
    private String nombreCategoria;

    @NonNull
    private List<ComponenteCategoria> componentes;
    
}
