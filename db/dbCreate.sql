use burgers_db;
create table burgers (
	id int auto_increment,
	burger_name varchar(255) not null,
	devoured BOOL,
	date TIMESTAMP,
	primary key(id)
);