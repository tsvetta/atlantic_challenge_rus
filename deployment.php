<?php

declare(strict_types=1);

return [
	'my site' => [
		'remote' => 'ftp://' . $_ENV['FTP_USER'] . ':' . $_ENV['FTP_PASSWORD'] . '@challenge.org.ru/',
		'local' => 'challange.org.ru',
		'ignore' => '
			/core/cache/*
			!/core/cache/.gitkeep

			# Depends on how you version your MODX site
			/core/packages/*/*

			/core/import/*
			/core/export/*

			/core/config/creds.php
		',
	],
];
