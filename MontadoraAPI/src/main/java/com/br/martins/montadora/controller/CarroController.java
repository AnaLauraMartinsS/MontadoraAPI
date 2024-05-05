package com.br.martins.montadora.controller;

import com.br.martins.montadora.exception.CarroInvalidoException;
import com.br.martins.montadora.model.Carro;
import com.br.martins.montadora.service.CarroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/carro")
public class CarroController {

    @Autowired
    private CarroService carroService;

    @GetMapping
    public List<Carro> listarCarros(){
        return carroService.listarCarros();
    }

    @PostMapping("/cadastro")
    public ResponseEntity criarCarro(@RequestBody Carro carro) throws CarroInvalidoException {

        try {
            Carro carroNovo = carroService.criarCarro(carro);
            return ResponseEntity.ok(carroNovo);
        }
        catch (CarroInvalidoException exception){
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping("/{id}")
    public Carro atualizarCarro(@PathVariable Long id, @RequestBody Carro carro) throws CarroInvalidoException {
        return carroService.atualizarCarro(carro, id);
    }

    @DeleteMapping("/{id}")
    public String deletarCarro(@PathVariable Long id) throws CarroInvalidoException {
        carroService.deletarCarro(id);
        return "O carro foi deletado com sucesso";
    }
}
