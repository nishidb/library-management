package com.sts.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sts.entity.Role;

@Repository
public interface RoleDao extends CrudRepository<Role, String> {

}
