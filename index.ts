/**
 * With Thanks to: https://gist.github.com/maephisto/9228207?permalink_comment_id=1963107#gistcomment-1963107
 */

const ISO2_TO_ISO3 = {
  AF: "AFG",
  AX: "ALA",
  AL: "ALB",
  DZ: "DZA",
  AS: "ASM",
  AD: "AND",
  AO: "AGO",
  AI: "AIA",
  AQ: "ATA",
  AG: "ATG",
  AR: "ARG",
  AM: "ARM",
  AW: "ABW",
  AU: "AUS",
  AT: "AUT",
  AZ: "AZE",
  BS: "BHS",
  BH: "BHR",
  BD: "BGD",
  BB: "BRB",
  BY: "BLR",
  BE: "BEL",
  BZ: "BLZ",
  BJ: "BEN",
  BM: "BMU",
  BT: "BTN",
  BO: "BOL",
  BQ: "BES",
  BA: "BIH",
  BW: "BWA",
  BV: "BVT",
  BR: "BRA",
  IO: "IOT",
  BN: "BRN",
  BG: "BGR",
  BF: "BFA",
  BI: "BDI",
  CV: "CPV",
  KH: "KHM",
  CM: "CMR",
  CA: "CAN",
  KY: "CYM",
  CF: "CAF",
  TD: "TCD",
  CL: "CHL",
  CN: "CHN",
  CX: "CXR",
  CC: "CCK",
  CO: "COL",
  KM: "COM",
  CG: "COG",
  CD: "COD",
  CK: "COK",
  CR: "CRI",
  CI: "CIV",
  HR: "HRV",
  CU: "CUB",
  CW: "CUW",
  CY: "CYP",
  CZ: "CZE",
  DK: "DNK",
  DJ: "DJI",
  DM: "DMA",
  DO: "DOM",
  EC: "ECU",
  EG: "EGY",
  SV: "SLV",
  GQ: "GNQ",
  ER: "ERI",
  EE: "EST",
  ET: "ETH",
  FK: "FLK",
  FO: "FRO",
  FJ: "FJI",
  FI: "FIN",
  FR: "FRA",
  GF: "GUF",
  PF: "PYF",
  TF: "ATF",
  GA: "GAB",
  GM: "GMB",
  GE: "GEO",
  DE: "DEU",
  GH: "GHA",
  GI: "GIB",
  GR: "GRC",
  GL: "GRL",
  GD: "GRD",
  GP: "GLP",
  GU: "GUM",
  GT: "GTM",
  GG: "GGY",
  GN: "GIN",
  GW: "GNB",
  GY: "GUY",
  HT: "HTI",
  HM: "HMD",
  VA: "VAT",
  HN: "HND",
  HK: "HKG",
  HU: "HUN",
  IS: "ISL",
  IN: "IND",
  ID: "IDN",
  IR: "IRN",
  IQ: "IRQ",
  IE: "IRL",
  IM: "IMN",
  IL: "ISR",
  IT: "ITA",
  JM: "JAM",
  JP: "JPN",
  JE: "JEY",
  JO: "JOR",
  KZ: "KAZ",
  KE: "KEN",
  KI: "KIR",
  KP: "PRK",
  KR: "KOR",
  KW: "KWT",
  KG: "KGZ",
  LA: "LAO",
  LV: "LVA",
  LB: "LBN",
  LS: "LSO",
  LR: "LBR",
  LY: "LBY",
  LI: "LIE",
  LT: "LTU",
  LU: "LUX",
  MO: "MAC",
  MK: "MKD",
  MG: "MDG",
  MW: "MWI",
  MY: "MYS",
  MV: "MDV",
  ML: "MLI",
  MT: "MLT",
  MH: "MHL",
  MQ: "MTQ",
  MR: "MRT",
  MU: "MUS",
  YT: "MYT",
  MX: "MEX",
  FM: "FSM",
  MD: "MDA",
  MC: "MCO",
  MN: "MNG",
  ME: "MNE",
  MS: "MSR",
  MA: "MAR",
  MZ: "MOZ",
  MM: "MMR",
  NA: "NAM",
  NR: "NRU",
  NP: "NPL",
  NL: "NLD",
  NC: "NCL",
  NZ: "NZL",
  NI: "NIC",
  NE: "NER",
  NG: "NGA",
  NU: "NIU",
  NF: "NFK",
  MP: "MNP",
  NO: "NOR",
  OM: "OMN",
  PK: "PAK",
  PW: "PLW",
  PS: "PSE",
  PA: "PAN",
  PG: "PNG",
  PY: "PRY",
  PE: "PER",
  PH: "PHL",
  PN: "PCN",
  PL: "POL",
  PT: "PRT",
  PR: "PRI",
  QA: "QAT",
  RE: "REU",
  RO: "ROU",
  RU: "RUS",
  RW: "RWA",
  BL: "BLM",
  SH: "SHN",
  KN: "KNA",
  LC: "LCA",
  MF: "MAF",
  PM: "SPM",
  VC: "VCT",
  WS: "WSM",
  SM: "SMR",
  ST: "STP",
  SA: "SAU",
  SN: "SEN",
  RS: "SRB",
  SC: "SYC",
  SL: "SLE",
  SG: "SGP",
  SX: "SXM",
  SK: "SVK",
  SI: "SVN",
  SB: "SLB",
  SO: "SOM",
  ZA: "ZAF",
  GS: "SGS",
  SS: "SSD",
  ES: "ESP",
  LK: "LKA",
  SD: "SDN",
  SR: "SUR",
  SJ: "SJM",
  SZ: "SWZ",
  SE: "SWE",
  CH: "CHE",
  SY: "SYR",
  TW: "TWN",
  TJ: "TJK",
  TZ: "TZA",
  TH: "THA",
  TL: "TLS",
  TG: "TGO",
  TK: "TKL",
  TO: "TON",
  TT: "TTO",
  TN: "TUN",
  TR: "TUR",
  TM: "TKM",
  TC: "TCA",
  TV: "TUV",
  UG: "UGA",
  UA: "UKR",
  AE: "ARE",
  GB: "GBR",
  US: "USA",
  UM: "UMI",
  UY: "URY",
  UZ: "UZB",
  VU: "VUT",
  VE: "VEN",
  VN: "VNM",
  VG: "VGB",
  VI: "VIR",
  WF: "WLF",
  EH: "ESH",
  YE: "YEM",
  ZM: "ZMB",
  ZW: "ZWE",
} as const;

