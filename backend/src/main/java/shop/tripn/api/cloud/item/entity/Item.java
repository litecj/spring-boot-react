package shop.tripn.api.cloud.item.entity;

import com.sun.istack.NotNull;
import lombok.Data;
import org.springframework.stereotype.Component;
import shop.tripn.api.cloud.board.entity.Article;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data @Component @Table(name = "items")
public class Item {


    @Id
    @Column(name = "item_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long itemId;


    @NotNull @Column(name = "item_brand") private String itemBrand;
    @NotNull @Column(name = "item_name") private String itemName;
    @NotNull @Column(name = "item_color") private String itemColor;
    @NotNull @Column(name = "released_date") private String releasedDate;

    @OneToMany(mappedBy = "item", fetch = FetchType.EAGER)
    private List<Article> articleList = new ArrayList<>();

}
