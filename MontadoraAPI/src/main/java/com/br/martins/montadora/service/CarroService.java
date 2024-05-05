package com.br.martins.montadora.service;


import com.br.martins.montadora.exception.CarroInvalidoException;
import com.br.martins.montadora.model.Carro;
import com.br.martins.montadora.repository.CarroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarroService {

    @Autowired
    private CarroRepository carroRepository;

    @Autowired
    private CorService corService;

    @Autowired
    private MarcaService marcaService;

    public List<Carro> listarCarros() {
        return carroRepository.findAll();
    }

    public Carro criarCarro(Carro carro) throws CarroInvalidoException {

        if (carro.getNomeCarro() == null && carro.getAnoFabricacaoCarro() == null &&
                carro.getAnoModeloCarro() == null && carro.getModeloCarro() == null) {
            throw new CarroInvalidoException("Carro inválido");
        }

        Carro carro1 = new Carro();
        carro1.setNomeCarro(carro.getNomeCarro());
        carro1.setAnoFabricacaoCarro(carro.getAnoFabricacaoCarro());
        carro1.setAnoModeloCarro(carro.getAnoModeloCarro());
        carro1.setModeloCarro(carro.getModeloCarro());
        carro1.setCores(this.corService.criarCor(carro.getCores()));
        carro1.setMarca(this.marcaService.criarMarca(carro.getMarca()));

        this.carroRepository.save(carro1);

        return carro1;
    }

    public Carro atualizarCarro(Carro carroAtualizado, Long id) throws CarroInvalidoException{
        Optional<Carro> carroModificado = carroRepository.findById(id);
        if(!carroModificado.isPresent()) throw new CarroInvalidoException("O id do carro não existe");
        Carro carro = carroModificado.get();
        if(carroAtualizado.getNomeCarro() != null) carro.setNomeCarro(carroAtualizado.getNomeCarro());
        if(carroAtualizado.getAnoFabricacaoCarro() != null) carro.setAnoFabricacaoCarro(carroAtualizado.getAnoFabricacaoCarro());
        if(carroAtualizado.getAnoModeloCarro() != null) carro.setAnoModeloCarro(carroAtualizado.getAnoModeloCarro());
        if(carroAtualizado.getModeloCarro() != null) carro.setModeloCarro(carroAtualizado.getModeloCarro());
        if (!carroAtualizado.getCores().isEmpty()) carro.setCores(this.corService.criarCor(carroAtualizado.getCores()));
        if (carroAtualizado.getMarca() != null) carro.setMarca(this.marcaService.criarMarca(carroAtualizado.getMarca()));

        return carro;
    }

    public void deletarCarro(Long id) throws CarroInvalidoException {
        Optional<Carro> carroDeletado = carroRepository.findById(id);
        if(!carroDeletado.isPresent()) throw new CarroInvalidoException("Carro não encontrado");
        carroRepository.deleteById(id);
    }

}
