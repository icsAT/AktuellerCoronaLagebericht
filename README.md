# Aktueller Corona Lagebericht (Scriptable App für Apple Devices)

Dieses Widget zeigt Corona (Covid-19) Daten für Deutschland, ein Bundesland und einen Landkreis an. Es lassen sich diverse unterschiedliche Werte zur Anzeige konfigurieren. Dadurch erhält man den individuell benötigten Überblick über die aktuelle Lage (Scriptable App für Apple Devices) . 

Das Skript funktioniert derzeit ausschließlich als großes (large) Widget.


# Datenquellen COVID-19 Datenhub:

RKI Corona Landkreise:           https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0
RKI Key Data:                    https://services7.arcgis.com/mOBPykOjAyBO2ZKk/ArcGIS/rest/services/rki_key_data_hubv/FeatureServer/0


# Datenbeschreibung COVID-19 Datenhub:

RKI Corona Landkreise:           https://npgeo-corona-npgeo-de.hub.arcgis.com/datasets/917fc37a709542548cc3be077a786c17_0/explore

RKI Key Data:                    https://npgeo-corona-npgeo-de.hub.arcgis.com/datasets/c2f3c3b935a242169c6bec82e1fa573e_0/explore


# Benutzerdefinierte Lizenz:

Bundesamt für Kartographie und Geodäsie

Robert Koch-Institut

Die Daten sind die „Fallzahlen in Deutschland“ des Robert Koch-Institut (RKI) und stehen unter der Open Data Datenlizenz Deutschland – Namensnennung – Version 2.0 zur Verfügung.


# Quellenvermerk:

Robert Koch-Institut (RKI), dl-de/by-2-0


# Haftungsausschluss:

„Die Inhalte, die über die Internetseiten des Robert Koch-Instituts zur Verfügung gestellt werden, dienen ausschließlich der allgemeinen Information der Öffentlichkeit, vorrangig der Fachöffentlichkeit“.

# Datenschutzerklärung

„Die Nutzung des Webangebotes des RKI ist grundsätzlich ohne Bekanntgabe personenbezogener Daten möglich“.


# Datenquellen:

RKI COVID19 Hospitalisierung:    https://raw.githubusercontent.com/robert-koch-institut/COVID-19-Hospitalisierungen_in_Deutschland/master/Aktuell_Deutschland_COVID-19-Hospitalisierungen.csv

RKI COVID-19-Impfungen:          https://raw.githubusercontent.com/robert-koch-institut/COVID-19-Impfungen_in_Deutschland/master/Aktuell_Deutschland_Impfquoten_COVID-19.csv

RKI R-Faktor:                    https://raw.githubusercontent.com/robert-koch-institut/SARS-CoV-2-Nowcasting_und_-R-Schaetzung/main/Nowcast_R_aktuell.csv


# Datenbeschreibung:

RKI COVID19 Hospitalisierung:    https://github.com/robert-koch-institut/COVID-19-Hospitalisierungen_in_Deutschland

RKI COVID-19-Impfungen:          https://github.com/robert-koch-institut/COVID-19-Impfungen_in_Deutschland

RKI R-Faktor:                    https://github.com/robert-koch-institut/SARS-CoV-2-Nowcasting_und_-R-Schaetzung


# Benutzerdefinierte Lizenz:

Robert Koch-Institut (RKI)

Die Daten der "COVID-19-Hospitalisierungen in Deutschland", "COVID-19-Impfungen in Deutschland" und der "SARS-CoV-2-Nowcasting und -R-Schaetzung" sind lizenziert unter der Creative Commons Namensnennung 4.0 International Public License | CC-BY 4.0 International


# Quellenvermerk:

Robert Koch-Institut (RKI), CC-BY 4.0 International


# Haftungsausschluss:

„Die Inhalte, die über die Internetseiten des Robert Koch-Instituts zur Verfügung gestellt werden, dienen ausschließlich der allgemeinen Information der Öffentlichkeit, vorrangig der Fachöffentlichkeit“.


# Datenquellen:

DIVI-Intensivregister auf Landkreisebene: https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/DIVI_Intensivregister_Landkreise/FeatureServer/0


# Datenbeschreibung:

