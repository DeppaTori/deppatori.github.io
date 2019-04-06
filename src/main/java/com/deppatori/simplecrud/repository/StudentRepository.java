package com.deppatori.simplecrud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.deppatori.simplecrud.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long>{

}
