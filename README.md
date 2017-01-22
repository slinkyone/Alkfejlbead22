# Alkfejlbead22

## 3. beadandó feladat - HS74YU

- legalább két modellt, egy-sok kapcsolatban [X]
- legalább 1 űrlapot [X]
- legalább 1 listázó oldalt [X]
- legyen lehetőség új felvételére [X]
- legyen lehetőség meglévő szerkesztésére [X]
- legyen lehetőség meglévő törlésére [X]
- REST API végpont kialakítása [X]
- szerveroldali perzisztálás fájlba [X]

### Követelményanalízis
Az oldalon lehessen felvenni új boltokat, a boltokhoz lehessen hozzárendelni termékeket amikből van nekik készleten.
FONTOS: TEGYÜK FEL, HOGY MINDEN TERMÉK EGYEDI ÉS NEM LEHET MÁS BOLTBAN KAPNI. 1..n KAPCSOLAT

1. Architektúra terv
  ![alt text](http://i.imgur.com/KEx01xY.png "oldalterv")
  Oldaltérkép:
  * Főoldal
  * Bolt hozzáadása
  * Termék felvitele/szerkesztése

  Végpontok:
  - index
  - bolt
  - new
 
2. Osztálymodell
  ![alt text](http://i.imgur.com/po3MAeg.png "adatmodell")
  Adatbázisterv
	* Bolt
		- nev: 'string',
		- termekek: 'termek' [array]
		
	* LOCATION
		- nev: 'string'
		- ar: 'number'
		- mennyiseg: 'number'


### Implementáció
1. Fejlesztői környezet bemutatása
	Cloud 9 - c9.io
		Egy online workspace-t hoz létre - virtuális gépet amin biztosítja a Node.js és ember.js futtatásához szükséges összes függőséget.

2. Könyvtárstruktúrában lévő mappák funkiójának bemutatása
	
	* sec-rest - Az adatbázist kezeli.
	* sec-app  - Az alkalmazás maga.

### Felhasználói dokumentáció

1. A futtatáshoz ajánlott hardver-, szoftver konfiguráció
	Böngészőben futó alkalmazás nincs különösebb hardver igénye.
	Ajánlott szoftver - Google Chrome, Firefox, Opera, Safari
	
2. Telepítés lépései: hogyan kerül a Githubról a célgépre a program
	git clone https://github.com/slinkyone/Alkfejlbead22
	Telepítés meglévő fileok elhejezése majd konzolban npm -install parancs-al lefut a telepítés. ember s-el pedig elindul a program.

3. A program használata
  Kész programfelület fogad bennünket, ahonnan egyből tudunk áruházat hozzáadni a hozzáadásra kattintva, vagy már meglévőt megtekinteni.
  A megtekintés után alkalmunk nyílik terméket felvenni és törölni és az áruház nevét módosítani.
	![alt text](http://i.imgur.com/vEt7cCr.png "Listázás")
	![alt text](http://i.imgur.com/MapTfeA.png "Szerkesztés")
