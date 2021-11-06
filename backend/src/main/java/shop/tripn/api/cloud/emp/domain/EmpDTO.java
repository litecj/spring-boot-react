package shop.tripn.api.cloud.emp.domain;

import lombok.*;


@Data
public class EmpDTO {

    private long deptNo;
    private int empCountPerDept;
    private int salSum;

//    select deptno deptNo, count(*) empCountPerDept, sum(sal) salSum
//    from emp
//    group by deptno
//    having count(*) > 4;
}