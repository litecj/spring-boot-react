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
    @Column(name = "userId")
    @GeneratedValue
    private long userId;

    @NotNull @Column(name = "user_name", length =50) private String username;
    @NotNull @Column(length = 10) private int password;
    @NotNull @Column(length = 50) private String name;
    @NotNull @Column(length = 50) private String email;
    @NotNull @Column(name = "reg_date", length = 20) private String regDate;

    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER)
    private List<Article> articleList = new ArrayList<>();

}
