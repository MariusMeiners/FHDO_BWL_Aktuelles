
-- Database: aktuelles_db

-- DROP DATABASE aktuelles_db;

CREATE DATABASE aktuelles_db
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

    -- Table: public."user"

-- DROP TABLE public."user";

CREATE TABLE public."user"
(
    email character varying(100) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT user_pkey PRIMARY KEY (email)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."user"
    OWNER to postgres;