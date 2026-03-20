---
title: How to use?
---

This library makes the assumption that your user will have one locale
at a time, and this local shall be used to format all data.

As such you should first initialize the current local of your user as follow:

```
import { setUrserLocale } from "intl-sup/core";

setUserLocale("fr-FR");
```

And then you simply use the various functions exposed by the library.

You can change the user locale at any moments. However if you find yourself changing the user locale on a regular basis, and your user do not have a stable user local for their display, this library might not be the best fit.
