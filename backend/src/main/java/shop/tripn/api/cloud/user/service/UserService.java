package shop.tripn.api.cloud.user.service;


import shop.tripn.api.cloud.user.entity.User;
import shop.tripn.api.cloud.user.entity.UserDTO;

import java.util.Optional;

public interface UserService {
    Optional<User> findById(long userId);  //Optional : 있을 수도 있고, 없을 수도 있다.
    Optional<User> login(String username, String password);
}
