#!/bin/bash

cd /home/ubuntu/mm-theglow-2024
php artisan config:clear
php artisan cache:clear
php artisan route:clear

sudo composer install
sudo yarn install
sudo yarn build
