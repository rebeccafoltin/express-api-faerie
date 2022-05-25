#!/bin/bash

# TOKEN="9d2f92fb299179b8835e732b48422d85"

API="http://localhost:4741"
URL_PATH="/faeworld"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
    "faeworld": {
      "name": "'"${NAME}"'",
      "power": "'"${POWER}"'"
      "region": "'"${REGION}"'",
    }
  }'

echo
