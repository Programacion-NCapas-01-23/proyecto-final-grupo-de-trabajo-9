-- public.category definition

-- Drop table

-- DROP TABLE public.category;

CREATE TABLE public.category (
	"name" varchar NOT NULL,
	id int4 NOT NULL,
	CONSTRAINT category_pk PRIMARY KEY (id)
);

-- public."event" definition

-- Drop table

-- DROP TABLE public."event";

CREATE TABLE public."event" (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	title varchar NOT NULL,
	"date" date NOT NULL,
	"hour" time NOT NULL,
	duration varchar NOT NULL,
	sponsors varchar NOT NULL,
	artist varchar NOT NULL,
	main_image varchar NOT NULL,
	secondary_image varchar NOT NULL,
	id_category int4 NOT NULL,
	status bool NOT NULL DEFAULT true,
	CONSTRAINT event_pk PRIMARY KEY (id)
);


-- public."event" foreign keys

ALTER TABLE public."event" ADD CONSTRAINT event_fk FOREIGN KEY (id_category) REFERENCES public.category(id);

-- public.locality definition

-- Drop table

-- DROP TABLE public.locality;

CREATE TABLE public.locality (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	"name" varchar NOT NULL,
	price float4 NOT NULL,
	capacity int4 NOT NULL,
	id_event uuid NOT NULL,
	CONSTRAINT locality_pk PRIMARY KEY (id)
);


-- public.locality foreign keys

ALTER TABLE public.locality ADD CONSTRAINT locality_fk FOREIGN KEY (id_event) REFERENCES public."event"(id);

-- public."permission" definition

-- Drop table

-- DROP TABLE public."permission";

CREATE TABLE public."permission" (
	"permission" varchar NOT NULL,
	id int4 NOT NULL,
	CONSTRAINT permission_pk PRIMARY KEY (id)
);
-- public."role" definition

-- Drop table

-- DROP TABLE public."role";

CREATE TABLE public."role" (
	"role" varchar NOT NULL,
	id int4 NOT NULL,
	CONSTRAINT role_pk PRIMARY KEY (id)
);

-- public.role_permission definition

-- Drop table

-- DROP TABLE public.role_permission;

CREATE TABLE public.role_permission (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	id_permission int4 NOT NULL,
	id_role int4 NOT NULL,
	CONSTRAINT role_permission_pk PRIMARY KEY (id)
);


-- public.role_permission foreign keys

ALTER TABLE public.role_permission ADD CONSTRAINT role_permission_fk FOREIGN KEY (id_role) REFERENCES public."role"(id);
ALTER TABLE public.role_permission ADD CONSTRAINT role_permission_fk_1 FOREIGN KEY (id_permission) REFERENCES public."permission"(id);

-- public.sale definition

-- Drop table

-- DROP TABLE public.sale;

CREATE TABLE public.sale (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	id_user uuid NOT NULL,
	date_purchase timestamp NOT NULL,
	amount_tickets_purchased int4 NOT NULL,
	id_ticket uuid NOT NULL,
	total_amount int4 NOT NULL,
	CONSTRAINT sale_pk PRIMARY KEY (id)
);


-- public.sale foreign keys

ALTER TABLE public.sale ADD CONSTRAINT sale_fk FOREIGN KEY (id_user) REFERENCES public.client(id);
ALTER TABLE public.sale ADD CONSTRAINT sale_fk_1 FOREIGN KEY (id_ticket) REFERENCES public.ticket(id);

-- public.ticket definition

-- Drop table

-- DROP TABLE public.ticket;

CREATE TABLE public.ticket (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	status bool NOT NULL,
	id_event uuid NULL,
	CONSTRAINT ticket_pk PRIMARY KEY (id)
);


-- public.ticket foreign keys

ALTER TABLE public.ticket ADD CONSTRAINT ticket_fk FOREIGN KEY (id_event) REFERENCES public."event"(id);

-- public."token" definition

-- Drop table

-- DROP TABLE public."token";

CREATE TABLE public."token" (
	code uuid NOT NULL DEFAULT gen_random_uuid(),
	"content" varchar NOT NULL,
	active bool NOT NULL DEFAULT true,
	"timestamp" timestamp NULL DEFAULT CURRENT_TIMESTAMP,
	user_code uuid NULL,
	CONSTRAINT token_pk PRIMARY KEY (code)
);


-- public."token" foreign keys

ALTER TABLE public."token" ADD CONSTRAINT token_fk FOREIGN KEY (user_code) REFERENCES public.client(id) ON DELETE CASCADE ON UPDATE CASCADE;

-- public.transfer definition

-- Drop table

-- DROP TABLE public.transfer;

CREATE TABLE public.transfer (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	transfer_date timestamp NOT NULL,
	id_user_issuer uuid NOT NULL,
	id_user_receptor uuid NOT NULL,
	id_ticket uuid NOT NULL,
	CONSTRAINT transfer_pk PRIMARY KEY (id)
);


-- public.transfer foreign keys

ALTER TABLE public.transfer ADD CONSTRAINT transfer_fk FOREIGN KEY (id_user_issuer) REFERENCES public.client(id);
ALTER TABLE public.transfer ADD CONSTRAINT transfer_fk_1 FOREIGN KEY (id_user_receptor) REFERENCES public.client(id);
ALTER TABLE public.transfer ADD CONSTRAINT transfer_fk_2 FOREIGN KEY (id_ticket) REFERENCES public.ticket(id);

-- public.client definition

-- Drop table

-- DROP TABLE public.client;

CREATE TABLE public.client (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	"name" varchar NOT NULL,
	email varchar NOT NULL,
	"password" varchar NOT NULL,
	active bool NOT NULL DEFAULT true,
	CONSTRAINT user_pk PRIMARY KEY (id),
	CONSTRAINT user_un UNIQUE (email)
);

-- public.user_role definition

-- Drop table

-- DROP TABLE public.user_role;

CREATE TABLE public.user_role (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	id_user uuid NOT NULL,
	id_role int4 NOT NULL,
	status bool NOT NULL,
	CONSTRAINT user_role_pk PRIMARY KEY (id)
);


-- public.user_role foreign keys

ALTER TABLE public.user_role ADD CONSTRAINT user_role_fk FOREIGN KEY (id_role) REFERENCES public."role"(id);
ALTER TABLE public.user_role ADD CONSTRAINT user_role_fk_1 FOREIGN KEY (id_user) REFERENCES public.client(id);

-- Add Role

INSERT INTO public."role"
("role", id)
VALUES('Cliente', 1);

INSERT INTO public."role"
("role", id)
VALUES('Admin', 2);

INSERT INTO public."role"
("role", id)
VALUES('Moderador', 3);

INSERT INTO public."role"
("role", id)
VALUES('SysAdmin', 4);

INSERT INTO public."role"
("role", id)
VALUES('LectorQR', 5);

-- Add Category

INSERT INTO public.category
("name", id)
VALUES('Danza', 1);

INSERT INTO public.category
("name", id)
VALUES('Deportes', 2);

INSERT INTO public.category
("name", id)
VALUES('Conferencia', 3);

INSERT INTO public.category
("name", id)
VALUES('Teatro', 4);

INSERT INTO public.category
("name", id)
VALUES('Concierto', 5);

