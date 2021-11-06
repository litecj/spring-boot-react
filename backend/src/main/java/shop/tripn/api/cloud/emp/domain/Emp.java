package shop.tripn.api.cloud.emp.domain;

import com.sun.istack.NotNull;
import lombok.Data;
import org.hibernate.annotations.Proxy;
import org.springframework.stereotype.Component;
import shop.tripn.api.cloud.board.entity.Article;
import shop.tripn.api.cloud.dept.domain.Dept;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity @Proxy(lazy = false)
@Data @Component @Table(name = "emp")
public class Emp {

    @Id @Column private @NotNull long empno;
    @Column private @NotNull String ename;
    @Column private @NotNull String job;
    @Column private @NotNull String mgr;
    @Column private @NotNull String hiredate; //date 형 체크 필요
    @Column private @NotNull int sal;
    @Column private @NotNull int comm;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "deptno")
    private Dept dept;
}
