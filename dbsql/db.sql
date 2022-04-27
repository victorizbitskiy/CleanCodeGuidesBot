CREATE TABLE IF NOT EXISTS public.configurations
(
    chat_id integer NOT NULL,
    menu_lang character varying(2) COLLATE pg_catalog."default",
    program_lang character varying(100) COLLATE pg_catalog."default",
    content_lang character varying(2) COLLATE pg_catalog."default",
    content_adaptation character varying(39) COLLATE pg_catalog."default",
    CONSTRAINT chats_pkey PRIMARY KEY (chat_id)
);

CREATE TABLE IF NOT EXISTS public.schedules
(
    chat_id integer NOT NULL,
    menu_lang character varying(2) COLLATE pg_catalog."default" NOT NULL,
    program_lang character varying(100) COLLATE pg_catalog."default" NOT NULL,
    content_lang character varying(2) COLLATE pg_catalog."default" NOT NULL,
    content_adaptation character varying(39) COLLATE pg_catalog."default" NOT NULL,
    name character varying(1000) COLLATE pg_catalog."default",
    rule character varying(1000) COLLATE pg_catalog."default",
    last_section_id integer,
    CONSTRAINT schedules_pkey PRIMARY KEY (chat_id, menu_lang, program_lang, content_lang, content_adaptation)
);