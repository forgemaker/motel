DROP TABLE IF EXISTS `groups`;

#
# Table structure for table 'groups'
#

CREATE TABLE `groups` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `description` varchar(100) NOT NULL,
  `sorter` mediumint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Dumping data for table 'groups'
#

INSERT INTO `groups` (`id`, `name`, `description`, `sorter`) VALUES
     (1,'admin','Administrator', 1),
     (2,'members','General User', 2);

--
-- Table structure for table `motels`
--

DROP TABLE IF EXISTS `motels`;
CREATE TABLE IF NOT EXISTS `motels` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(64) NOT NULL,
  `url` varchar(128) DEFAULT NULL,
  `county` varchar(12) DEFAULT NULL,
  `district` varchar(12) DEFAULT NULL,
  `zipcode` varchar(5) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone_1` varchar(32) DEFAULT NULL,
  `phone_2` varchar(32) DEFAULT NULL,
  `fax` varchar(16) DEFAULT NULL,
  `contact` varchar(16) DEFAULT NULL,
  `mobile_1` varchar(32) DEFAULT NULL,
  `mobile_2` varchar(32) DEFAULT NULL,
  `commission` varchar(8) DEFAULT NULL,
  `contract_start` varchar(10) DEFAULT NULL,
  `contract_end` varchar(10) DEFAULT NULL,
  `rest_time_1` varchar(8) DEFAULT NULL,
  `rest_time_2` varchar(8) DEFAULT NULL,
  `stay_time_1` varchar(16) DEFAULT NULL,
  `stay_time_2` varchar(16) DEFAULT NULL,
  `introduction` varchar(140) DEFAULT NULL,
  `equipment` varchar(60) DEFAULT NULL,
  `feature` varchar(60) DEFAULT NULL,
  `raw_name` varchar(64) DEFAULT NULL,
  `image_url` varchar(128) DEFAULT NULL,
  `longitude` varchar(16) DEFAULT NULL,
  `latitude` varchar(16) DEFAULT NULL,
  `rank` decimal(2,1) DEFAULT 0.0,
  `add_time` int(11) NOT NULL,
  `edit_time` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `users`;

#
# Table structure for table 'users'
#

CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `motel_id` int(11) unsigned DEFAULT NULL,
  `ip_address` varbinary(16) NOT NULL,
  `nickname` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(80) NOT NULL,
  `salt` varchar(40) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `activation_code` varchar(40) DEFAULT NULL,
  `forgotten_password_code` varchar(40) DEFAULT NULL,
  `forgotten_password_time` int(11) unsigned DEFAULT NULL,
  `remember_code` varchar(40) DEFAULT NULL,
  `created_on` int(11) unsigned NOT NULL,
  `last_login` int(11) unsigned DEFAULT NULL,
  `active` tinyint(1) unsigned DEFAULT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `company` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `options` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `motel_id` (`motel_id`),
  FOREIGN KEY (`motel_id`) REFERENCES `motels` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


#
# Dumping data for table 'users'
#

INSERT INTO `users` (`id`, `ip_address`, `nickname`, `username`, `password`, `salt`, `email`, `activation_code`, `forgotten_password_code`, `created_on`, `last_login`, `active`, `first_name`, `last_name`, `company`, `phone`) VALUES
     ('1',0x7f000001, 'Administrator', 'administrator','59beecdf7fc966e2f17fd8f65a4a9aeb09d4a3d4','9462e8eee0','admin@admin.com','',NULL,'1268889823','1268889823','1', 'Admin','istrator','ADMIN','0');


DROP TABLE IF EXISTS `users_groups`;

#
# Table structure for table 'users_groups'
#

CREATE TABLE `users_groups` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) unsigned NOT NULL,
  `group_id` mediumint(8) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_users_groups_users1_idx` (`user_id`),
  KEY `fk_users_groups_groups1_idx` (`group_id`),
  CONSTRAINT `uc_users_groups` UNIQUE (`user_id`, `group_id`),
  CONSTRAINT `fk_users_groups_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_groups_groups1` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `users_groups` (`id`, `user_id`, `group_id`) VALUES
     (1,1,1),
     (2,1,2);


