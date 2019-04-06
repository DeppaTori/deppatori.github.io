package com.deppatori.simplecrud.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.deppatori.simplecrud.model.Student;
import com.deppatori.simplecrud.service.StudentService;

@RestController
@RequestMapping("/")
public class StudentController {
	
	@Autowired
	StudentService studentService;

	@GetMapping
	public String index() {
		return "Hello";
	}
	
	@GetMapping("/all")
	public List<Student> studentList(){
		return studentService.findAll();
	}
	
	@GetMapping("/detail/{id}")
	public Student detail(@PathVariable("id") Long id) {
		return studentService.findOne(id);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteStudent(@PathVariable("id") Long id) {
		studentService.delete(id);
	}
	
	@PostMapping("/add")
	public Student saveStudent(@RequestBody Student student) {
		Student studentSaved = studentService.save(student);
		
//		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
//				.buildAndExpand(studentSaved.getId()).toUri();
//		return ResponseEntity.created(location).build();
		return studentSaved;
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<Object> updateStudent(@RequestBody Student student,@PathVariable("id") Long id){
		boolean updateStatus = studentService.update(student,id);
		if(!updateStatus) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.noContent().build();
	}
}
