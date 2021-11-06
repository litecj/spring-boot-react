package shop.tripn.api.cloud.dept.domain;

import com.sun.istack.NotNull;
import lombok.Data;
import org.hibernate.annotations.Proxy;
import org.springframework.stereotype.Component;
import shop.tripn.api.cloud.board.entity.Article;
import shop.tripn.api.cloud.emp.domain.Emp;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity @Proxy(lazy = false)
@Data @Component @Table(name = "dept")
public class Dept {

    @Id @Column private @NotNull long deptno;
    @Column private @NotNull String dname;
    @Column private @NotNull String loc;

    @OneToMany(mappedBy = "dept", fetch = FetchType.EAGER)
    private List<Emp> empList = new ArrayList<>();
}