export type ISO2 = keyof typeof ISO2_TO_ISO3;
export type ISO3 = typeof ISO2_TO_ISO3[ISO2];

const isoMapping = new Map();

for (const iso2 in ISO2_TO_ISO3) {
  const iso3 = ISO2_TO_ISO3[iso2 as ISO2];
  isoMapping.set(iso2, iso3);
  isoMapping.set(iso3, iso2);
}

/**
 * Convert an ISO2 country code to an ISO3 country code.
 * @param iso2 The ISO2 country code to convert.
 * @returns The converted ISO3 country code or undefined if the conversion was not possible.
 */
export const convertIso2ToIso3 = (iso2: ISO2): ISO3 => {
  const capitalisedIso = iso2.toUpperCase();
  const iso3 = isoMapping.get(capitalisedIso);
  if (iso3 === undefined) {
    throw new Error(
      `Could not convert ISO2 code ${iso2} to ISO3. Please provide a valid ISO2 code.`
    );
  }
  return iso3 as ISO3;
};

/**
 * Convert an ISO3 country code to an ISO2 country code.
 * @param iso3 The ISO3 country code to convert.
 * @returns The converted ISO2 country code or undefined if the conversion was not possible.
 */
export const convertIso3ToIso2 = (iso3: ISO3): ISO2 => {
  const capitalisedIso = iso3.toUpperCase();
  const iso2 = isoMapping.get(capitalisedIso);
  if (iso2 === undefined) {
    throw new Error(
      `Could not convert ISO3 code ${iso3} to ISO2. Please provide a valid ISO3 code.`
    );
  }
  return iso2 as ISO2;
};

/**
 * Returns what country code format was detected.
 * @param iso The country code to detect the format of.
 * @returns The detected format or undefined if the format could not be detected.
 */
export const detectedIsoFormat = (iso: string): "ISO2" | "ISO3" => {
  if (iso.length === 2) {
    return "ISO2";
  }
  if (iso.length === 3) {
    return "ISO3";
  }
  throw new Error("Invalid ISO code provided.");
};

/**
 * Convert an ISO2 or ISO3 country code to the other format.
 * @param iso The country code to convert.
 * @returns The converted country code or undefined if the conversion was not possible.
 */
export const convertIso = (iso: ISO2 | ISO3): ISO2 | ISO3 | undefined => {
  const format = detectedIsoFormat(iso);

  switch (format) {
    case "ISO2":
      return convertIso2ToIso3(iso as ISO2);
    case "ISO3":
      return convertIso3ToIso2(iso as ISO3);
    default:
      throw new Error("Something went wrong, unable to convert.");
  }
};
