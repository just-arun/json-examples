#!/bin/bash
echo "******"
echo "commiting to git"
echo "******"
now="$(date)"
git add .
git commit -am "commiting on: $now"