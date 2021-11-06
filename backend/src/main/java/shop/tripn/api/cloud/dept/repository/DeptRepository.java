package shop.tripn.api.cloud.dept.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import shop.tripn.api.cloud.dept.domain.Dept;
import shop.tripn.api.cloud.dept.domain.DeptInfo;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;


public interface DeptRepository extends JpaRepository<Dept, Long> {

    @Query(value = "select deptno deptNo,\n" +
            "       (select dname from dept where dept.deptno = emp.deptno) as deptName,\n" +
            "       count(empno) as empCountPerDept\n" +
            "from emp\n" +
            "group by deptno\n" +
            "having count(deptno) = (select count(deptno) \n" +
            "                           from emp group by deptno order by count(*) desc limit 1)", nativeQuery = true)
    List<DeptInfo> findDeptWhichHasMaxEmpCount();


    @Query(value = "select deptno deptNo,  " +
            "(select dname from dept where dept.deptno = emp.deptno) deptName, count(*) empCountPerDept, sum(sal) salSum\n" +
            "from emp\n" +
            "group by deptno\n" +
            "having count(*)  > :count", nativeQuery = true)
    Optional<List<DeptInfo>> findEmployeesByDeptNo(@Param("count") int empCountPerDept);
}