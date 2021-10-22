package shop.tripn.api.cloud.user.entity;

import com.sun.istack.NotNull;
import lombok.Data;
import org.hibernate.annotations.Proxy;
import org.springframework.stereotype.Component;
import shop.tripn.api.cloud.board.entity.Article;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity @Proxy(lazy = false)
@Data @Component @Table(name = "users")
public class User {

    @Id
    @Column(name = "user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userId;


    @Column(name = "user_name") private @NotNull String username;
    @Column private @NotNull String password;
    @Column private @NotNull String name;
    @Column private @NotNull String email;
    @Column(name = "reg_date") @NotNull private String regDate;
    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER)
    private List<Article> articleList = new ArrayList<>();

}
