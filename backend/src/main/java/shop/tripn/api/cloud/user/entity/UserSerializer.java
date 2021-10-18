package shop.tripn.api.cloud.user.entity;

import lombok.*;
import shop.tripn.api.cloud.board.entity.Article;

import java.util.List;

//@AllArgsConstructor
@Getter @Setter @ToString
public class UserSerializer {
    private static final long serialVersionUID = 1L;


    private long userId;
    private String username;
    private String password;
    private String name;
    private String email;
    private String regDate;
    private List<Article> articleList;

    @Builder
    UserSerializer(long userId, String username, String password, String name,
                   String email, String regDate ){
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.name = name;
        this.email = email;
        this.regDate = regDate;
    }
    @Builder
    UserSerializer(long userId, String username, String password, String name,
                   String email, String regDate, List<Article> articleList ){
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.name = name;
        this.email = email;
        this.regDate = regDate;
        this.articleList = articleList;
    }

}
