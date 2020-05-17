#!/bin/bash
echo "Script started..."
while true
do
  ./commit.sh
  ./deploy.sh
  sleep 300
done