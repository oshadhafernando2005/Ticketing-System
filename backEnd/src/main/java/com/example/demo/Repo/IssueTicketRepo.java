package com.example.demo.Repo;

import com.example.demo.Model.IssueTickets;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IssueTicketRepo extends JpaRepository<IssueTickets,Integer> {

}
