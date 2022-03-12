package com.techelevator.controller;

import com.techelevator.dao.UserDao;
import com.techelevator.model.Review;
import com.techelevator.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class UserController {

    @Autowired
    UserDao userDAO;

    public UserController(UserDao userDAO) {
        this.userDAO = userDAO;
    }

    // **************************** GET ****************************
    @RequestMapping(path="/users", method= RequestMethod.GET)
    public List<User> showAllUsers(ModelMap modelHolder) {
        List<User> users = userDAO.getAllUsers();

        modelHolder.put("allUsers", users);
        return users;
    }

    @RequestMapping(path = "/users/{userId}", method = RequestMethod.GET)
    public User getUsers(@PathVariable Long userId) throws NotFoundException {
        return userDAO.getUserById(userId);
    }

}
