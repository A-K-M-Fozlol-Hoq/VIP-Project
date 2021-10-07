CREATE TABLE `UsersTable` (
  `id` varchar(255) PRIMARY KEY NOT NULL,
  `name` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `profilePic` varchar(50) NOT NULL
);

CREATE TABLE `PostsTable` (
  `id` varchar(255) PRIMARY KEY NOT NULL,
  `authorID` varchar(255) NOT NULL,
  `title` varchar(75) NOT NULL,
  `metaTitle` varchar(150) NOT NULL,
  `tags` VARCHAR(150) NOT NULL,
  `content` TEXT(500) NOT NULL,
  `timestamp` TIMESTAMP(100) NOT NULL,
  `category` varchar(100) NOT NULL,
  `imge` varchar(100) NOT NULL
);

CREATE TABLE `worksTable` (
  `id` varchar(255) NOT NULL,
  `authorID` varchar(255) NOT NULL,
  `title` varchar(75) NOT NULL,
  `metaTitle` varchar(150) NOT NULL,
  `tags` VARCHAR(150) NOT NULL,
  `content` TEXT(500) NOT NULL,
  `timestamp` TIMESTAMP(100) NOT NULL,
  `category` varchar(50) NOT NULL,
  `imge` varchar(100) NOT NULL
);

CREATE TABLE `jobsTable` (
  `id` varchar(255) NOT NULL,
  `authorID` varchar(255) NOT NULL,
  `title` varchar(75) NOT NULL,
  `metaTitle` varchar(150) NOT NULL,
  `tags` VARCHAR(150) NOT NULL,
  `content` TEXT(500) NOT NULL,
  `timestamp` TIMESTAMP(100) NOT NULL,
  `category` varchar(50) NOT NULL,
  `imge` varchar(100) NOT NULL
);

CREATE TABLE `commentsTable` (
  `id` varchar(255) NOT NULL,
  `postID` varchar(255) NOT NULL,
  `content` TEXT(500) NOT NULL,
  `timestamp` TIMESTAMP(100) NOT NULL,
  `commenterID` varchar(100) NOT NULL
);

CREATE TABLE `categoriesTable` (
  `id` varchar(255) PRIMARY KEY NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` TEXT(300) NOT NULL,
  `image` varchar(255) NOT NULL
);

CREATE TABLE `usersProfileDetailsTable` (
  `id` varchar(255) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `userID` varchar(255) NOT NULL AUTO_INCREMENT,
  `sealOfApproval` FLOAT(100) NOT NULL,
  `featuredBlogs` VARCHAR(255) NOT NULL,
  `subcribersID` VARCHAR(255) NOT NULL,
  `subscribedPerson` VARCHAR(255) NOT NULL,
  `theme` varchar(255) NOT NULL
);

CREATE TABLE `usersSavedInfoTable` (
  `id` varchar(255) NOT NULL,
  `blogID` varchar(255) NOT NULL,
  `title` varchar(75) NOT NULL,
  `image` varchar(75) NOT NULL
);

CREATE TABLE `bidsTable` (
  `id` varchar(255) PRIMARY KEY NOT NULL,
  `jobPostID` varchar(255) NOT NULL,
  `bidsPeople` VARCHAR(255) NOT NULL
);

CREATE TABLE `transactions` (
  `id` varchar(255) NOT NULL,
  `timestamp` TIMESTAMP(255) NOT NULL,
  `sender` varchar(255) NOT NULL,
  `receiver` varchar(255) NOT NULL,
  `cardInfo` INT(255) NOT NULL,
  `amount` INT(255) NOT NULL,
  `currency` varchar(255) NOT NULL
);

CREATE TABLE `trendingCategory` (
  `key` varchar(255) NOT NULL,
  `value` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL
);

CREATE TABLE `orderDetails` (
  `id` varchar(255) NOT NULL,
  `buyerID` varchar(255) NOT NULL,
  `sellerID` varchar(255) NOT NULL,
  `deadline` DATETIME(255) NOT NULL,
  `isComplete` BOOLEAN(50) NOT NULL,
  `timestamp` TIMESTAMP(50) NOT NULL,
  `description` TEXT(255) NOT NULL
);

CREATE TABLE `TaskIAmAssigning` (
  `id` varchar(255) NOT NULL,
  `buyerID` varchar(255) NOT NULL,
  `sellerID` varchar(255) NOT NULL,
  `deadline` DATETIME(255) NOT NULL,
  `isComplete` BOOLEAN(50) NOT NULL,
  `timestamp` TIMESTAMP(50) NOT NULL,
  `description` TEXT(255) NOT NULL
);

ALTER TABLE `UsersTable` ADD FOREIGN KEY (`id`) REFERENCES `commentsTable` (`commenterID`);

ALTER TABLE `UsersTable` ADD FOREIGN KEY (`id`) REFERENCES `PostsTable` (`authorID`);

ALTER TABLE `UsersTable` ADD FOREIGN KEY (`id`) REFERENCES `worksTable` (`authorID`);

ALTER TABLE `UsersTable` ADD FOREIGN KEY (`id`) REFERENCES `jobsTable` (`authorID`);

ALTER TABLE `trendingCategory` ADD FOREIGN KEY (`value`) REFERENCES `trendingCategory` (`key`);

ALTER TABLE `UsersTable` ADD FOREIGN KEY (`id`) REFERENCES `bidsTable` (`bidsPeople`);

ALTER TABLE `UsersTable` ADD FOREIGN KEY (`id`) REFERENCES `TaskIAmAssigning` (`buyerID`);

ALTER TABLE `UsersTable` ADD FOREIGN KEY (`id`) REFERENCES `TaskIAmAssigning` (`sellerID`);

ALTER TABLE `UsersTable` ADD FOREIGN KEY (`id`) REFERENCES `orderDetails` (`buyerID`);

ALTER TABLE `UsersTable` ADD FOREIGN KEY (`id`) REFERENCES `orderDetails` (`sellerID`);

ALTER TABLE `PostsTable` ADD FOREIGN KEY (`id`) REFERENCES `usersSavedInfoTable` (`blogID`);

ALTER TABLE `worksTable` ADD FOREIGN KEY (`id`) REFERENCES `usersSavedInfoTable` (`blogID`);

ALTER TABLE `jobsTable` ADD FOREIGN KEY (`id`) REFERENCES `usersSavedInfoTable` (`blogID`);

ALTER TABLE `UsersTable` ADD FOREIGN KEY (`id`) REFERENCES `usersProfileDetailsTable` (`userID`);

ALTER TABLE `UsersTable` ADD FOREIGN KEY (`id`) REFERENCES `transactions` (`sender`);

ALTER TABLE `UsersTable` ADD FOREIGN KEY (`id`) REFERENCES `transactions` (`receiver`);

ALTER TABLE `categoriesTable` ADD FOREIGN KEY (`id`) REFERENCES `jobsTable` (`category`);

ALTER TABLE `categoriesTable` ADD FOREIGN KEY (`id`) REFERENCES `worksTable` (`category`);

ALTER TABLE `categoriesTable` ADD FOREIGN KEY (`id`) REFERENCES `PostsTable` (`category`);
