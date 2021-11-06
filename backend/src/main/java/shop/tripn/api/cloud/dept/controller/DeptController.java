package shop.tripn.api.cloud.dept.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import shop.tripn.api.cloud.common.CommonController;
import shop.tripn.api.cloud.dept.domain.Dept;
import shop.tripn.api.cloud.dept.domain.DeptInfo;
import shop.tripn.api.cloud.dept.repository.DeptRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("/dept")
public class DeptController implements CommonController<Dept, Long> {

    private final DeptRepository deptRepository;

    @GetMapping("/find-depts-by-emp-count/{count}")
    public ResponseEntity<List<DeptInfo>>findDeptsByEmpCount(@PathVariable int count){
        return ResponseEntity.ok(deptRepository.findEmployeesByDeptNo(count).orElse(new ArrayList<>()));
    }

    @GetMapping("/count1")
    public ResponseEntity<List<DeptInfo>>aaa(){
        return ResponseEntity.ok(deptRepository.findDeptWhichHasMaxEmpCount());
    }

    @Override
    public ResponseEntity<List<Dept>> findAll() {
        return null;
    }

    @Override
    public ResponseEntity<Dept> getById(Long id) {
        return null;
    }

    @Override
    public ResponseEntity<String> save(Dept entity) {
        return null;
    }

    @Override
    public ResponseEntity<Optional<Dept>> findById(Long id) {
        return null;
    }

    @Override
    public ResponseEntity<Boolean> existsById(Long id) {
        return null;
    }

    @Override
    public ResponseEntity<Long> count() {
        return null;
    }

    @Override
    public ResponseEntity<String> deleteById(Long id) {
        return null;
    }
}
