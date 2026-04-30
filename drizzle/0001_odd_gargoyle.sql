CREATE TABLE `audit_logs` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_id` int NOT NULL,
	`action` enum('CREATE','UPDATE','DELETE','LOGIN','LOGOUT') NOT NULL,
	`entity` varchar(64) NOT NULL,
	`entity_id` varchar(128) NOT NULL,
	`entity_name` text,
	`description` text,
	`old_data` json,
	`new_data` json,
	`ip_address` varchar(45),
	`user_agent` text,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `audit_logs_id` PRIMARY KEY(`id`)
);
