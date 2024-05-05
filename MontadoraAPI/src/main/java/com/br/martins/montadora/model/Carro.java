package com.br.martins.montadora.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
@Table(name = "carro")
public class Carro {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "idcarro")
    private Long idCarro;

    @Column(name = "nomecarro")
    private String nomeCarro;

    @Column(name = "anofabricacaocarro")
    private Integer anoFabricacaoCarro;

    @Column(name = "anomodelocarro")
    private Integer anoModeloCarro;

    @Column(name = "modelocarro")
    private String modeloCarro;

    @ManyToOne
    @JoinColumn(name = "marca_idmarca")
    private Marca marca;

    @ManyToMany
    @JoinTable(name = "carro_cor",
            joinColumns = @JoinColumn(name = "carro_idcarro"),
            inverseJoinColumns = @JoinColumn(name = "cor_idcor"))
    private List<Cor> cores;

}
