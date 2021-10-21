package shop.tripn.api.cloud.common;

import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface CommonController <R, T> {
//    List<R> findAll();
////    List<T> findAll(Sort sort);
//    R getById(T id);  // 무조건 있으니 찾을 때,
//    void save(R entity);
//    Optional<R> findById(T id);  // 없을 수 도 있으나, 찾을 때,
//    boolean existsById(T id);
//    long count();
//    void deleteById(T id);
    ResponseEntity<List<R>> findAll();
    ResponseEntity<R> getById(T id);
    ResponseEntity<String> save(R entity);
    ResponseEntity<Optional<R>> findById(T id);
    ResponseEntity<Boolean> existsById(T id);
    ResponseEntity<Long> count();
    ResponseEntity<String> deleteById(T id);
}
