package com.example.studentproject.studentproject.repository;

import com.example.studentproject.studentproject.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long>, JpaSpecificationExecutor<Student> {
    Optional<Student> findByEmailAndPassword(String email, String password);

    List<Student> findByNameIgnoreCase(String name);
    List<Student> findBySurnameIgnoreCase(String surname);
    List<Student> findByEmailIgnoreCase(String email);
    List<Student> findByJobIgnoreCase(String job);
    List<Student> findByAge(int age);


    /*
    @Query("SELECT s FROM Student s WHERE LOWER(s.name) = LOWER(:name)")
    List<Student> findByNameIgnoreCase(@Param("name") String name);

    @Query("SELECT s FROM Student s WHERE LOWER(s.surname) = LOWER(:surname)")
    List<Student> findBySurnameIgnoreCase(@Param("surname") String surname);

    @Query("SELECT s FROM Student s WHERE s.age = :age")
    List<Student> findByAge(@Param("age") int age);

    @Query("SELECT s FROM Student s WHERE LOWER(s.email) = LOWER(:email)")
    List<Student> findByEmailIgnoreCase(@Param("email") String email);

    @Query("SELECT s FROM Student s WHERE Lower(s.job)=LOWER(:job)")
    List<Student> findByJobIgnoreCase(@Param("job") String job);

    @Query("SELECT s FROM Student s WHERE s.id=:id")
    Optional<Student> findById(@Param("id") Long id);

    // Birden fazla kriter ile arama
    @Query("SELECT s FROM Student s WHERE " +
            "(LOWER(s.name) = LOWER(:name) OR :name IS NULL) AND " +
            "(LOWER(s.surname) = LOWER(:surname) OR :surname IS NULL) AND " +
            "(s.age = :age OR :age IS NULL) AND " +
            "(LOWER(s.email) = LOWER(:email) OR :email IS NULL) AND " +
            "(LOWER(s.job) = LOWER(:job) OR :job IS NULL) AND " +
            "(s.id = :id OR :id IS NULL)")
    List<Student> findByMultipleCriteria(@Param("name") String name,
                                         @Param("surname") String surname,
                                         @Param("age") Integer age,
                                         @Param("email") String email,
                                         @Param("job") String job,
                                         @Param("id") Long id);


*/












//    @Query("SELECT s FROM Student s WHERE s.email = :email")
//    Optional<Student> findByEmail(@Param("email") String email);
//
//    @Query("SELECT s FROM Student s WHERE s.name = :name")
//    List<Student> findByName(@Param("name") String name);

}
