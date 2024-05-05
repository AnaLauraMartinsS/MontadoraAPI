package com.br.martins.montadora.service;

import com.br.martins.montadora.model.Cor;
import com.br.martins.montadora.repository.CorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CorService {

    @Autowired
    CorRepository corRepository;

    public List<Cor> criarCor(List<Cor> corList) {
        List<Cor> cores = new ArrayList<Cor>();
        for (Cor cor : corList){
            Optional<Cor> corExistente = corRepository.findByNome(cor.getNome());
            if(corExistente.isPresent()){
                cor.setIdCor(corExistente.get().getIdCor());
                corRepository.save(cor);
                cores.add(cor);
            }else {
                Cor corNova = corRepository.save(cor);
                cores.add(corNova);
            }
        }
        return cores;
    }
}
