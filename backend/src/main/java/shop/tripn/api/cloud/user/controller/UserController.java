package shop.tripn.api.cloud.user.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import shop.tripn.api.cloud.user.entity.User;
import shop.tripn.api.cloud.user.entity.UserSerializer;
import shop.tripn.api.cloud.user.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController @RequiredArgsConstructor @RequestMapping("/users")
public class UserController {
    private final UserService userService;

    @GetMapping("/login")
    public ResponseEntity<String>login(@RequestBody UserSerializer user){
        System.out.println("리액트에서 넘어온 정보 :" + user.toString());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
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

//    @GetMapping("/user/{id}")
//    public Optional<User> findById(@PathVariable long id){
//        return userService.findById(id);
//    }

}
