package com.br.martins.montadora.repository;

import com.br.martins.montadora.model.Cor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CorRepository extends JpaRepository<Cor, Long> {
    Optional<Cor>findByNome(String nome);

}
