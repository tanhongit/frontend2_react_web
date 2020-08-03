# Welcome to FRONTEND2 REACT WEB by TANHONGIT

The FRONTEND2 REACT WEB is a free e-commerce website project for everyone to use. It is built in React & Node & MongoDB. And anyone can use it.
- Customers do not need to know much about technology.
- Powerful system, many useful functions.
- Easy to access, easy to use.

## Support the project
Support this project :stuck_out_tongue_winking_eye: :pray:
<p align="center">
    <a href="https://www.paypal.me/tanhongit" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-green.svg" data-origin="https://img.shields.io/badge/Donate-PayPal-green.svg" alt="PayPal buymeacoffee TanHongIT"></a>
</p>

# 2. Technology
- React & Node & MongoDB
- Framework Express 

# 3. Feature

```
1. FRONT-END
    - Shopping cart
    - Save cart with cookie
    - Customer login, logout
    - Content: Product, Product List, Product Details, Category,...
    - Product attributes: cost price, detail,...
    - Search, Filter products by price,...
    - Checkout, PlaceỎder,...
    - Constrain the number of products in the cart:
      + Do not allow checkout when the cart is out of stock
      + Do not allow to enter the overloaded quantity with the number of goods in stock
      + ...
    ...

=================================================================

2. BACKEND-ADMIN
    - Admin roles, permission
    - Products manager   (Create, delete, update)
    - Orders management  (Create, delete, update)
    - Profile management   (Create, delete, update)
    - My OrderList  (Show)
    ...
```

# 4. Configuration requirements
We are going to build the web application using:
- MongoDB
- NodeJS

# 5. Runing

## 5.1. Install NodeJS

For Windows : https://nodejs.org/en/

Test version: 

```
node -v && npm -v
```

## 5.2. Install MongoDB

View tutorial, download and Install it from here: https://docs.mongodb.com/manual/administration/install-community/

## 5.3. Clone repo

```
$ git clone https://github.com/TanHongIT/frontend2_react_web
$ cd frontend2_react_web
```

## 5.4. Import Database .json file to MongoDB

Open new terminal. Go to databases directory path.

Then Run & Connect to MongoDB.

```
$ cd databases
$ mongoimport --db=tanhong --collection=products --file=products_is_tanhong_db_update.json
$ mongoimport --db=tanhong --collection=users --file=users_is_tanhong_db.json
```

> **_Account login on Backend_**

```
user :
    email: hiiiii@gmail.com         | password: 123
    email: reactweb@gmail.com       | password: 123
    email: reactweb2020@gmail.com   | password: 123

Admin:
    email: tanhong@gmail.com        | password: 12345
    email: tanhongi@gmail.com       | password: 1234
```

## 5.5. Run Backend

Open new terminal.

```
$ npm install
$ npm start
```

## 5.6. Run Frontend

Open new terminal

```
$ cd frontend
$ npm install
$ npm start
```

## 5.7. Go to Homepage

Run http://localhost:3000


<p align="center">
     <img src="https://img.shields.io/packagist/l/doctrine/orm.svg" data-origin="https://img.shields.io/packagist/l/doctrine/orm.svg" alt="license">
</p>
