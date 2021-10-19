package shop.tripn.api.cloud.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import shop.tripn.api.cloud.user.entity.User;

import org.springframework.data.jpa.repository.Query;
import shop.tripn.api.cloud.user.entity.UserDTO;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @Transactional
    @Query(value = "select * from users where users.user_name=:username and users.password=:password",
            nativeQuery = true)
//    @Query(value = "select user_name, password from users where users.user_name=:username and users.password=:password",
//            nativeQuery = true)
    String login(@Param("username") String username, @Param("password") String password);
}
