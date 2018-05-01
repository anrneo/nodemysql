create database news_portal_nodejs;

use news_portal_nodejs;

create table news(
 id_news int not null primary key auto_increment,
 title varchar(100),
 news text,
 data_created timestamp default current_timestamp);

describe news;

insert into news(title, news) values("mi titutlo", "contenido de noticias");

select * from news;
