package com.deppatori.simplecrud.service;

import java.util.List;

import com.deppatori.simplecrud.model.Student;

public interface StudentService {
	public List<Student> findAll();
	public Student findOne(Long id);
	public void delete(Long id);
	public Student save(Student student);
	public boolean update(Student student,Long id);
}
