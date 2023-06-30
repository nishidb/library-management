package com.sts.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sts.entity.User;

@Repository
public interface UserDao extends CrudRepository<User, String> {
}
