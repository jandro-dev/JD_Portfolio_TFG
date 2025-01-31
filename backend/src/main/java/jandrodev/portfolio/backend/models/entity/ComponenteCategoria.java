package jandrodev.portfolio.backend.models.entity;

import java.util.List;

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
public class ComponenteCategoria {

    @NonNull
    private String nombre;

    @NonNull
    private String link;

    private List<String> caracteristicas;
}
