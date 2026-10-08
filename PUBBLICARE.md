# Pubblicare il portfolio su GitHub Pages

Risultato: il sito sarà online gratis su `https://TUO-USERNAME.github.io`, lo stesso sistema usato dal sito del tuo amico.
Non serve il terminale: si fa tutto dal browser.

## 0. Prima di pubblicare (importante)

Sostituisci i contenuti finti, altrimenti su LinkedIn linki un sito con scritto "Alex Morgan":

- `src/lib/data/site.ts` → nome, ruolo, email, link, testo "About" e skills
- `src/lib/data/projects.ts` → i tuoi progetti veri
- `static/projects/<id-progetto>/` → una cartella di foto e PDF per ogni progetto

## 1. Crea l'account e il repository

1. Registrati su github.com (se non hai un account). Lo username finirà nell'indirizzo del sito, quindi sceglilo pulito, ad esempio `davidematti`.
2. In alto a destra clicca **+ → New repository**.
3. Come nome scrivi **esattamente** `TUO-USERNAME.github.io` (es. `davidematti.github.io`).
4. Lascia **Public**, non spuntare altro e clicca **Create repository**.

## 2. Carica i file

1. Nella pagina del repository vuoto clicca **uploading an existing file**.
2. Apri la cartella `portfolio` sul tuo computer, seleziona **tutto il suo contenuto** (non la cartella stessa) e trascinalo nella pagina.
   - Su Mac i file che iniziano con il punto (es. `.github`) sono nascosti: premi `Cmd + Shift + .` nel Finder per vederli.
3. Clicca **Commit changes** in basso.
4. Controlla che nel repository ci sia la cartella `.github/workflows/deploy.yml`. Se manca:
   **Add file → Create new file**, come nome scrivi `.github/workflows/deploy.yml`, incolla il contenuto del file e clicca **Commit changes**.

## 3. Attiva GitHub Pages

1. Nel repository vai su **Settings → Pages**.
2. Alla voce **Source** scegli **GitHub Actions**.
3. Vai sulla scheda **Actions**: vedrai "Deploy to GitHub Pages" in esecuzione. Dopo 1–2 minuti diventa verde.
   Se è rossa, cliccala e copia l'errore: me lo incolli e lo sistemo.
4. Apri `https://TUO-USERNAME.github.io`: il sito è online.

## 4. Aggiornare il sito in futuro

Modifica un file direttamente su GitHub (icona della matita) oppure ricarica il file modificato.
Ogni modifica salvata ripubblica il sito da sola in un paio di minuti.

## 5. Metterlo su LinkedIn

- **Profilo → Informazioni di contatto (matita) → Sito web**: incolla l'indirizzo e scegli il tipo "Portfolio".
- Meglio ancora, in **In primo piano (Featured) → Aggiungi link**: appare come una scheda con anteprima in alto nel profilo.