DIVI-Intensivregister auf Landkreisebene: https://npgeo-corona-npgeo-de.hub.arcgis.com/datasets/8fc79b6cf7054b1b80385bda619f39b8_0


# Benutzerdefinierte Lizenz:

Deutsche Interdisziplinäre Vereinigung für Intensiv- und Notfallmedizin e.V.

Bitte kontaktieren Sie DIVI-Intensivregister, sollten Sie die Daten weiterverwenden wollen. (https://www.divi.de/register/anprechpartner-register)

Datenquelle: DIVI-Intensivregister (https://www.divi.de/register/tagesreport)

Terms of Use: DIVI-Intensivregister (https://www.divi.de/register/tagesreport)

Credits (Attribution): DIVI-Intensivregister (https://www.divi.de/impressum)


# Quellenvermerk:

DIVI-Intensivregister (www.intensivregister.de)


# Haftungsausschluss:

Die Daten des Intensivregister können nach vorheriger Absprache und unter Verwendung des Quellenhinweis „DIVI-Intensivregister“, zumindest für journalistische Zwecke, frei verwendet werden. Der Herausgeber behält sich alle Rechte vor, insbesondere das der Übersetzung, des öffentlichen Vortrages sowie der Übertragung durch Rundfunk und Fernsehen, auch einzelner Teile. Keine Inhalte dürfen in irgendeiner Form ohne Genehmigung reproduziert oder unter Verwendung elektronischer Systeme verarbeitet, vervielfältigt oder verbreitet werden. Das uneingeschränkte Kopierrecht aller Inhalte liegt – falls nicht anders gekennzeichnet (z.B. Pressetexte und Pressefotos) – bei dem Herausgeber. Die Verwendung von Texten, Textteilen oder Bildmaterial bedarf einer schriftlichen Zustimmung der Redaktion.


# Beschreibung:

![Bildschirmfoto 2021-12-04 um 23 51 28](https://user-images.githubusercontent.com/74063738/144726975-117be99f-c1a3-4323-803f-efb52bab10b9.png)
![Bildschirmfoto 2021-12-04 um 23 50 08](https://user-images.githubusercontent.com/74063738/144726980-8d44c9c2-c673-42cb-b656-d810e4dac89f.png)

Das Skript hat umfangreiche Konfigurationsmöglichkeiten, um die Ausgabe auf die jeweiligen Bedürfnisse anzupassen.

Grundsätzlich versucht das Skript den aktuellen Ort des Gerätes zu ermitteln. Ist dies nicht möglich, so wird der letzte ermittelte Ort verwendet. Möchte man stattdessen einen festen Ort verwenden, so kann man diesen als Koordinaten in den Widgetparamtern hinterlegen. Dabei ist es wichtig "." und "," richtig zu verwenden. Das Komma trennt Länge und Breite und der Punkt wird verwendet um den jeweiligen Wert in Vor- und Nachkommastellen zu unterteilen. Beispiel: "49.326,12.105"

![IMG_3152](https://user-images.githubusercontent.com/74063738/142746506-c03f706f-4ecb-46c8-aadc-ebe6f322b020.jpg)

Die Werte-Einstellungen erfolgen im Skript selber im Bereich "custom".

![grafik](https://user-images.githubusercontent.com/74063738/142745487-999d6678-9d24-4946-ad67-bf23e0f64bfe.png)

Mit dem Parameter "altUeberschrift" lässt sich eine abweichende Überschrift konfigurieren.
Die "cacheTime" gibt in Minuten an, wie oft maximal neue Daten geladen werden sollen. Default sind "120" Minuten.

![grafik](https://user-images.githubusercontent.com/74063738/142745537-be86a143-e2c9-46c3-8c9a-dbdd663afacd.png)

Es folgen die Einstellungen für Deutschland im Bereich "bund".
Der Parameter "show" gibt an, ob der Deutschland Bereich angezeigt werden soll. Gültige Werte sind "true" (Default) und "false".
Mit "head" kann die Überschrift ausgewählt werden. Default ist "Deutschland".

![grafik](https://user-images.githubusercontent.com/74063738/142745599-f402dc07-600c-4e26-bfc2-56f24da2652b.png)

Das gleiche gilt für das Bundesland unter "land" und für den Landkreis/die Stadt unter "kreis".

Nun folgen die einzelnen anzeigbaren Werte wie z.B. "hospitalisierungsInzidenz".
Alle anzeigbaren Werte haben die gleichen Parameter.
- "show" mit den Werten "true" und "false" gibt an, ob der Wert angezeigt wird oder nicht.
- "text" gibt an wie der Wert beschriftet werden soll.
- "einheit" wird hinter dem jeweiligen Wert angezeigt. Z.B. "%"
- "warnGelb" gibt an beim Überschreiten welches Wertes der Hintergrund für diesen Wert Gelb angezeigt werden soll.
- "warnOrange" gibt an beim Überschreiten welches Wertes der Hintergrund für diesen Wert Orange angezeigt werden soll.
- "warnRot" gibt an beim Überschreiten welches Wertes der Hintergrund für diesen Wert Rot angezeigt werden soll.
- Wird für den Warn-Wert -1 konfiguriert, so ist die entsprecehnde Farbe deaktiviert.
- "warnOP" kennt die Werte "GT" (größer als) und "LT" (kleiner als) und gibt an, ob beim Überschreiten oder beim Unterschreiten die jeweilige Farbe gelten soll.

![grafik](https://user-images.githubusercontent.com/74063738/142745763-63408dd4-5e80-4c54-938c-f4e339925d68.png)

Die Konfigurationsmöglichkeiten auf Bundesebene wirderholen sich für:
- neuinfektioenenInzidenz
- neuinfektioenenAnzahl
- neueTodesfaelle
- aktive
- faelle
- faelle7T
- todesfaelle
- genesene
- neueGenesene
- neueAktive
- intensivbettenBelegtProzent²
- intensivbettenBelegtAnzahl²
- intensivbettenFrei²
- hospitalisierungInzidenz³
- hospitalisierung7Tage
- impfQuote
- impfungenGesamt
- impfungenGesamtMin1
- impfungenGesamtGI
- impfungenGesamtBoost1
- impfungenGesamtBoost2
- impfungenGesamtBoost3
- impfungenGesamtBoost4
- rWert

Auf Landesebene gibt es folgende Werte, die genau wie die Bundesebene konfigurte werden können:
- neuinfektioenenInzidenz
- neuinfektioenenAnzahl
- neueTodesfaelle
- aktive
- faelle
- faelle7T
- todesfaelle
- genesene
- neueGenesene
- neueAktive
- intensivbettenBelegtProzent²
- intensivbettenBelegtAnzahl²
- intensivbettenFrei²
- hospitalisierungInzidenz³
- hospitalisierung7Tage
- impfQuote
- impfungenGesamt
- impfungenGesamtMin1
- impfungenGesamtGI
- impfungenGesamtBoost1
- impfungenGesamtBoost2
- impfungenGesamtBoost3
- impfungenGesamtBoost4

Auf Kreisebene sind es die folgenden Werte:
- neuinfektioenenInzidenz
- neuinfektioenenAnzahl
- neueTodesfaelle
- aktive
- faelle
- faelle7T
- todesfaelle
- genesene
- neueGenesene
- neueAktive
- intensivbettenBelegtProzent²
- intensivbettenBelegtAnzahl²
- intensivbettenFrei²


Im Bereich "colors" könnte bei Bedarf die Farbgebung verändert werden.

![grafik](https://user-images.githubusercontent.com/74063738/142745879-bea20232-5081-4bd4-9c4e-e8df3eb811a6.png)

Im Bereich "text" können in den einzelnen Widget-Bereichen einige Parameter konfiguriert werden.
Folgende Bereiche können konfiguriert werde:
- header
- sectionHeader
- sectionData
- footer
- error

Anpassbar sind jeweils die Parameter:
- "font" zur Angabe der Schriftart.
- "size" zur Angabe der Schriftgröße.
- "txAlign" mit den Werten "left", "right" und "center" zur Angabe der Schriftausrichtung.
- "txLight" zur Angabe der Textfarbe im Light-Mode.
- "txDark" zur Angabe der Textfarbe im Dark-Mode.
- "bgLight" zur Angabe der Basis Hintergrundfarbe  im Light-Mode.
- "bgDark" zur Angabe der Basis Hintergrundfarbe  im Dark-Mode.
- "cornerRadius" zur Angabe der Eckenrundung der Zeile.
- "paddingTop" zur Angabe des Textabstandes zum oberen Rand.
- "paddingLeft" zur Angabe des Textabstandes zum linken Rand.
- "paddingBottom" zur Angabe des Textabstandes zum unteren Rand.
- "paddingRight" zur Angabe des Textabstandes zum rechten Rand.

![grafik](https://user-images.githubusercontent.com/74063738/142745930-4015e218-d118-42ea-903c-d8a70f999a84.png)

1 = gestrichen

2 = Alle anzeigbaren Werte zu den Intensivstationen (Prozentuale Bettenbelegung, Anzahl der belegten Betten und freie Betten) basiert auf Angaben des DIVI-Intensivregister (www.intensivregister.de). Da diese Werte nicht in irgendeiner Form ohne Genehmigung reproduziert oder unter Verwendung elektronischer Systeme verarbeitet, vervielfältigt oder verbreitet werden dürfen, habe ich angefragt ob ich die Werte in meinem Skript verwenden darf. Die ernüchternde Antwort lautete für mich selbst dürfe ich dies tun, anderen diese Möglichkeit bereitstellen jedoch nicht. Die Begründung dazu lautet, dass die Daten bereits aufbereitet und auf der Seite von intensivregister.de öffentlich zur Verfügung gestellt werden. Daher habe ich im Skript einen Schalter eingebaut. Fragt per Mail beim DIVI-Intensivregister (www.intensivregister.de) unter info@divi-intensivregister.de an ob Ihr die Daten aus der DIVI-Intensivregister API für private Zwecke mit Hilfe eines Scriptable Skriptes auf dem Homebildschirm Eures Apple Devices anzeigen lassen dürft. Wenn Euch die Genehmigung dazu vorliegt, könnt Ihr den Schalter "diviNutzungsfreigabe" auf "true" setzen und die Werte werden abgefragt und angezeigt, sofern die Anzeige von Euch entsprechend konfiguriert wurde.

![grafik](https://user-images.githubusercontent.com/74063738/143497664-3e6dcacc-7131-411d-9e9c-f0b4a1e46837.png)

3 = Das Widget zeigt auf Bundes- und Landesebene die Hospitalisierungsinzidenz des RKI an. Diese kann deutlich (z.B. in Niedersachsen) von den Werten abweichen, die das Land selber ermittelt. Eine Gute Begründung dazu liefert z.B. Niedersachsen: "Hospitalisierungsinzidenz – Leitindikator ... Alle niedersächsischen Krankenhäuser melden über das IVENA-System täglich die Anzahl der mit COVID neu aufgenommenen Patientinnen und Patienten. Dabei spielt es keine Rolle, wann sich diese Patientinnen und Patienten mit dem Virus infiziert haben. Um den Wert der Hospitalisierungsinzidenz zu berechnen, wird die Zahl aller Neuaufnahmen der vergangenen sieben Tage addiert und auf die Quote pro 100.000 Einwohnerinnen und Einwohner umgerechnet. Dadurch ergibt sich ein guter Überblick über die Belastung der Krankenhäuser insgesamt. Das RKI legt bei seiner Berechnung hingegen ausschließlich die Zahl der Personen zugrunde, die sich in den vergangenen sieben Tage neu mit COVID-19 infiziert haben und die nach den Daten der Gesundheitsämter in einem Krankenhaus behandelt werden müssen. ..."

Quelle: https://www.niedersachsen.de/Coronavirus/aktuelle_lage_in_niedersachsen/niedersachsen-und-corona-aktuelle-leitindikatoren-203487.html


# Versionen:

Version 0.98 (26.05.2023):
- Bessere Initialisierung der Werte.
- Behebung kleinerer Fehler.

Version 0.98 (25.05.2023):
- Aktualisierungsdatum wird nur noch für angezeigte Werte angezeigt, sofern es keinen Dummy-Werte sind.
- Behebung des Fehlers, dass teilweise Variablen nicht definiert sind.

Version 0.97 (05.03.2023):
- Konsolidieren der Datenabrufe beim RKI, welche durch die Umstellung von Covid19_hubv auf rki_key_data_hubv möglich geworden sind.
- Implementieren zusätzlicher Cache Files, ändern des Speicherortes und erhöhen der Standard Cache Zeit auf 120 Minuten. Ein weiterer Versuch die Speichernutzung so zu beeinflussen, dass aktuelle Daten angezeigt werden können, auch wenn es weiterhin teilweise zu Speichermangel kommen dürfte.

Version 0.96 (04.03.2023):
- Das RKI hat die Datenquelle Covid19_hubv deaktiviert. Daher wurden die betroffenen Aufrufe auf rki_key_data_hubv umgestellt.

Version 0.95 (20.01.2023):
- Fehlerkorrektur. Wenn die iCloud nicht aktiv war kam es zu einem Fehler.

Version 0.94 (19.01.2023):
- Fehlerkorrektur. Wenn R-Faktor oder Impfquoten nicht mehr angezeigt werden sollten wurde diese auch nicht gelesen um Speicher zu sparen. Allerdings hat dies in der Folge zu einem Fehler geführt, der dafür sorgte, dass die Daten nicht mehr aktualisiert wurden.

Version 0.91 (12.06.2022):
- Beim letzten Update hat sich ein Fehler eingeschlichen, der zu einer vermehrten Anzeige von Fehlermeldungen geführt hat, wenn Daten (z.B. Geodaten) nicht ermittelbar waren. In diesem Fall sollen eigentlich die zuletz ermittelten Werte weiter angezeigt werden. Dies wurde korrigiert.

Version 0.90 (04.06.2022):
- Fehlerbehebung in der Berechnung der aktiven Fälle. Diese war in der Version 0.89 fehlerhaft, weil unter Umständen nicht mehr alle zur Berechnung erforderlichen Werte ermittelt wurden.

Version 0.89 (04.06.2022):
- Ein weitere Versuch die Speichernutzung noch einmal zu reduzieren. Es werden nur noch die Dinge abgefragt, die auch angezeigt werden sollen. Es kommen hier leider zwei Faktoren zusammen. Zum einen stellt das RKI Daten wie die Hospitalisierungsinzidenz, die Impfquoten und den R-Faktor in wirklich sperrigen CSV Dateien zur Verfügung, welche jedes mal gelesen werden müssen um die für die Anzeige benötigten Werte daraus auszulesen. Zum anderen schränkt Apple mit iOS die zugelassene Speichernutzung in einem Homescreen-Widget stark ein. Die Folge ist, dass das Skript beim Start aus der Scriptable App heraus sehr gut funktioniert. Im Widget selber werden jedoch alte Daten oder gar nichts angezeigt, weil das Widget im Hintergrund wegen Speichermangel abstürzt.

Version 0.88 (31.05.2022):
- Erster zaghafter Versuch den verwendeten Speicher zu reduzieren. Da der "hohe"  Speicherverbrauch zum Absturz des Widgets führt und keine bzw. alte Daten angezeigt werden.

Version 0.87 (30.05.2022):
- Korrektur der Impfquoten. Der Aufbau der CSV-Datei des RKI hatte sich geändert, wodurch fehlerhafte Werte ermitteltet wurden.
- Ergänzung der 2. Auffrischungsimpfung.

Version 0.86 (17.02.2022):
- Reaktion auf die geänderte API RKI COVID-19 beim RKI.

Version 0.85 (21.01.2022)
- Korrektur der Impfquoten. Der Aufbau der CSV-Datei des RKI hatte sich geändert, wodurch fehlerhafte Werte ermitteltet wurden.

Version 0.84 (23.12.2021)
- Korrektur der Impfquoten. Der Aufbau der CSV-Datei des RKI hatte sich geändert, wodurch fehlerhafte Werte ermitteltet wurden.

Version 0.83 (12.12.2021)
- Neben den Impf-Quoten können nun auch die Gesamt-Impfzahlen (Gesamt, Erste Impfung, Zweite Impfung, Auffrischungsimpfung) angezeigt werden.

Version 0.82 (11.12.2021)
- Anzeige von Impf-Quoten

Version 0.81 (04.12.2021)
- Leichte Anpassung der Farbwerte für gelb und rot.

Version 0.80 (28.11.2021)
- Erste öffentliche Testversion

