package com.br.martins.montadora.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "cor")
public class Cor {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "idcor")
    private Long idCor;

    @Column(name = "nomecor")
    private String nome;

}
