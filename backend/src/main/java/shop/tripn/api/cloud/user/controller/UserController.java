package shop.tripn.api.cloud.user.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import shop.tripn.api.cloud.common.CommonController;
import shop.tripn.api.cloud.user.entity.User;
import shop.tripn.api.cloud.user.entity.UserDTO;
import shop.tripn.api.cloud.user.repository.UserRepository;
import shop.tripn.api.cloud.user.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RequiredArgsConstructor @RestController @RequestMapping("/users")
public class UserController implements CommonController<User, Long> {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    private final UserService userService;
    private final UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity<User> login (@RequestBody User user){
//        Optional<User> returnUser = userService.login(user.getUsername(), user.getPassword());
//        System.out.println("마리아DB에서 넘어온 정보 :" + returnUser.toString());
//        return ResponseEntity.ok(userService.login(user.getUsername(), user.getPassword()).get()); // get은 없는 경우를 받아들이지 않음.
        return ResponseEntity.ok(userService.login(user.getUsername(), user.getPassword()).orElse(new User()));
    }

//    @PostMapping("/login")
//    public ResponseEntity<Optional<User>> login (@RequestBody User user){
////        Optional<User> returnUser = userService.login(user.getUsername(), user.getPassword());
////        System.out.println("마리아DB에서 넘어온 정보 :" + returnUser.toString());
//        return new ResponseEntity<>(userService.login(user.getUsername(), user.getPassword()), HttpStatus.OK);
//    }

//    @PostMapping("/login")
//    public ResponseEntity<String> login (@RequestBody User user){
//        System.out.println("리액트에서 넘어온 정보 :" + user.toString());
//        return new ResponseEntity<>(HttpStatus.OK);
//    }

//    @PostMapping()
//    public ResponseEntity<Optional<User>> join  (@RequestBody User user){
//        logger.info(String.format("User Join Info is %s", user.toString()));
//        return null;
//    }


//    @GetMapping("/{id}")
//    public ResponseEntity<UserDTO> getById(@PathVariable long id) {
//        User user = userService.findById(id).get();
//        UserDTO userDTO = UserDTO.builder()
//                .userId(user.getUserId())
//                .username(user.getUsername())
//                .password(user.getPassword())
//                .name(user.getName())
//                .email(user.getEmail())
//                .regDate(user.getRegDate())
//                .build();
//        return new ResponseEntity<>(userDTO, HttpStatus.OK);
//    }

    @Override
    public ResponseEntity<List<User>> findAll() {
        return null;
    }
//    public ResponseEntity<List<User>> findAll() {
//        return ResponseEntity.ok(userRepository.findAll());
//    }

    @GetMapping("/list/{page}")
    public ResponseEntity<List<User>> getList(@PathVariable int page) {
//        System.out.println(":::::::::: PAGENUMBER :::::::::::" + page);
        return ResponseEntity.ok(userRepository.findAll());
    }

    @Override
    @GetMapping("/{id}")
    public ResponseEntity<User> getById(@PathVariable Long id) {
        return ResponseEntity.ok(userRepository.getById(id)); }

    @PostMapping("")
    @Override
    public ResponseEntity<String> save(@RequestBody User user) {
        logger.info(String.format("회원가입 정보: %s", user.toString()));
        userRepository.save(user);
        return ResponseEntity.ok("SUCCESS");
    }
    @PutMapping()
    public ResponseEntity<User> update(@RequestBody User user) {
        logger.info(String.format("회원수정 정보: %s", user.toString()));
        userRepository.save(user);
        return ResponseEntity.ok(userRepository.getById(user.getUserId()));
    }
    @Override
    public ResponseEntity<Optional<User>> findById(Long id) {
        return ResponseEntity.ok(userRepository.findById(id));
    }

    @GetMapping("/existsById/{id}")
    @Override
    public ResponseEntity<Boolean> existsById(Long id) {
        System.out.println(" id " + id);
        boolean b = userRepository.existsById(id);
        System.out.println(" Exist : "+b);
        return ResponseEntity.ok(b);
//        return ResponseEntity.ok(userRepository.existsById(id));
    }

    @GetMapping("/exist/{username}")
    public ResponseEntity<Boolean> exist(@PathVariable String username) {
        return ResponseEntity.ok(userRepository.existsByUsername(username));}

    @Override
    public ResponseEntity<Long> count() {
        return ResponseEntity.ok(userRepository.count());
    }

    @DeleteMapping("/{id}")
    @Override
    public ResponseEntity<String> deleteById(@PathVariable Long id) {
        userRepository.deleteById(id);
        return ResponseEntity.ok("SUCCESS");
    }


//    @GetMapping("/user/{id}")
//    public Optional<User> findById(@PathVariable long id){
//        return userService.findById(id);
//    }

}
