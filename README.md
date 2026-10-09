# Portfolio di Lorenzo Matti

Sito online: **https://lorenzo-matti.github.io**

Ogni volta che salvi una modifica qui su GitHub (_Commit changes_), il sito si ripubblica da solo in circa 2 minuti.
Se qualcosa è scritto male, la pubblicazione in **Actions** diventa rossa e il sito online resta quello di prima: non si rompe niente.

## Dove si modifica cosa

Per i contenuti servono solo **due cartelle**. Il resto è codice: non serve toccarlo.

| Voglio cambiare…                              | File / cartella                |
| --------------------------------------------- | ------------------------------ |
| Nome, ruolo, frase sotto il nome, email, link | `content/profile.ts`           |
| Testo "About me" e skills                     | `content/profile.ts`           |
| Aggiungere o modificare un progetto           | `content/projects.ts`          |
| PDF dei report tecnici                        | `static/reports/`              |
| Video della schermata iniziale                | `static/video/hero-*.mp4` (3 file, vedi sotto) |
| Fotogramma mostrato prima che il video parta  | `static/video/hero-poster.jpg` |

## Come modificare un testo

1. Apri il file e clicca la **matita** ✏️ in alto a destra.
2. Cambia solo il testo **tra gli apici** `'...'`. Lascia apici, virgole e parentesi come sono.
3. **Commit changes**.

Per scrivere una parola in corsivo mettila tra asterischi: `*Nemesis*`.
Se nel testo serve un apostrofo (`team's`), racchiudi la frase tra virgolette doppie `"..."` invece che tra apici.

**Non scrivere codice HTML nei testi** (`<strong>`, `<span>`...): comparirebbe tale e quale sul sito. Grassetto, colori e a capo li decide già la grafica. Per esempio sotto il nome ci sono due righe separate, `headline` (in evidenza) e `tagline` (più chiara). In "About me" il primo paragrafo viene mostrato più grande come introduzione, gli altri come testo normale; puoi aggiungerne o toglierne quanti vuoi.

## Come aggiungere un progetto

1. Se hai il report, caricalo in `static/reports/` (_Add file → Upload files_ dentro quella cartella). Usa un nome semplice, senza spazi: `euroc-2025.pdf`.
2. Apri `content/projects.ts`, copia un blocco `{ ... },` esistente e incollalo **in cima** alla lista.
3. Cambia i campi:
   - `id`: nome breve, minuscolo, con trattini. Diventa l'indirizzo della pagina.
   - `start` / `end`: mese e anno nella forma `'2025-07'`. Per un progetto ancora in corso scrivi `end: 'present'`.
   - `label`: piccola etichetta, ad esempio `'EuRoC Report'` (facoltativa).
   - `abstract`: il testo. Ogni frase tra virgolette separata da virgola diventa un paragrafo.
   - `tools`: strumenti e metodi (facoltativo).
   - `report: 'reports/euroc-2025.pdf'`: il PDF caricato al punto 1 (facoltativo).
   - `githubUrl`: link alla repository (facoltativo).
4. **Commit changes**.

I progetti sono ordinati da soli dal più recente. Numero di pagine e dimensione del PDF vengono calcolati in automatico.

## Come cambiare il video

Il video esiste in 3 versioni in `static/video/`. Il browser ne scarica **una sola**, la più adatta:

| File                  | Chi lo riceve                         | Qualità                   |
| --------------------- | ------------------------------------- | ------------------------- |
| `hero-1080.av1.mp4`   | computer con browser recenti          | 1080p, la più nitida      |
| `hero-1080.mp4`       | browser che non leggono AV1 (Safari vecchi) | 1080p H.264         |
| `hero-720.mp4`        | telefoni (schermo fino a 768 px)      | 720p, più leggero         |

Per cambiarlo, sostituisci i 3 file mantenendo **gli stessi nomi**. Ognuno deve restare sotto i 100 MB (limite di GitHub), meglio sotto i 25 MB. Comandi usati (da `originale.mp4`):

```sh
# AV1 1080p (la versione nitida)
ffmpeg -i originale.mp4 -an -vf scale=1920:-2,fps=30 -c:v libsvtav1 -preset 5 -crf 38 -pix_fmt yuv420p10le -svtav1-params tune=0 -movflags +faststart hero-1080.av1.mp4
# H.264 1080p (riserva)
ffmpeg -i originale.mp4 -an -vf scale=1920:-2,fps=30 -c:v libx264 -preset slower -tune film -crf 23 -maxrate 3M -bufsize 6M -pix_fmt yuv420p -movflags +faststart hero-1080.mp4
# H.264 720p (telefoni)
ffmpeg -i originale.mp4 -an -vf scale=1280:-2,fps=30 -c:v libx264 -preset slower -tune film -crf 25 -maxrate 1.5M -bufsize 3M -pix_fmt yuv420p -movflags +faststart hero-720.mp4
```

## Se la pubblicazione diventa rossa

Apri **Actions**, clicca l'esecuzione rossa e poi `build`. Di solito l'errore indica file e riga. I casi più comuni:

- manca una virgola o un apice;
- il nome del PDF in `report` non corrisponde al file caricato;
- una data non è nella forma `'2025-07'`.

## Per chi lavora sul codice

SvelteKit 3 + Tailwind CSS 4, prerenderizzato con `adapter-static` e pubblicato da `.github/workflows/deploy.yml`.

```sh
npm install
npm run dev      # http://localhost:5173
npm run check    # controllo dei tipi: segnala anche file mancanti
npm run build
```

Il codice è in `src/`: componenti in `src/lib/components/`, pagine in `src/routes/`, colori e font in `src/routes/layout.css`.
