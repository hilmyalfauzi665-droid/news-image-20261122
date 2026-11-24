# The World in One Day — Sunday 22 November 2026

A one-page newspaper front page summing up the world news of Sunday
22 November 2026, built for the make.fun bounty `news-image-20261122`.

## What the image shows

- **Lead story — Climate, COP31 in Antalya:** after talks ran past their
  Friday deadline and through Saturday night, negotiators unveiled a final
  package in the early hours of Sunday; delegates have until 03:00 GMT to
  object and a session at 06:00 GMT is set to approve it. (GMA News Online,
  published 22 Nov 2026, 07:32.)
- **The Gulf, overnight:** Iran's IRGC claims strikes on Patriot radar at
  two US bases in Bahrain; Bahrain says a civilian industrial facility was
  hit and caught fire; two tankers were hit near the Strait of Hormuz.
  (Al Jazeera live blog and Times of India live updates, timestamps
  22 Nov 2026 IST — overnight Saturday to Sunday, first reported in Asia
  on 22 November.)
- **USA, economy:** Trump says he will work with Democrats to cap
  credit-card interest rates at 10%, after speaking with Senator Warren;
  average card rates are above 22%. (The Apex Wire, dateline
  Washington, 22 Nov 2026.)
- **Sport, Turin, tonight:** world No. 1 Alexander Zverev meets Carlos
  Alcaraz for the ATP Finals title at 6pm. (ATP Tour final preview,
  21 Nov 2026.)
- **Sport, Las Vegas, tonight:** the Las Vegas Grand Prix runs under the
  lights on the Strip.
- **Weather, Australia:** Sydney and Melbourne reach 31°C on Sunday, with
  thunderstorms and a cool change to follow. (Sunday 22 Nov 2026 weather
  report.)
- **Footer:** Hamas urges ceasefire mediators to meet after a Gaza strike
  kills three; Houthis say Mecca is not a target. (Times of India live
  updates, 22 Nov 2026 IST.)

Every story was checked against its source date: stories first reported on
19–21 November (the ICJ Myanmar verdict, Russian missiles in Poland, the
Houthi strikes on Riyadh, the Peru quake, Cyclone Akvan, the Manipur
liquor deaths, the Meta India protests, the Nvidia SEC probe) were
deliberately left out.

All artwork and text are original, drawn with Python/PIL from the news
reported on 22 November 2026.

## How it runs

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` (`/output` by default). Run it with:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Both runs write byte-identical output.
