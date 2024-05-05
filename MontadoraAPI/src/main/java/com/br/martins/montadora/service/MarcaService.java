package com.br.martins.montadora.service;

import com.br.martins.montadora.model.Marca;
import com.br.martins.montadora.repository.MarcaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MarcaService {

    @Autowired
    private MarcaRepository marcaRepository;

    public Marca criarMarca(Marca marca){
       Optional<Marca> marcaExistente = marcaRepository.findByNome(marca.getNome());
        if(marcaExistente.isPresent()){
            marca.setIdMarca(marcaExistente.get().getIdMarca());
            marcaRepository.save(marca);
            return marca;
        }else {
            Marca marcaNova = marcaRepository.save(marca);
            return marcaNova;
        }
    }

}
