# ISO3166 Converter

![](https://img.shields.io/npm/l/@trustedshops-public/js-iso3166-converter) ![](https://img.shields.io/npm/v/@trustedshops-public/js-iso3166-converter) [![codecov](https://codecov.io/gh/trustedshops-public/js-iso3166-converter/branch/main/graph/badge.svg?token=NP2RV8WYVM)](https://codecov.io/gh/trustedshops-public/js-iso3166-converter) [![CircleCI](https://dl.circleci.com/status-badge/img/gh/trustedshops-public/js-iso3166-converter/tree/main.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/trustedshops-public/js-iso3166-converter/tree/main)

## Converting country codes from one format to another

This library provides a simple way to convert country codes from ISO3166-1 alpha-2 to alpha-3 and vice versa.

### Installation and usage instructions

First you must install the package into your repository.

```bash
yarn add @trustedshops-public/js-iso3166-converter
# or
npm install @trustedshops-public/js-iso3166-converter
```

After a successful installation you can start using it in your code.

#### Converting from ISO2 to ISO3

With `convertIso2ToIso3` you can convert a country code "DE" into "DEU".

```js
import { convertIso2ToIso3 } from "@trustedshops-public/js-iso3166-converter";

const iso3 = convertIso2ToIso3("DE");
```

#### Converting from ISO3 to ISO2

Like the one before, but the other way around. You can convert "DEU" to "DE".

```js
import { convertIso3ToIso2 } from "@trustedshops-public/js-iso3166-converter";

const iso2 = convertIso3ToIso2("DEU");
```

#### Detect ISO format

If you don't know the format of the country code, you can use `detectIsoFormat` to find out. It will return either "ISO2" or "ISO3".

```js
import { detectIsoFormat } from "@trustedshops-public/js-iso3166-converter";

const isoFormat = detectIsoFormat("DEU");
```

#### Convert ISO format

We also export a wrapper function `convertIso` that combines `convertIso3ToIso2` and `convertIso2ToIso3` into one function. It will automatically detect the format of the country code and convert it to the other format.

```js
import { convertIso } from "@trustedshops-public/js-iso3166-converter";

const iso2 = convertIso("DEU");
const iso3 = convertIso("DE");
```