DROP TABLE IF EXISTS `login_attempts`;

#
# Table structure for table 'login_attempts'
#

CREATE TABLE `login_attempts` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `ip_address` varbinary(16) NOT NULL,
  `login` varchar(100) NOT NULL,
  `time` int(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `acl_resource`
--

DROP TABLE IF EXISTS `acl_resource`;
CREATE TABLE IF NOT EXISTS `acl_resource` (
  `id` mediumint(8) unsigned NOT NULL auto_increment,
  `parent_id` mediumint(8) default NULL,
  `resource_name` varchar(32) NOT NULL,
  `resource_description` varchar(64) NOT NULL,
  `resource_order` int(11) NOT NULL default '0',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

--
-- Table structure for table `acl`
--

DROP TABLE IF EXISTS `acl`;
CREATE TABLE IF NOT EXISTS `acl` (
  `id` mediumint(8) unsigned NOT NULL auto_increment,
  `group_id` mediumint(8) unsigned NOT NULL,
  `resource_id` mediumint(8) unsigned NOT NULL,
  `action` enum('allow','deny') NOT NULL,
  PRIMARY KEY  (`id`),
  KEY `group_id` (`group_id`),
  KEY `resource_id` (`resource_id`),
  FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`resource_id`) REFERENCES `acl_resource` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

--
-- Table structure for table `rooms`
--

DROP TABLE IF EXISTS `rooms`;
CREATE TABLE IF NOT EXISTS `rooms` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `motel_id` int(11) unsigned NOT NULL,
  `type` tinyint(1) unsigned default '0',
  `title` varchar(64) NOT NULL,
  `price_1` int(6) NOT NULL default '0',
  `price_2` int(6) NOT NULL default '0',
  `price_3` int(6) NOT NULL default '0',
  `raw_name` varchar(64) DEFAULT NULL,
  `image_url` varchar(128) DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `add_time` int(11) NOT NULL,
  `edit_time` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `motel_id` (`motel_id`),
  FOREIGN KEY (`motel_id`) REFERENCES `motels` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
CREATE TABLE IF NOT EXISTS `news` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `motel_id` int(11) unsigned NOT NULL,
  `type` tinyint(1) unsigned default '0',
  `title` varchar(64) NOT NULL,
  `description` text,
  `start_time` varchar(10) DEFAULT NULL,
  `end_time` varchar(10) DEFAULT NULL,
  `raw_name` varchar(64) DEFAULT NULL,
  `image_url` varchar(128) DEFAULT NULL,
  `add_time` int(11) NOT NULL,
  `edit_time` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `motel_id` (`motel_id`),
  FOREIGN KEY (`motel_id`) REFERENCES `motels` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

--
-- Table structure for table `ranks`
--

DROP TABLE IF EXISTS `ranks`;
CREATE TABLE IF NOT EXISTS `ranks` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `uid` varchar(16) DEFAULT NULL,
  `motel_id` int(11) unsigned NOT NULL,
  `title` varchar(64) DEFAULT NULL,
  `description` text,
  `rank` int(1) DEFAULT 1,
  `add_time` int(11) NOT NULL,
  `edit_time` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `motel_id` (`motel_id`),
  FOREIGN KEY (`motel_id`) REFERENCES `motels` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

--
-- Table structure for table `orders`
--

CREATE TABLE IF NOT EXISTS `orders` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `uid` varchar(16) DEFAULT NULL,
  `motel_id` int(11) unsigned NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_phone` varchar(255) NOT NULL,
  `room_title` varchar(255) DEFAULT NULL,
  `room_type` varchar(255) DEFAULT NULL,
  `serial_number` varchar(16) NOT NULL,
  `total_price` decimal(16,4) NOT NULL,
  `date_purchased` datetime NOT NULL,
  `date_finished` datetime NOT NULL,
  `status_id` mediumint(8) NOT NULL,
  `add_time` int(11) NOT NULL,
  `edit_time` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
