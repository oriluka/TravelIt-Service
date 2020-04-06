CREATE KEYSPACE mariahservice
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

DESCRIBE mariahservice

CREATE TABLE hosts(
  id uuid,
  zip varchar,
  name varchar,
  image varchar,
  city varchar,
  state varchar,
  body text,
  interaction text,
  superhost varchar,
  verified varchar,
  monthJoined varchar,
  yearJoined int,
  review int,
  rulesCheckin varchar,
  rulesCheckout varchar,
  rulesBody text,
  locationBody text,
  locationGettingAround varchar,
    primary key (id)
)
select


COPY hosts(zip, name, image, city, state, body, interaction, superhost, verified, monthJoined, yearJoined, review, rulesCheckin, rulesCheckout, rulesBody, locationBody, locationGettingAround)
FROM '/Users/oriluka/Desktop/CS/hackreactor/SDC/mariah-service/hosts.csv'
WITH DELIMITER '^' CSV HEADER;


COPY mariahservice.hosts (id,zip,name,image,city,state,body,interaction,superhost,verified,monthJoined,yearJoined,review,rulesCheckin,rulesCheckout,rulesBody,locationBody,locationGettingAround) FROM '/Users/oriluka/Desktop/CS/hackreactor/SDC/mariah-service/hosts2.csv' WITH DELIMITER='^' AND HEADER=TRUE;