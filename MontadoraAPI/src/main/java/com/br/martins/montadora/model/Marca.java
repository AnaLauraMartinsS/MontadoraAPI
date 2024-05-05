package com.br.martins.montadora.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "marca")
public class Marca {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "idmarca")
    private Long idMarca;

    @Column(name = "nomemarca")
    private String nome;

}
