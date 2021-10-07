CREATE TABLE `UsersTable` (
	`id` varchar(255) NOT NULL,
	`name` varchar(50) NOT NULL,
	`username` varchar(50) NOT NULL,
	`email` varchar(50) NOT NULL,
	`profilePic` varchar(50) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `PostsTable` (
	`id` varchar(255) NOT NULL,
	`authorID` varchar(255) NOT NULL,
	`title` varchar(75) NOT NULL,
	`metaTitle` varchar(150) NOT NULL,
	`tags` VARCHAR(150) NOT NULL,
	`content` TEXT(500) NOT NULL,
	`timestamp` TIMESTAMP(100) NOT NULL,
	`category` varchar(100) NOT NULL,
	`imge` varchar(100) NOT NULL,
	PRIMARY KEY (`id`)
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
	`content`` TEXT(500) NOT NULL,
	`timestamp` TIMESTAMP(100) NOT NULL,
	`commenterID` varchar(100) NOT NULL
);

CREATE TABLE `categoriesTable` (
	`id` varchar(255) NOT NULL,
	`title` varchar(255) NOT NULL,
	`description` TEXT(300) NOT NULL,
	`image` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `usersProfileDetailsTable` (
	`id` varchar(255) NOT NULL AUTO_INCREMENT,
	`userID` varchar(255) NOT NULL AUTO_INCREMENT,
	`sealOfApproval` FLOAT(100) NOT NULL,
	`featuredBlogs` VARCHAR(255) NOT NULL,
	`subcribersID` VARCHAR(255) NOT NULL,
	`subscribedPerson` VARCHAR(255) NOT NULL,
	`theme` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `usersSavedInfoTable` (
	`id` varchar(255) NOT NULL,
	`blogID` varchar(255) NOT NULL,
	`title` varchar(75) NOT NULL,
	`image` varchar(75) NOT NULL
);

CREATE TABLE `bidsTable` (
	`id` varchar(255) NOT NULL,
	`jobPostID` varchar(255) NOT NULL,
	`bidsPeople` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`id`)
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
	`value` varchar(255) NOT NULL
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














