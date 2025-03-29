package com.example.demo.Repo;

import com.example.demo.Model.VendorClass;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VendorRepo extends JpaRepository<VendorClass,Integer> {
}
