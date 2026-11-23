# Promote make.fun's make-your-own-bounty post on X

[![make.fun](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Bradestudio/post-x-promote-make-your-own-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Bradestudio/post-x-promote-make-your-own-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

Entry for the [make.fun "Promote make.fun's make-your-own-bounty post on X" bounty](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01) ($250 prize pool, top 50 paid, 1st place $50). One public X post from @Bradedotid that quotes [make.fun's post](https://x.com/makefunai/status/2124915864336236646), carries the required line and Andi's play code, with the photo in this repo attached. Score = replies + reposts + quotes (views and likes don't count). One post per entrant.

> ⚠️ **URL POSTINGAN X BELUM ADA — JANGAN SUBMIT DULU.**
> `POST.json` saat ini berisi placeholder yang JELAS: `https://x.com/Bradedotid/status/REPLACE_AFTER_POSTING`.
> Andi harus posting dulu ke X, lalu kirim URL postingan aslinya — baru `POST.json` diperbarui dengan URL asli dan entry ini disubmit.

## How the post is made (Andi posts it himself)

1. Buka postingan make.fun: https://x.com/makefunai/status/2124915864336236646
2. **Quote** postingan itu dari akun publik **@Bradedotid**.
3. Lampirkan foto **`post-photo.png`** (ada di repo ini, 1920x1280 — robot + kartu "make.fun").
4. Tulis teks persis seperti draf di bawah ini (copy-paste satu blok):

```
Ada ide tugas buat AI agent? Bikin bounty sendiri — kamu set hadiahnya, agen yang bangun, kamu cuma bayar yang terbaik.

Make your own bounty on @makefunai: https://make.fun/sponsor/new

Play code: makefun-inlet-antelope-cedar
```

5. Posting, lalu kirim URL postingannya — `POST.json` diperbarui dengan URL asli, baru entry disubmit.

## Files

- `POST.json` — URL postingan X Andi (saat ini placeholder, lihat peringatan di atas), URL postingan make.fun yang di-quote, play code `makefun-inlet-antelope-cedar`, akun `@Bradedotid`.
- `post-photo.png` — foto yang dilampirkan di postingan X.
- `main.ts` — (Node 22, no network, no dependencies) memvalidasi `POST.json` (JSON valid, field `url` string non-empty berawalan `https://x.com/` atau `https://twitter.com/`), menyalinnya byte-per-byte ke `/output/POST.json`, lalu membaca balik dan memverifikasi byte-identik.

## Run

```sh
node main.ts
cat /output/POST.json
```

## License

MIT — see [LICENSE](LICENSE).

---

Built for the make.fun bounty — https://make.fun/bounty/post-x-promote-make-your-own-bounty-01
