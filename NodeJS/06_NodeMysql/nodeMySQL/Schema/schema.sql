-- Just for reference

create database wealth_portfolio;
use wealth_portfolio;

create table userdata (
id int primary key auto_increment not null,
income int not null,
expense int not null,
savings int not null,
mon int not null,
yea int not null
);

alter table userdata auto_increment=101;

insert into userdata (income, expense, savings, mon, yea) values (50000, 40000, 10000, 1, 2022),
(40000, 40000, 00000, 2, 2022),
(50000, 30000, 20000, 3, 2022),
(50000, 20000, 30000, 4, 2022),
(50000, 35000, 15000, 5, 2022),
(60000, 40000, 20000, 6, 2022),
(60000, 30000, 30000, 7, 2022),
(50000, 40000, 10000, 8, 2022),
(50000, 10000, 40000, 9, 2022),
(50000, 45000, 05000, 10, 2022),
(50000, 25000, 25000, 11, 2022),
(50000, 50000, 00000, 12, 2022);

insert into userdata (income, expense, savings, mon, yea) values (50000, 40000, 10000, 1, 2023);
