package shop.tripn.api.cloud.emp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import shop.tripn.api.cloud.emp.domain.Emp;
import shop.tripn.api.cloud.emp.domain.EmpDTO;

import java.util.HashMap;
import java.util.Optional;

public interface EmpRepository extends JpaRepository<Emp, Long> {
    @Query(value = "select deptno, count(*) count, sum(sal) sal_sum\n" +
            "from emp\n" +
            "group by deptno\n" +
            "having count(*) > :count;", nativeQuery = true)
    Optional<HashMap<String,String>> findEmployeesByDeptNo(@Param("count") int empCountPerDept);
}
