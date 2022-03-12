package com.techelevator.dao;

import com.techelevator.model.User;

import java.util.List;

public interface UserDao {
    List<User> getAllUsers();

    User getUserById(Long userId);

    boolean create(String username, String password, String role);

    User findByUsername(String username);

    int findIdByUsername(String username);

//    List<User> getUsers(Long userId);
}
