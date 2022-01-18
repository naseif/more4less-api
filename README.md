# more4less-api

A simple and fast RESTful API for [@naseif/more4less](https://github.com/naseif/more4less) built using [@naseif/api-tools-ts](https://github.com/naseif/API-Tools-TS)!

## Installation

```
git clone https://github.com/naseif/more4less-api.git
cd more4less-api
npm i
npm run start
```

## Endpoints

Each endpoint must have a **query parameter** when sending the GET Request

-   /api/v1/amazon
-   /api/v1/ebay
-   /api/v1/saturn
-   /api/v1/mediamarkt
-   /api/v1/otto
-   /api/v1/proshop
-   /api/v1/all

## Example

To search for `DDR4 RAM 16GB` on all mentioned online shops above, simply do:

```
http://localhost:8080/api/v1/all?query=DDR4 RAM 16GB
```
