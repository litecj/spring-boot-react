package shop.tripn.api.cloud.user.service;


import shop.tripn.api.cloud.user.entity.User;
import shop.tripn.api.cloud.user.entity.UserDTO;

import java.util.Optional;

public interface UserService {
    Optional<User> findById(long userId);
    String login(String username, String password);
}
