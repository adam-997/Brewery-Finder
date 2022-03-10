BEGIN TRANSACTION;

DROP TABLE IF EXISTS users;
DROP SEQUENCE IF EXISTS seq_user_id;

CREATE SEQUENCE seq_user_id
  INCREMENT BY 1
  NO MAXVALUE
  NO MINVALUE
  CACHE 1;


CREATE TABLE users (
	user_id int DEFAULT nextval('seq_user_id'::regclass) NOT NULL,
	username varchar(50) NOT NULL,
	password_hash varchar(200) NOT NULL,
	role varchar(50) NOT NULL,
	CONSTRAINT PK_user PRIMARY KEY (user_id)
);

INSERT INTO users (username,password_hash,role) VALUES ('user','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','ROLE_USER');
INSERT INTO users (username,password_hash,role) VALUES ('admin','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','ROLE_ADMIN');

INSERT INTO users (username,password_hash,role) VALUES ('chex1','$2a$10$vX3rJJIg0THwgxz8h4ySB.SFRI2MZ.NTzzuzZE3o.JZF3egtZv7Pi','ROLE_BREWER');
INSERT INTO users (username,password_hash,role) VALUES ('chex2','$2a$10$lwBNYJyFGU7I51YYtS//BeOOMK1/PA51PMPSteGCvs6osnfIjybAO','ROLE_USER');
INSERT INTO users (username,password_hash,role) VALUES ('chex3','$2a$10$XbmshrBMZSiemO5yjhfH5e1AXOVFM6Ju06Xqx2BeWJmJtyi2A6LAy','ROLE_BREWER');
INSERT INTO users (username,password_hash,role) VALUES ('chex4','$2a$10$LlXal4oaCJHoizelNYetmONKXzz6X9s8f4ivPwTJso9Yq/zsc1ESi','ROLE_USER');
INSERT INTO users (username,password_hash,role) VALUES ('chex5','$2a$10$CQDwMkxhirYQzyDneHH41upHEDbL8.vcusVXaOvUER8Xt5U8u0pi6','ROLE_BREWER');
INSERT INTO users (username,password_hash,role) VALUES ('chex6','$2a$10$IXgvCOSBT.v0exgmN42Voud4yYSz4EyHN8HybK9Fww3MmDdghy4Fu','ROLE_USER');
INSERT INTO users (username,password_hash,role) VALUES ('chex7','$2a$10$8FWHtfRW.Ganouz/YHKKm.eK5y5HYySCRWhPmuOn4cYyFp4fdCfnO','ROLE_BREWER');
INSERT INTO users (username,password_hash,role) VALUES ('chex8','$2a$10$PioDauW.k6zBi4Q4d8Uo9eKy6XbxgZ0OkqQnKtQfLuwXfVMCiPzzy','ROLE_USER');
INSERT INTO users (username,password_hash,role) VALUES ('chex9','$2a$10$1fSFU8zdR.HhpNvM1ryIqeZgWTCWH2HKkUP2JaRDqaozQiUEyWUGC','ROLE_BREWER');
INSERT INTO users (username,password_hash,role) VALUES ('chex10','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','ROLE_USER');
INSERT INTO users (username,password_hash,role) VALUES ('chex11','$2a$10$TA2tJY8CaxgPDFOS5O8sau8AyfjPCYW1i4tCLJDKNWJnWYmB37CSG','ROLE_BREWER');


COMMIT TRANSACTION;
