# intl-sup

This library provides utilities & helpers on top of the "Intl" namespace & utilities in JavaScript.

To install

```
npm i intl-sup
```

## How to use?

First initialize the current local of your user as follow:

```
import { setUrserLocale } from "intl-sup/core";

setUserLocale("fr-FR");
```

And then simply use the various formatters & helpers available;
the library is made of several module that you can import independantly.

```
import { getCurrencyPostion } from "intl-sup/currencyHelper";
import { formatCurrency } from "intl-sup/currencyFormatter"

console.log("Currency position for euro is", getCurrencyPosition("EUR"));

console.log("The price is", formatCurrency(12.56, "RON"));
```

To get more information, have a look at the [documentation](https://vince-f.github.io/intl-sup/).