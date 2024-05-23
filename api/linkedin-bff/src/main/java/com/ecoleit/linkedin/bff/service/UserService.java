package com.ecoleit.linkedin.bff.service;

import com.ecoleit.linkedin.bff.config.ConfigProperties;
import com.ecoleit.linkedin.bff.model.UserDTO;
import org.springframework.http.MediaType;
import org.springframework.web.client.RestClient;

public class UserService {
    private final RestClient restClient;
    private final ConfigProperties configProperties;

    public UserService(RestClient restClient, ConfigProperties configProperties) {
        this.restClient = restClient;
        this.configProperties = configProperties;
    }

    public  UserDTO getUserById(Integer userId) {
        try{
            UserDTO user = restClient
                    .get()
                    .uri("http://"
                            + configProperties
                            .getUserHost()
                            + ":8081/users/{userId}", userId)
                    .accept(MediaType.APPLICATION_JSON)
                    .retrieve()
                    .body(UserDTO.class);
            if (user != null) {
                return new UserDTO(
                        user.id(),
                        user.username(),
                        user.firstName(),
                        user.lastName(),
                        user.email(),
                        user.birthDate(),
                        user.registrationDate(),
                        user.lastLoginDate()
                );
            } else {
                return null;
            }
        }catch (Exception ex) {
            throw new IllegalArgumentException(ex.getMessage());
        }
    }
}
