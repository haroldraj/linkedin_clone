package com.ecoleit.linkedin.post.repository;

import com.ecoleit.linkedin.post.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PostRepository extends JpaRepository<Post, Integer> {
    Optional<Post> findByProfileId(Integer profileId);
}
