package ru.impressionbit.server.service;

import org.springframework.stereotype.Repository;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;
import org.springframework.transaction.annotation.Transactional;

import ru.impressionbit.server.domain.User;

@Repository
@Transactional
public class ORMUserService {

    @PersistenceContext
    private EntityManager entityManager;

    public List<User> queryFindAllUsersJPA() {
        String query = "from User order by id";
        TypedQuery<User> typedQuery = entityManager.createQuery(query, User.class);
        return typedQuery.getResultList();
    }

    public List<User> insertUser(String name, String role, String password) {
        String qlString = "insert into User (name, role, password) values (?,?,?)";
        entityManager.createNativeQuery(qlString)
                .setParameter(1, name)
                .setParameter(2, role)
                .setParameter(3, password)
                .executeUpdate();
        return queryFindAllUsersJPA();
    }

    public List<User> deleteUserById(Integer id) {
        String query = "delete from User u where u.id=:id";
        entityManager.createQuery(query)
                .setParameter("id", id)
                .executeUpdate();
        return queryFindAllUsersJPA();
    }

}
