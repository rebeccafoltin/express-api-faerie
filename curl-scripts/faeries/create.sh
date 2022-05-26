#!/bin/bash
# NAME="Rebecca"
# WINGED="True"

# TOKEN="9d2f92fb299179b8835e732b48422d85"

API="http://localhost:4741"
URL_PATH="/faeries"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "faeries": {
      "faeriename": "'"${FAERIENAME}"'",
      "power": "'"${POWER}"'"
    }
  }'

echo
