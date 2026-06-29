package com.queueless.repository;

import com.queueless.entity.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
public interface TokenRepository
        extends JpaRepository<Token, Long> {
                List<Token> findByEmail(String email);
}