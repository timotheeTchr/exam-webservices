CREATE TABLE user (
 id        integer AUTO_INCREMENT,
 firstName VARCHAR( 20 ),
 lastName  VARCHAR( 20 ),
 username  VARCHAR( 10 ),
 email     VARCHAR( 60 ),
 password  VARCHAR( 60 ), 
 PRIMARY KEY ( id )
);