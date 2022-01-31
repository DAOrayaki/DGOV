#!/usr/bin/env bash
cd ../
git pull
rm -rf  /var/www/dgovmain.bak
mkdir -p /var/www/dgovmain/html
cp -r build/* /var/www/dgovmain/html/