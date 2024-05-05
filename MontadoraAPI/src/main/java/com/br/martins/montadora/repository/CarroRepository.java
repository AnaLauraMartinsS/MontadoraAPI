package com.br.martins.montadora.repository;

import com.br.martins.montadora.model.Carro;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarroRepository extends JpaRepository <Carro, Long> {

}
