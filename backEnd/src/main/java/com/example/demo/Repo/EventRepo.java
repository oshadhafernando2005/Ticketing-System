package com.example.demo.Repo;

import com.example.demo.Model.Configuration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface EventRepo extends JpaRepository<Configuration, Integer> { // Use Integer for the ID type
}
