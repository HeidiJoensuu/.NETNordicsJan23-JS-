In this project was goal to make simple computer webstore using pure JavaScript.
I focused learning:
- to use Javascript without libraries or frameworks
- JavaScript classes
- and creating an adaptive user interface depenging on the screen size by using CSS. Otherwise the UI is quite simple.

Exercise folder structure:
```
.
└public
 │ index.html 
 │
 └static
  ├─css
  │   index.css                     # Selfmade css variables
  │
  └─js
    │    app.js                     # This connects all JS files
    │
    ├─api
    │    data.js                    # Get's data from given api
    │
    ├─classes
    │    bankBalance.js              # Bank Balance class extends Loan class
    │    loan.js                     # Loan class
    │    pay.js                      # Pay Class
    |
    └─controllers
        bankController.js           # Manages money tranfers at BankBalance
        computersListController.js  # Renders list of computers
        computerViewController.js   # Renders selected computer
        workController.js           # Manages money transfer at Pay
```