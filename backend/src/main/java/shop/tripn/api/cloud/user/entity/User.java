package shop.tripn.api.cloud.user.entity;

import com.sun.istack.NotNull;
import lombok.Data;
import org.springframework.stereotype.Component;
import shop.tripn.api.cloud.board.entity.Article;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data @Component @Table(name = "users")
public class User {

    @Id
    @Column(name = "user_id")
    @GeneratedValue
    private long userId;


    @Column(name = "user_name") private @NotNull String username;
    @Column private @NotNull String password;
    @Column private @NotNull String name;
    @Column private @NotNull String email;
    @Column(name = "reg_date") @NotNull private String regDate;
    @OneToMany(mappedBy = "user")
    private List<Article> articleList = new ArrayList<>();

}
