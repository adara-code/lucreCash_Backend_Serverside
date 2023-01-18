SHOW DATABASES;
USE lucre;

select * from users;
drop table person;

DESCRIBE users;

INSERT INTO users(userid,username,email,password,createdAt,updatedAt) VALUES(1,'lizzo','lizzo@gmail.com','123456','2022-12-06 11:58:33','2022-12-06 11:58:35');