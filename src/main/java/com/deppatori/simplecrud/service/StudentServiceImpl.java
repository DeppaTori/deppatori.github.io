package com.deppatori.simplecrud.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.deppatori.simplecrud.exception.StudentNotFoundException;
import com.deppatori.simplecrud.model.Student;
import com.deppatori.simplecrud.repository.StudentRepository;

@Service
public class StudentServiceImpl implements StudentService{
	
	@Autowired
	StudentRepository studentRepository;

	@Override
	public List<Student> findAll() {
		return studentRepository.findAll();
	}

	@Override
	public Student findOne(Long id) {
		Optional<Student> student = studentRepository.findById(id);
		if(!student.isPresent()) {
			throw new StudentNotFoundException("id-"+id);
		}
		return student.get();
	}

	@Override
	public void delete(Long id) {
		studentRepository.deleteById(id);
		
	}

	@Override
	public Student save(Student student) {
		return studentRepository.save(student);
		
	}

	@Override
	public boolean update(Student student,Long id) {
		Optional<Student> findStudent = studentRepository.findById(id);
		if(findStudent.isPresent()) {
			student.setId(id);
			studentRepository.save(student);
			return true;
		}
		return false;
	}

}
