# Get Started

1. Install docker, docker-compose

2. Create file `challange.org.ru/core/config/creds.php`

```php
<?php

$database_server = 'domain';
$database_user = 'user';
$database_password = 'password';
$dbase = 'database_name';
$table_prefix = 'prefix_';
```

3. Run `make install`
4. Run `make start`

# Deploy

1. Create `.env` file
```sh
FTP_USER=user
FTP_PASSWORD=password
```
2. Run `make deploy`
