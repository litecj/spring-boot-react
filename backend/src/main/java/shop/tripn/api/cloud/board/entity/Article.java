package shop.tripn.api.cloud.board.entity;

import com.sun.istack.NotNull;
import lombok.Data;
import org.springframework.stereotype.Component;
import shop.tripn.api.cloud.item.entity.Item;
import shop.tripn.api.cloud.user.entity.User;

import javax.persistence.*;

@Entity
@Data @Component @Table(name = "articles")
public class Article {

    @Id
    @Column(name = "article_id")
    @GeneratedValue
    private long articleId;

    @NotNull @Column(length = 50) private String title; //동일명일 시, (name = "title") 생략 가능
    @NotNull @Column(length =200) private String content;
    @NotNull @Column(name = "written_date", length = 20) private String writtenDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_id")
    private Item item;
}
