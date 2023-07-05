
CREATE TABLE public."token" (
code uuid NOT NULL DEFAULT gen_random_uuid(),
"content" varchar NOT NULL,
active boolean NOT NULL DEFAULT true,
"timestamp" timestamp without time zone NULL DEFAULT CURRENT_TIMESTAMP,
user_code uuid NULL,
CONSTRAINT token_pk PRIMARY KEY (code),
CONSTRAINT token_fk FOREIGN KEY (user_code) REFERENCES public."user"(id) ON DELETE CASCADE ON UPDATE CASCADE
);



-- public."access" foreign keys

--ALTER TABLE public."access" ADD CONSTRAINT access_fk FOREIGN KEY (user_id) REFERENCES public."user"(id) ON DELETE CASCADE ON UPDATE CASCADE;
-- public.category definition

-- Drop table

-- DROP TABLE public.category;

CREATE TABLE public.category (
	description varchar NOT NULL,
	status varchar NOT NULL,
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
	involved varchar NOT NULL,
	id_user uuid NOT NULL,
	main_image varchar NOT NULL,
	secondary_image varchar NOT NULL,
	id_locality uuid NOT NULL,
	id_category int4 NOT NULL,
	CONSTRAINT event_pk PRIMARY KEY (id)
);


-- public."event" foreign keys

ALTER TABLE public."event" ADD CONSTRAINT event_fk FOREIGN KEY (id_category) REFERENCES public.category(id);
ALTER TABLE public."event" ADD CONSTRAINT event_fk_1 FOREIGN KEY (id_locality) REFERENCES public.locality(id);
ALTER TABLE public."event" ADD CONSTRAINT event_fk_2 FOREIGN KEY (id_user) REFERENCES public."user"(id);

-- public.locality definition

-- Drop table

-- DROP TABLE public.locality;

CREATE TABLE public.locality (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	"name" varchar NOT NULL,
	price float4 NOT NULL,
	capacity int4 NOT NULL,
	CONSTRAINT locality_pk PRIMARY KEY (id)
);

-- public."permission" definition

-- Drop table

-- DROP TABLE public."permission";

CREATE TABLE public."permission" (
	"permission" varchar NOT NULL,
	status bool NOT NULL,
	id int4 NOT NULL,
	CONSTRAINT permission_pk PRIMARY KEY (id)
);
-- public."role" definition

-- Drop table

-- DROP TABLE public."role";

CREATE TABLE public."role" (
	"role" varchar NOT NULL,
	id_role_permission uuid NOT NULL,
	id int4 NOT NULL,
	CONSTRAINT role_pk PRIMARY KEY (id)
);


-- public."role" foreign keys

ALTER TABLE public."role" ADD CONSTRAINT role_fk FOREIGN KEY (id_role_permission) REFERENCES public.role_permission(id);

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
	CONSTRAINT sale_pk PRIMARY KEY (id)
);


-- public.sale foreign keys

ALTER TABLE public.sale ADD CONSTRAINT sale_fk FOREIGN KEY (id_user) REFERENCES public."user"(id);

-- public.ticket definition

-- Drop table

-- DROP TABLE public.ticket;

CREATE TABLE public.ticket (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	description varchar NOT NULL,
	status bool NOT NULL,
	id_event uuid NULL,
	id_sale uuid NULL,
	CONSTRAINT ticket_pk PRIMARY KEY (id)
);


-- public.ticket foreign keys

ALTER TABLE public.ticket ADD CONSTRAINT ticket_fk FOREIGN KEY (id_event) REFERENCES public."event"(id);
ALTER TABLE public.ticket ADD CONSTRAINT ticket_fk_1 FOREIGN KEY (id_sale) REFERENCES public.sale(id);

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

ALTER TABLE public.transfer ADD CONSTRAINT transfer_fk FOREIGN KEY (id_user_issuer) REFERENCES public."user"(id);
ALTER TABLE public.transfer ADD CONSTRAINT transfer_fk_1 FOREIGN KEY (id_user_receptor) REFERENCES public."user"(id);
ALTER TABLE public.transfer ADD CONSTRAINT transfer_fk_2 FOREIGN KEY (id_ticket) REFERENCES public.ticket(id);

-- public."user" definition

-- Drop table

-- DROP TABLE public."user";

CREATE TABLE public."user" (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	"name" varchar NOT NULL,
	email varchar NOT NULL,
	"password" varchar NOT NULL,
	active boolean NOT NULL DEFAULT true,
	id_role int4 NOT NULL DEFAULT 1,
	CONSTRAINT user_pk PRIMARY KEY (id),
	CONSTRAINT user_un UNIQUE (email)
);



-- public."user" foreign keys

ALTER TABLE public."user" ADD CONSTRAINT user_fk FOREIGN KEY (id_role) REFERENCES public."role"(id);
--ALTER TABLE public."user" ADD CONSTRAINT user_fk_1 FOREIGN KEY (id_access) REFERENCES public."access"(id);