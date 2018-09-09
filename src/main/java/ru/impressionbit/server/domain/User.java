package ru.impressionbit.server.domain;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import javax.persistence.*;

@Entity
@Table(name = "USER")
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Integer id;

    @Column(name = "NAME")
    private String name;

    @Column(name = "ROLE")
    private String role;

    @Column(name = "PASSWORD")
    private String password;

}
