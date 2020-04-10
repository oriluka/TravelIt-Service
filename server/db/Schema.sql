create database mariahservice;

\c mariahservice


create table hosts (
  id serial primary key,
  zip int not null,
  name varchar(25) not null,
  image varchar(255) not null,
  city varchar(25) not null,
  state varchar(20) not null,
  body text,
  interaction text,
  superhost varchar(16),
  verified varchar(16),
  monthJoined varchar(16) not null,
  yearJoined int not null,
  review int not null,
  rulesCheckin varchar(25) not null,
  rulesCheckout varchar(25) not null,
  rulesBody text,
  locationBody text,
  locationGettingAround varchar(255)
);


create table propsandthings(
  ptId serial primary key,
  zip int not null,
  propType varchar(255),
  propImage varchar(255),
  propRating int,
  propReview int,
  propDescription text,
  propCost varchar(16),
  thingImage varchar(255),
  thingType varchar(255),
  thingDescription text,
  thingCost varchar(16)
);

Helpful Stuff:


COPY hosts(zip, name, image, city, state, body, interaction, superhost, verified, monthJoined, yearJoined, review, rulesCheckin, rulesCheckout, rulesBody, locationBody, locationGettingAround)
FROM '/Users/oriluka/Desktop/CS/hackreactor/SDC/mariah-service/hosts5.csv'
DELIMITER '^' CSV HEADER;

COPY propsandthings(zip, propType, propImage, propRating, propReview, propDescription, propCost, thingImage, thingType, thingDescription, thingCost)
FROM '/Users/oriluka/Desktop/CS/hackreactor/SDC/mariah-service/propsandthings5.csv'
DELIMITER '^' CSV HEADER;
SELECT
   COUNT(*)
FROM
   hosts
WHERE
   condition;