/*
Navicat MySQL Data Transfer

Source Server         : v_1
Source Server Version : 50722
Source Host           : 192.168.2.100:3306
Source Database       : koa

Target Server Type    : MYSQL
Target Server Version : 50722
File Encoding         : 65001

Date: 2018-08-16 16:18:18
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for koa_user
-- ----------------------------
DROP TABLE IF EXISTS `koa_user`;
CREATE TABLE `koa_user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) DEFAULT NULL,
  `pass_word` varchar(255) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `user_type` int(11) DEFAULT NULL,
  `create_time` bigint(50) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
