package shop.tripn.api.cloud.user.service;


import shop.tripn.api.cloud.user.entity.User;

import java.util.Optional;

public interface UserService {
    Optional<User> findById(long userId);
}
