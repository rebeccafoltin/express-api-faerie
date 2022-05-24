#!/bin/sh

# TOKEN="9d2f92fb299179b8835e732b48422d85"

API="http://localhost:4741"
URL_PATH="/waterfaerie"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
