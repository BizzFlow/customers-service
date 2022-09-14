#!/bin/bash

_API_ADDRESS='https://customers.api.bizzflow.link'
_STAGE='dev'

clear

printlncolor () {
        echo -e "\e[1;34m$1\e[0m\n"
}

printlncolor "\n\n__________________________________________________________________________________________________________"
printlncolor "------------------------------------  Command line tester ------------------------------------------------"
printlncolor "__________________________________________________________________________________________________________"

printlncolor "Tests will be performed against '${_API_ADDRESS}/${_STAGE}'."

printlncolor "Checking for cURL installation."

if ! [ -x "$(command -v curl)" ]; then
  printlncolorERROR 'Error: cUrl is not installed. Please install and run this script again.' >&2
  exit 1
else
  printlncolor 'cURL installed..'
fi

printlncolor "Starting the tests."

endpoint='customers/123'
printlncolor '----------------------------------------------------------------------------------------------------------'
printlncolor $endpoint
printlncolor "Endpoint: ${_API_ADDRESS}/${_STAGE}/${endpoint}"
printlncolor "Expected HTTP STATUS: 201 (CREATED)"
printlncolor '----------------------------------------------------------------------------------------------------------'
curl -i -H "Content-Type: application/json" -X GET ${_API_ADDRESS}/${_STAGE}/${endpoint}
echo

endpoint='customers'
printlncolor '----------------------------------------------------------------------------------------------------------'
printlncolor $endpoint
printlncolor "Endpoint: ${_API_ADDRESS}/${_STAGE}/${endpoint}"
printlncolor "Expected HTTP STATUS: 201 (CREATED)"
printlncolor '----------------------------------------------------------------------------------------------------------'
curl -i -H "Content-Type: application/json" -X POST ${_API_ADDRESS}/${_STAGE}/${endpoint} -d '{"key1":"value1", "key2":"value2"}'
echo