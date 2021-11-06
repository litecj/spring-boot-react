package shop.tripn.api.cloud.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import shop.tripn.api.cloud.user.entity.User;

import org.springframework.data.jpa.repository.Query;
import shop.tripn.api.cloud.user.entity.UserDTO;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @Transactional
//    @Query(value = "select * from users where users.user_name=:username and users.password=:password",
//            nativeQuery = true)
    @Query(value = "select u.user_id userId, u.email, u.name, u.password, u.reg_date regDate, u.user_name username from users u where u.user_name = :username and u.password = :password",
            nativeQuery = true)
    Optional<User> login(@Param("username") String username, @Param("password") String password);

    boolean existsByUsername(@Param("username") String username);
}
