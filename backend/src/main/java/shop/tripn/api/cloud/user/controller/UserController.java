package shop.tripn.api.cloud.user.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import shop.tripn.api.cloud.user.entity.User;
import shop.tripn.api.cloud.user.entity.UserSerializer;
import shop.tripn.api.cloud.user.service.UserService;

import java.util.Optional;

@RestController @RequiredArgsConstructor
public class UserController {
    private final UserService userService;

//  //1차 방법 : Serializer 미사용 방법
//     @GetMapping("/user/{id}")
//    public Optional<User> findById(@PathVariable long id){
//        return userService.findById(id);
//    }

    @GetMapping("/user/{id}")
    public ResponseEntity<UserSerializer> getById(@PathVariable long id) throws JsonProcessingException {
        User user = userService.findById(id).get();
        UserSerializer userSerializer = UserSerializer.builder()
                .userId(user.getUserId())
                .username(user.getUsername())
                .password(user.getPassword())
                .name(user.getName())
                .email(user.getEmail())
                .regDate(user.getRegDate())
                .build();
        return new ResponseEntity<>(userSerializer, HttpStatus.OK);
    }

}
