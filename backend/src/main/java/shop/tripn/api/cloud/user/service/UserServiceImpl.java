package shop.tripn.api.cloud.user.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import shop.tripn.api.cloud.user.entity.User;
import shop.tripn.api.cloud.user.entity.UserDTO;
import shop.tripn.api.cloud.user.repository.UserRepository;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;


    @Override
    public Optional<User> findById(long userid) {
        return userRepository.findById(userid);
    }

    @Override
    public Optional<User> login(String username, String password) {
        return userRepository.login(username, password);
    }
}
