// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: heartbeat;

// Datenquellen COVID-19 Datenhub:
// RKI Corona Landkreise:           https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0
// RKI Key Data:                    https://services7.arcgis.com/mOBPykOjAyBO2ZKk/ArcGIS/rest/services/rki_key_data_hubv/FeatureServer/0

// Datenbeschreibung COVID-19 Datenhub:
// RKI Corona Landkreise:           https://npgeo-corona-npgeo-de.hub.arcgis.com/datasets/917fc37a709542548cc3be077a786c17_0
// RKI Key Data:                    https://npgeo-corona-npgeo-de.hub.arcgis.com/datasets/c2f3c3b935a242169c6bec82e1fa573e_0

// Benutzerdefinierte Lizenz:
// Bundesamt für Kartographie und Geodäsie
// Robert Koch-Institut
// Die Daten sind die „Fallzahlen in Deutschland“ des Robert Koch-Institut (RKI) und stehen unter der Open Data Datenlizenz 
// Deutschland – Namensnennung – Version 2.0 zur Verfügung.

// Quellenvermerk:
// Robert Koch-Institut (RKI), dl-de/by-2-0

// Haftungsausschluss:
// „Die Inhalte, die über die Internetseiten des Robert Koch-Instituts zur Verfügung gestellt werden,
// dienen ausschließlich der allgemeinen Information der Öffentlichkeit, vorrangig der Fachöffentlichkeit“.

// Datenschutzerklärung:
// „Die Nutzung des Webangebotes des RKI ist grundsätzlich ohne Bekanntgabe personenbezogener Daten möglich“.


// Datenquellen:
// RKI COVID19 Hospitalisierung:    https://raw.githubusercontent.com/robert-koch-institut/COVID-19-Hospitalisierungen_in_Deutschland/master/Aktuell_Deutschland_COVID-19-Hospitalisierungen.csv
// RKI COVID-19-Impfungen:          https://raw.githubusercontent.com/robert-koch-institut/COVID-19-Impfungen_in_Deutschland/master/Aktuell_Deutschland_Impfquoten_COVID-19.csv
// RKI R-Faktor:                    https://raw.githubusercontent.com/robert-koch-institut/SARS-CoV-2-Nowcasting_und_-R-Schaetzung/main/Nowcast_R_aktuell.csv

// Datenbeschreibung:
// RKI COVID19 Hospitalisierung:    https://github.com/robert-koch-institut/COVID-19-Hospitalisierungen_in_Deutschland
// RKI COVID-19-Impfungen:          https://github.com/robert-koch-institut/COVID-19-Impfungen_in_Deutschland
// RKI R-Faktor:                    https://github.com/robert-koch-institut/SARS-CoV-2-Nowcasting_und_-R-Schaetzung

// Benutzerdefinierte Lizenz:
// Robert Koch-Institut (RKI)
// Die Daten der "COVID-19-Hospitalisierungen in Deutschland", "COVID-19-Impfungen in Deutschland" und der
// "SARS-CoV-2-Nowcasting und -R-Schaetzung" sind lizenziert unter der
// Creative Commons Namensnennung 4.0 International Public License | CC-BY 4.0 International

// Quellenvermerk:
// Robert Koch-Institut (RKI), CC-BY 4.0 International

// Haftungsausschluss:
// „Die Inhalte, die über die Internetseiten des Robert Koch-Instituts zur Verfügung gestellt werden,
// dienen ausschließlich der allgemeinen Information der Öffentlichkeit, vorrangig der Fachöffentlichkeit“.


// Datenquellen:
// DIVI-Intensivregister auf Landkreisebene:   https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/DIVI_Intensivregister_Landkreise/FeatureServer/0

// Datenbeschreibung:
// DIVI-Intensivregister auf Landkreisebene:   https://npgeo-corona-npgeo-de.hub.arcgis.com/datasets/8fc79b6cf7054b1b80385bda619f39b8_0/explore

// Benutzerdefinierte Lizenz:
// Deutsche Interdisziplinäre Vereinigung für Intensiv- und Notfallmedizin e.V.
// Bitte kontaktieren Sie DIVI-Intensivregister, sollten Sie die Daten weiterverwenden wollen. (https://www.divi.de/register/anprechpartner-register)
// Datenquelle: DIVI-Intensivregister (https://www.divi.de/register/tagesreport)
// Terms of Use: DIVI-Intensivregister (https://www.divi.de/register/tagesreport)
// Credits (Attribution): DIVI-Intensivregister (https://www.divi.de/impressum)

// Quellenvermerk:
// DIVI-Intensivregister (www.intensivregister.de)

// Haftungsausschluss:
// Die Daten des Intensivregister können nach vorheriger Absprache und unter Verwendung des Quellenhinweis
// „DIVI-Intensivregister“, zumindest für journalistische Zwecke, frei verwendet werden.
// Der Herausgeber behält sich alle Rechte vor, insbesondere das der Übersetzung,
// des öffentlichen Vortrages sowie der Übertragung durch Rundfunk und Fernsehen, auch einzelner Teile.
// Keine Inhalte dürfen in irgendeiner Form ohne Genehmigung reproduziert oder unter Verwendung elektronischer
// Systeme verarbeitet, vervielfältigt oder verbreitet werden. Das uneingeschränkte Kopierrecht aller Inhalte liegt –
// falls nicht anders gekennzeichnet (z.B. Pressetexte und Pressefotos) – bei dem Herausgeber.
// Die Verwendung von Texten, Textteilen oder Bildmaterial bedarf einer schriftlichen Zustimmung der Redaktion.

// DIVI-Nutzungsfreigabe liegt vor (ja = true / nein = false)
const diviNutzungsfreigabe  = false

// Widget Basic Information
const basic = {

    name: {

        full:               "Aktueller Corona Lagebericht"
        ,short:             "ACL"

    }

    ,version:               "v0.98"
    ,lastChange:            "24.25.2023"
    ,author:                "icsAT"
    ,source:                "https://github.com/icsAT/AktuellerCoronaLagebericht"

}

const custom = {

    debug:                  false
    ,logging:               false
    ,altUeberschrift:       ""
    ,cacheTime:             120

    ,bund: {

        show:               true
        ,head:               "Deutschland"
        ,neuinfektioenenInzidenz: {

            show:           true
            ,text:          "7-Tage-Inzidenz Neuinfektionen"
            ,einheit:       ""
            ,warnGelb:      35
            ,warnOrange:    100
            ,warnRot:       200
            ,warnOP:        "GT"

        }
        ,neuinfektioenenAnzahl: {

            show:           true
            ,text:          "Anzahl Neuinfektionen"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,neueTodesfaelle: {

            show:           true
            ,text:          "Neue Todesfälle"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,aktive: {

            show:           true
            ,text:          "Aktive Fälle"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,faelle: {

            show:           false
            ,text:          "Fälle Gesamt"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,faelle7T: {

            show:           false
            ,text:          "Fälle 7-Tage"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,todesfaelle: {

            show:           false
            ,text:          "Todesfälle Gesamt"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,genesene: {

            show:           false
            ,text:          "Genesene"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,neueGenesene: {

            show:           false
            ,text:          "Neue Genesene"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,neueAktive: {

            show:           false
            ,text:          "Neue Aktive Fälle"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,intensivbettenBelegtProzent: {

            show:           false
            ,text:          "Intensivbettenbelegung C19"
            ,einheit:       "%"
            ,warnGelb:      5
            ,warnOrange:    10
            ,warnRot:       15
            ,warnOP:        "GT"

        }
        ,intensivbettenBelegtAnzahl:  {

            show:           false
            ,text:          "Intensivbettenbelegung C19"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,intensivbettenFrei:  {

            show:           false
            ,text:          "Freie Intensivbetten"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,hospitalisierungInzidenz: {

            show:           true
            ,text:          "Hospitalisierungs-Inzidenz"
            ,einheit:       ""
            ,warnGelb:      3
            ,warnOrange:    6
            ,warnRot:       9
            ,warnOP:        "GT"

        }
        ,hospitalisierung7Tage: {

            show:           false
            ,text:          "Stationäre Aufnahmen 7T"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,impfQuote: {
            
            show:           false
            ,text:          "Impfquote (1./GI/B1/B2)"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,impfungenGesamt: {
            
            show:           false
            ,text:          "Impfungen Gesamt"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,impfungenGesamtMin1: {
            
            show:           false
            ,text:          "1. Impfungen"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,impfungenGesamtGI: {
            
            show:           false
            ,text:          "Grundimmunisierungen"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,impfungenGesamtBoost1: {
            
            show:           false
            ,text:          "1. Auffrischungsimpfungen"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,impfungenGesamtBoost2: {
            
            show:           false
            ,text:          "2. Auffrischungsimpfungen"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,impfungenGesamtBoost3: {
            
            show:           false
            ,text:          "3. Auffrischungsimpfungen"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,impfungenGesamtBoost4: {
            
            show:           false
            ,text:          "4. Auffrischungsimpfungen"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,rWert: {

            show:           true
            ,text:          "7-Tage-R-Wert"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
    }

    ,land: {

        show:               true
        ,neuinfektioenenInzidenz: {

            show:           true
            ,text:          "7-Tage-Inzidenz Neuinfektionen"
            ,einheit:       ""
            ,warnGelb:      35
            ,warnOrange:    100
            ,warnRot:       200
            ,warnOP:        "GT"

        }
        ,neuinfektioenenAnzahl: {

            show:           false
            ,text:          "Anzahl Neuinfektionen"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,neueTodesfaelle: {

            show:           true
            ,text:          "Neue Todesfälle"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,aktive: {

            show:           true
            ,text:          "Aktive Fälle"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,faelle: {

            show:           false
            ,text:          "Fälle Gesamt"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,faelle7T: {

            show:           false
            ,text:          "Fälle 7-Tage"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,todesfaelle: {

            show:           false
            ,text:          "Todesfälle Gesamt"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,genesene: {

            show:           false
            ,text:          "Genesene"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,neueGenesene: {

            show:           false
            ,text:          "Neue Genesene"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,neueAktive: {

            show:           false
            ,text:          "Neue Aktive Fälle"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,intensivbettenBelegtProzent: {

            show:           false
            ,text:          "Intensivbettenbelegung C19"
            ,einheit:       "%"
            ,warnGelb:      5
            ,warnOrange:    10
            ,warnRot:       15
            ,warnOP:        ""

        }
        ,intensivbettenBelegtAnzahl:  {

            show:           false
            ,text:          "Intensivbettenbelegung C19"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,intensivbettenFrei:  {

            show:           false
            ,text:          "Freie Intensivbetten"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,hospitalisierungInzidenz: {

            show:           false
            ,text:          "Hospitalisierungs-Inzidenz"
            ,einheit:       ""
            ,warnGelb:      3
            ,warnOrange:    6
            ,warnRot:       9
            ,warnOP:        "GT"

        }
        ,hospitalisierung7Tage: {

            show:           false
            ,text:          "Stationäre Aufnahmen 7T"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        "GT"

        }
        ,impfQuote: {
            
            show:           false
            ,text:          "Impfquote (1./GI/B1/B2)"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,impfungenGesamt: {
            
            show:           false
            ,text:          "Impfungen Gesamt"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,impfungenGesamtMin1: {
            
            show:           false
            ,text:          "1. Impfungen"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,impfungenGesamtGI: {
            
            show:           false
            ,text:          "Grundimmunisierungen"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,impfungenGesamtBoost1: {
            
            show:           false
            ,text:          "1. Auffrischungsimpfungen"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,impfungenGesamtBoost2: {
            
            show:           false
            ,text:          "2. Auffrischungsimpfungen"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,impfungenGesamtBoost3: {
            
            show:           false
            ,text:          "3. Auffrischungsimpfungen"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,impfungenGesamtBoost4: {
            
            show:           false
            ,text:          "4. Auffrischungsimpfungen"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }

    }
    
    ,kreis: {

        show:               true
        ,neuinfektioenenInzidenz: {

            show:           true
            ,text:          "7-Tage-Inzidenz Neuinfektionen"
            ,einheit:       ""
            ,warnGelb:      35
            ,warnOrange:    100
            ,warnRot:       200
            ,warnOP:        "GT"

        }
        ,neuinfektioenenAnzahl: {

            show:           true
            ,text:          "Anzahl Neuinfektionen"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,neueTodesfaelle: {

            show:           true
            ,text:          "Neue Todesfälle"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,aktive: {

            show:           true
            ,text:          "Aktive Fälle"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,faelle: {

            show:           false
            ,text:          "Fälle Gesamt"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,faelle7T: {

            show:           false
            ,text:          "Fälle 7-Tage"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,todesfaelle: {

            show:           false
            ,text:          "Todesfälle Gesamt"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,genesene: {

            show:           false
            ,text:          "Genesene"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,neueGenesene: {

            show:           false
            ,text:          "neue Genesene"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,neueAktive: {

            show:           false
            ,text:          "neue Aktive Fälle"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,intensivbettenBelegtProzent: {

            show:           false
            ,text:          "Intensivbettenbelegung C19"
            ,einheit:       "%"
            ,warnGelb:      5
            ,warnOrange:    10
            ,warnRot:       15
            ,warnOP:        "GT"

        }
        ,intensivbettenBelegtAnzahl:  {

            show:           false
            ,text:          "Intensivbettenbelegung C19"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,intensivbettenFrei:  {

            show:           false
            ,text:          "Freie Intensivbetten"
            ,einheit:       ""
            ,warnGelb:      10
            ,warnOrange:    5
            ,warnRot:       3
            ,warnOP:        "LT"
        }
    }
}

const colors = {

    blueLight:              new Color('#D9E2EB')
    ,blueDark:              new Color('#F7F7F7')
    ,yellowLight:           new Color('#F3F781')
    ,yellowDark:            new Color('#FEF9E7')
    ,orangeLight:           new Color('#FFB84D')
    ,orangeDark:            new Color('#FFD9B3')
    ,redLight:              new Color('#F78181')
    ,redDark:               new Color('#FFAD99')
    ,white:                 new Color('#FFFFFF')
    ,grey90:                new Color('#E6E6E6')
    ,grey70:                new Color('#B3B3B3')
    ,grey30:                new Color('#4D4D4D')
    ,grey10:                new Color('#1A1A1A')
    ,black:                 new Color('#000000')
    
}

const text = {

    header: {

        font:               "chalkduster"
        ,size:              14
        ,txAlign:           "center"
        ,txLight:           colors.black
        ,txDark:            colors.black
        ,bgLight:           false
        ,bgDark:            false
        ,cornerRadius:      0
        ,paddingTop:        2
        ,paddingLeft:       2
        ,paddingBottom:     2
        ,paddingRight:      2

    }
    ,sectionHeader: {

        font:               "chalkduster"
        ,size:              12
        ,txAlign:           "left"
        ,txLight:           colors.white
        ,txDark:            colors.black
        ,bgLight:           colors.black
        ,bgDark:            colors.white
        ,cornerRadius:      5
        ,paddingTop:        2
        ,paddingLeft:       10
        ,paddingBottom:     2
        ,paddingRight:      10

    }
    ,sectionData: {

        font:               "Menlo"
        ,size:              10
        ,txAlign:           "left"
        ,txLight:           colors.black
        ,txDark:            colors.black
        ,bgLight:           colors.grey70
        ,bgDark:            colors.grey90
        ,cornerRadius:      2
        ,paddingTop:        2
        ,paddingLeft:       2
        ,paddingBottom:     2
        ,paddingRight:      2

    }
    ,footer: {

        font:               "Menlo"
        ,size:              7
        ,txAlign:           "center"
        ,txLight:           colors.black
        ,txDark:            colors.black
        ,bgLight:           false
        ,bgDark:            false
        ,cornerRadius:      0
        ,paddingTop:        0
        ,paddingLeft:       0
        ,paddingBottom:     0
        ,paddingRight:      0

    }
    ,error: {

        font:               "Menlo"
        ,size:              12
        ,txAlign:           "center"
        ,txLight:           colors.redLight
        ,txDark:            colors.redDark
        ,bgLight:           false
        ,bgDark:            false
        ,cornerRadius:      0
        ,paddingTop:        0
        ,paddingLeft:       0
        ,paddingBottom:     0
        ,paddingRight:      0

    }

}

// URL's zur Datenermittlung
const rkiApiLk                  = (geodaten) => `https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=1%3D1&outFields=AGS,GEN,BEZ,BL,BL_ID,last_update&geometry=${geodaten.longitude.toFixed(3)}%2C${geodaten.latitude.toFixed(3)}&geometryType=esriGeometryPoint&inSR=4326&spatialRel=esriSpatialRelWithin&returnGeometry=false&outSR=4326&f=json`
const rkiApiLkKeyData           = (lkID) => `https://services7.arcgis.com/mOBPykOjAyBO2ZKk/ArcGIS/rest/services/rki_key_data_hubv/FeatureServer/0/query?where=AdmUnitId=${lkID}&outFields=*&returnGeometry=false&f=json`
const diviApiLk                 = (lkID) => `https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/DIVI_Intensivregister_Landkreise/FeatureServer/0/query?where=AGS=${lkID}&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=false&featureEncoding=esriDefault&multipatchOption=none&maxAllowableOffset=&geometryPrecision=&outSR=&sqlFormat=none&f=json`

const rkiApiBlKeyData           = (blID) => `https://services7.arcgis.com/mOBPykOjAyBO2ZKk/ArcGIS/rest/services/rki_key_data_hubv/FeatureServer/0/query?where=AdmUnitId=${blID}+AND+BundeslandId=${blID}&outFields=*&returnGeometry=false&f=json`
const diviApiBl                 = (blID) => `https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/DIVI_Intensivregister_Landkreise/FeatureServer/0/query?where=BL_ID=${blID}&returnGeodetic=false&outFields=*&returnGeometry=false&returnCentroid=false&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22faelle_covid_aktuell%22%2C%22outStatisticFieldName%22%3A%22faelle_covid_aktuell%22%7D%2C%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22faelle_covid_aktuell_beatmet%22%2C%22outStatisticFieldName%22%3A%22faelle_covid_aktuell_beatmet%22%7D%2C%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22betten_frei%22%2C%22outStatisticFieldName%22%3A%22betten_frei%22%7D%2C%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22betten_gesamt%22%2C%22outStatisticFieldName%22%3A%22betten_gesamt%22%7D%2C%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22anzahl_standorte%22%2C%22outStatisticFieldName%22%3A%22anzahl_standorte%22%7D%2C%7B%22statisticType%22%3A%22max%22%2C%22onStatisticField%22%3A%22daten_stand%22%2C%22outStatisticFieldName%22%3A%22daten_stand%22%7D%5D&returnZ=false&returnM=false&returnExceededLimitFeatures=true&sqlFormat=none&f=json`

const rkiApiDeKeyData           = `https://services7.arcgis.com/mOBPykOjAyBO2ZKk/ArcGIS/rest/services/rki_key_data_hubv/FeatureServer/0/query?where=AdmUnitId=0+AND+BundeslandId=0&outFields=*&returnGeometry=false&f=json`
const diviApiDe                 = `https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/DIVI_Intensivregister_Landkreise/FeatureServer/0/query?where=1=1&returnGeodetic=false&outFields=*&returnGeometry=false&returnCentroid=false&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22faelle_covid_aktuell%22%2C%22outStatisticFieldName%22%3A%22faelle_covid_aktuell%22%7D%2C%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22faelle_covid_aktuell_beatmet%22%2C%22outStatisticFieldName%22%3A%22faelle_covid_aktuell_beatmet%22%7D%2C%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22betten_frei%22%2C%22outStatisticFieldName%22%3A%22betten_frei%22%7D%2C%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22betten_gesamt%22%2C%22outStatisticFieldName%22%3A%22betten_gesamt%22%7D%2C%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22anzahl_standorte%22%2C%22outStatisticFieldName%22%3A%22anzahl_standorte%22%7D%2C%7B%22statisticType%22%3A%22max%22%2C%22onStatisticField%22%3A%22daten_stand%22%2C%22outStatisticFieldName%22%3A%22daten_stand%22%7D%5D&returnZ=false&returnM=false&returnExceededLimitFeatures=true&sqlFormat=none&f=json`

const rkiCsvHospitalisierung    = `https://raw.githubusercontent.com/robert-koch-institut/COVID-19-Hospitalisierungen_in_Deutschland/master/Aktuell_Deutschland_COVID-19-Hospitalisierungen.csv`
const rkiCsvImpfungen           = `https://raw.githubusercontent.com/robert-koch-institut/COVID-19-Impfungen_in_Deutschland/master/Aktuell_Deutschland_Impfquoten_COVID-19.csv`
const rkiCsvRFaktor             = `https://raw.githubusercontent.com/robert-koch-institut/SARS-CoV-2-Nowcasting_und_-R-Schaetzung/main/Nowcast_R_aktuell.csv`

// running the script
config.widgetFamily = config.widgetFamily || 'large'

let widget = await createWidgetCache()

if (config.runsInWidget) {

    Script.setWidget(widget)

} else {

    switch (config.widgetFamily) {

        case 'small': await widget.presentSmall(); break;
        case 'medium': await widget.presentMedium(); break;
        case 'large': await widget.presentLarge(); break;
        case 'extraLarge': await widget.presentExtraLarge(); break;

    }

}

widget = await createWidget()

if (config.runsInWidget) {

    Script.setWidget(widget)

} else {

    switch (config.widgetFamily) {

        case 'small': await widget.presentSmall(); break;
        case 'medium': await widget.presentMedium(); break;
        case 'large': await widget.presentLarge(); break;
        case 'extraLarge': await widget.presentExtraLarge(); break;

    }

}

Script.complete()

// create the widget from cache
async function createWidgetCache() {

    let fm = FileManager.local()
    const iCloudInUse = fm.isFileStoredIniCloud(module.filename)
    fm = iCloudInUse ? FileManager.iCloud() : fm

    let basicPath = fm.joinPath(fm.documentsDirectory(), basic.name.short)
    if (!fm.fileExists(basicPath) || !fm.isDirectory(basicPath)) { fm.createDirectory(basicPath) }
    let logPath = fm.joinPath(basicPath, "Logs")
    if (!fm.fileExists(logPath) || !fm.isDirectory(logPath)) { fm.createDirectory(logPath) }
    let logFile = fm.joinPath(logPath, basic.name.short + ".log")
    let cachePath = fm.joinPath(basicPath, "Cache")
    if (!fm.fileExists(cachePath) || !fm.isDirectory(cachePath)) { fm.createDirectory(cachePath) }
    let cacheFile = fm.joinPath(cachePath, basic.name.short + ".cache")
   
    if (fm.fileExists(logFile)) fm.remove(logFile)
    
    logDebug("basicPath: " + basicPath)
    logDebug("logPath: " + logPath)
    logDebug("logFile: " + logFile)
    logDebug("cachePath: " + cachePath)
    logDebug("cacheFile: " + cacheFile)

    logDebug("START async function crateWidgetCache()")

    let geodaten = ""
    let lakrDaten = ""
    let locationID = ""
    
    try {
	
		geodaten = await geodatenHolen(args.widgetParameter)
		logDebug("geodaten: " + JSON.stringify(geodaten))
            
		lakrDaten = await lakrDatenHolen(geodaten)
		logDebug("lakrDaten: " + JSON.stringify(lakrDaten))
		
		locationID  = { AGS: lakrDaten.AGS }
		logDebug("locationID aktuell: " + JSON.stringify(locationID))

		fm.writeString(cacheFile, JSON.stringify(locationID, null, 2))

	} catch(e) {
  
		locationID  = cacheHolen(fm, cacheFile)
        logDebug("locationID aus Cache: " + JSON.stringify(locationID))

	}

	if (locationID.AGS) {
  
		cachePath = fm.joinPath(cachePath, locationID.AGS)
		logDebug("cachePath locationID: " + cachePath)
        
	} else {
  
  		cachePath = fm.joinPath(cachePath, "0")
        logDebug("cachePath 0: " + cachePath)

	}

    if (!fm.fileExists(cachePath) || !fm.isDirectory(cachePath)) { fm.createDirectory(cachePath) }

    let cacheFileLaKr = fm.joinPath(cachePath, basic.name.short + ".LaKr.cache")
    let cacheFileKeyD = fm.joinPath(cachePath, basic.name.short + ".KeyD.cache")
    let cacheFileDIVI = fm.joinPath(cachePath, basic.name.short + ".DIVI.cache")
    let cacheFileImpf = fm.joinPath(cachePath, basic.name.short + ".Impf.cache")
    let cacheFileHosp = fm.joinPath(cachePath, basic.name.short + ".Hosp.cache")
    let cacheFileRWer = fm.joinPath(cachePath, basic.name.short + ".rWer.cache")
    
    logDebug("cacheFileLaKr: " + cacheFileLaKr)
    logDebug("cacheFileKeyD: " + cacheFileKeyD)
    logDebug("cacheFileDIVI: " + cacheFileDIVI)
    logDebug("cacheFileImpf: " + cacheFileImpf)
    logDebug("cacheFileHosp: " + cacheFileHosp)
    logDebug("cacheFileRWer: " + cacheFileRWer)
    
    if (!lakrDaten || lakrDaten == "") {

        lakrDaten = cacheHolen(fm, cacheFileLaKr, custom.cacheTime)
        logDebug("lakrDaten aus Cache: " + JSON.stringify(lakrDaten))

    }
    
    let keydDaten = cacheHolen(fm, cacheFileKeyD, custom.cacheTime)
    logDebug("keydDaten aus Cache: " + JSON.stringify(keydDaten))

    let diviDaten = cacheHolen(fm, cacheFileDIVI, custom.cacheTime)
    logDebug("diviDaten aus Cache: " + JSON.stringify(diviDaten))

    let impfDaten = cacheHolen(fm, cacheFileImpf, custom.cacheTime)
    logDebug("impfDaten aus Cache: " + JSON.stringify(impfDaten))

    let hospDaten = cacheHolen(fm, cacheFileHosp, custom.cacheTime)
    logDebug("hospDaten aus Cache: " + JSON.stringify(hospDaten))
      
    let rWerDaten = cacheHolen(fm, cacheFileRWer, custom.cacheTime)
    logDebug("rWerDaten aus Cache: " + JSON.stringify(rWerDaten))

    let covidDaten = {

        AGS:                            "00000"
        ,GEN:                           "n/a"
        ,BEZ:                           ""
        ,BL:                            "n/a"
        ,BL_ID:                         "0"
        ,lkLastUpdate:                  "Fehler"
        ,lkInzidenz:                    "-1"
        ,blInzidenz:                    "-1"
        ,deInzidenz:                    "-1"
        ,lkAnzahlNeueFaelle:            "-1"
        ,blAnzahlNeueFaelle:            "-1"
        ,deAnzahlNeueFaelle:            "-1"
        ,lkNeueTodesfaelle:             "-1"
        ,blNeueTodesfaelle:             "-1"
        ,deNeueTodesfaelle:             "-1"
        ,lkAktive:                      "-1"
        ,blAktive:                      "-1"
        ,deAktive:                      "-1"
        ,lkAnzahlFaelle:                "-1"
        ,blAnzahlFaelle:                "-1"
        ,deAnzahlFaelle:                "-1"
        ,lkAnzahlFaelle7T:              "-1"
        ,blAnzahlFaelle7T:              "-1"
        ,deAnzahlFaelle7T:              "-1"
        ,lkTodesfaelle:                 "-1"            
        ,blTodesfaelle:                 "-1"
        ,deTodesfaelle:                 "-1"
        ,lkGenesene:                    "-1"
        ,blGenesene:                    "-1"
        ,deGenesene:                    "-1"
        ,lkNeueGenesene:                "-1"
        ,blNeueGenesene:                "-1"
        ,deNeueGenesene:                "-1"
        ,lkNeueAktive:                  "-1"
        ,blNeueAktive:                  "-1"
        ,deNeueAktive:                  "-1"
        ,lkIntensivBelegungProzent:     "-1"
        ,lkIntensivbelegungAnzahl:      "-1"
        ,lkFreieIntensivbetten:         "-1"
        ,lkIntensivbettenUpdate:        "Fehler"
        ,blIntensivBelegungProzent:     "-1"
        ,blIntensivbelegungAnzahl:      "-1"
        ,blFreieIntensivbetten:         "-1"
        ,blIntensivbettenUpdate:        "Fehler"
        ,deIntensivBelegungProzent:     "-1"
        ,deIntensivbelegungAnzahl:      "-1"
        ,deFreieIntensivbetten:         "-1"
        ,deIntensivbettenUpdate:        "Fehler"
        ,blHospitalisierungFaelle7T:    "-1"
        ,blHospitalisierungInzidenz7T:  "-1"
        ,blHospitalisierungUpdate:      "-1"
        ,deHospitalisierungFaelle7T:    "-1"
        ,deHospitalisierungInzidenz7T:  "-1"
        ,deHospitalisierungUpdate:      "Fehler"
        ,deImpfungAnzahl:               "-1"
        ,deImpfungAnzahlMin1:           "-1"
        ,deImpfungAnzahlGI:             "-1"
        ,deImpfungAnzahlBoost1:         "-1"
        ,deImpfungAnzahlBoost2:         "-1"
        ,deImpfungAnzahlBoost3:         "-1"
        ,deImpfungAnzahlBoost4:         "-1"
        ,deImpfungQuoteMin1:            "-1"
        ,deImpfungQuoteGI:              "-1"
        ,deImpfungQuoteBoost1:          "-1"
        ,deImpfungQuoteBoost2:          "-1"
        ,deImpfungUpdate:               "Fehler"
        ,blImpfungAnzahl:               "-1"
        ,blImpfungAnzahlMin1:           "-1"
        ,blImpfungAnzahlGI:             "-1"
        ,blImpfungAnzahlBoost1:         "-1"
        ,blImpfungAnzahlBoost2:         "-1"
        ,blImpfungAnzahlBoost3:         "-1"
        ,blImpfungAnzahlBoost4:         "-1"
        ,blImpfungQuoteMin1:            "-1"
        ,blImpfungQuoteGI:              "-1"
        ,blImpfungQuoteBoost1:          "-1"
        ,blImpfungQuoteBoost2:          "-1"
        ,blImpfungUpdate:               "Fehler"
        ,rFaktor:                       "-1"

    }
    
    if ( lakrDaten ) { covidDaten.AGS = lakrDaten.AGS }
    if ( lakrDaten ) { covidDaten.GEN = lakrDaten.GEN }
    if ( lakrDaten ) { covidDaten.BEZ = lakrDaten.BEZ }
    if ( lakrDaten ) { covidDaten.BL = lakrDaten.BL }
    if ( lakrDaten ) { covidDaten.BL_ID = lakrDaten.BL_ID }
    if ( lakrDaten ) { covidDaten.lkLastUpdate = lakrDaten.lkLastUpdate }
    
    if ( keydDaten ) { covidDaten.lkInzidenz = keydDaten.lkInzidenz }
    if ( keydDaten ) { covidDaten.blInzidenz = keydDaten.blInzidenz }
    if ( keydDaten ) { covidDaten.deInzidenz = keydDaten.deInzidenz }
    if ( keydDaten ) { covidDaten.lkAnzahlNeueFaelle = keydDaten.lkAnzahlNeueFaelle }
    if ( keydDaten ) { covidDaten.blAnzahlNeueFaelle = keydDaten.blAnzahlNeueFaelle }
    if ( keydDaten ) { covidDaten.deAnzahlNeueFaelle = keydDaten.deAnzahlNeueFaelle }
    if ( keydDaten ) { covidDaten.lkNeueTodesfaelle = keydDaten.lkNeueTodesfaelle }
    if ( keydDaten ) { covidDaten.blNeueTodesfaelle = keydDaten.blNeueTodesfaelle }
    if ( keydDaten ) { covidDaten.deNeueTodesfaelle = keydDaten.deNeueTodesfaelle }
    if ( keydDaten ) { covidDaten.lkAktive = keydDaten.lkAktive }
    if ( keydDaten ) { covidDaten.blAktive = keydDaten.blAktive }
    if ( keydDaten ) { covidDaten.deAktive = keydDaten.deAktive }
    if ( keydDaten ) { covidDaten.lkAnzahlFaelle = keydDaten.lkAnzahlFaelle }
    if ( keydDaten ) { covidDaten.blAnzahlFaelle = keydDaten.blAnzahlFaelle }
    if ( keydDaten ) { covidDaten.deAnzahlFaelle = keydDaten.deAnzahlFaelle }
    if ( keydDaten ) { covidDaten.lkAnzahlFaelle7T = keydDaten.lkAnzahlFaelle7T }
    if ( keydDaten ) { covidDaten.blAnzahlFaelle7T = keydDaten.blAnzahlFaelle7T }
    if ( keydDaten ) { covidDaten.deAnzahlFaelle7T = keydDaten.deAnzahlFaelle7T }
    if ( keydDaten ) { covidDaten.lkTodesfaelle = keydDaten.lkTodesfaelle }
    if ( keydDaten ) { covidDaten.blTodesfaelle = keydDaten.blTodesfaelle }
    if ( keydDaten ) { covidDaten.deTodesfaelle = keydDaten.deTodesfaelle }
    if ( keydDaten ) { covidDaten.lkGenesene = keydDaten.lkGenesene }
    if ( keydDaten ) { covidDaten.blGenesene = keydDaten.blGenesene }
    if ( keydDaten ) { covidDaten.deGenesene = keydDaten.deGenesene }
    if ( keydDaten ) { covidDaten.lkNeueGenesene = keydDaten.lkNeueGenesene }
    if ( keydDaten ) { covidDaten.blNeueGenesene = keydDaten.blNeueGenesene }
    if ( keydDaten ) { covidDaten.deNeueGenesene = keydDaten.deNeueGenesene }
    if ( keydDaten ) { covidDaten.lkNeueAktive = keydDaten.lkNeueAktive }
    if ( keydDaten ) { covidDaten.blNeueAktive = keydDaten.blNeueAktive }
    if ( keydDaten ) { covidDaten.deNeueAktive = keydDaten.deNeueAktive }
    
    if ( diviDaten ) { covidDaten.lkIntensivBelegungProzent = diviDaten.lkIntensivBelegungProzent }
    if ( diviDaten ) { covidDaten.lkIntensivbelegungAnzahl = diviDaten.lkIntensivbelegungAnzahl }
    if ( diviDaten ) { covidDaten.lkFreieIntensivbetten = diviDaten.lkFreieIntensivbetten }
    if ( diviDaten ) { covidDaten.lkIntensivbettenUpdate = diviDaten.lkIntensivbettenUpdate }
    if ( diviDaten ) { covidDaten.blIntensivBelegungProzent = diviDaten.blIntensivBelegungProzent }
    if ( diviDaten ) { covidDaten.blIntensivbelegungAnzahl = diviDaten.blIntensivbelegungAnzahl }
    if ( diviDaten ) { covidDaten.blFreieIntensivbetten = diviDaten.blFreieIntensivbetten }
    if ( diviDaten ) { covidDaten.blIntensivbettenUpdate = diviDaten.blIntensivbettenUpdate }
    if ( diviDaten ) { covidDaten.deIntensivBelegungProzent = diviDaten.deIntensivBelegungProzent }
    if ( diviDaten ) { covidDaten.deIntensivbelegungAnzahl = diviDaten.deIntensivbelegungAnzahl }
    if ( diviDaten ) { covidDaten.deFreieIntensivbetten = diviDaten.deFreieIntensivbetten }
    if ( diviDaten ) { covidDaten.deIntensivbettenUpdate = diviDaten.deIntensivbettenUpdate }
    
    if ( impfDaten ) { covidDaten.deImpfungAnzahl = impfDaten.deImpfungAnzahl }
    if ( impfDaten ) { covidDaten.deImpfungAnzahlMin1 = impfDaten.deImpfungAnzahlMin1 }
    if ( impfDaten ) { covidDaten.deImpfungAnzahlGI = impfDaten.deImpfungAnzahlGI }
    if ( impfDaten ) { covidDaten.deImpfungAnzahlBoost1 = impfDaten.deImpfungAnzahlBoost1 }
    if ( impfDaten ) { covidDaten.deImpfungAnzahlBoost2 = impfDaten.deImpfungAnzahlBoost2 }
    if ( impfDaten ) { covidDaten.deImpfungAnzahlBoost3 = impfDaten.deImpfungAnzahlBoost3 }
    if ( impfDaten ) { covidDaten.deImpfungAnzahlBoost4 = impfDaten.deImpfungAnzahlBoost4 }
    if ( impfDaten ) { covidDaten.deImpfungQuoteMin1 = impfDaten.deImpfungQuoteMin1 }
    if ( impfDaten ) { covidDaten.deImpfungQuoteGI = impfDaten.deImpfungQuoteGI }
    if ( impfDaten ) { covidDaten.deImpfungQuoteBoost1 = impfDaten.deImpfungQuoteBoost1 }
    if ( impfDaten ) { covidDaten.deImpfungQuoteBoost2 = impfDaten.deImpfungQuoteBoost2 }
    if ( impfDaten ) { covidDaten.deImpfungUpdate = impfDaten.deImpfungUpdate }
    if ( impfDaten ) { covidDaten.blImpfungAnzahl = impfDaten.blImpfungAnzahl }
    if ( impfDaten ) { covidDaten.blImpfungAnzahlMin1 = impfDaten.blImpfungAnzahlMin1 }
    if ( impfDaten ) { covidDaten.blImpfungAnzahlGI = impfDaten.blImpfungAnzahlGI }
    if ( impfDaten ) { covidDaten.blImpfungAnzahlBoost1 = impfDaten.blImpfungAnzahlBoost1 }
    if ( impfDaten ) { covidDaten.blImpfungAnzahlBoost2 = impfDaten.blImpfungAnzahlBoost2 }
    if ( impfDaten ) { covidDaten.blImpfungAnzahlBoost3 = impfDaten.blImpfungAnzahlBoost3 }
    if ( impfDaten ) { covidDaten.blImpfungAnzahlBoost4 = impfDaten.blImpfungAnzahlBoost4 }
    if ( impfDaten ) { covidDaten.blImpfungQuoteMin1 = impfDaten.blImpfungQuoteMin1 }
    if ( impfDaten ) { covidDaten.blImpfungQuoteGI = impfDaten.blImpfungQuoteGI }
    if ( impfDaten ) { covidDaten.blImpfungQuoteBoost1 = impfDaten.blImpfungQuoteBoost1 }
    if ( impfDaten ) { covidDaten.blImpfungQuoteBoost2 = impfDaten.blImpfungQuoteBoost2 }
    if ( impfDaten ) { covidDaten.blImpfungUpdate = impfDaten.blImpfungUpdate }

    if ( hospDaten ) { covidDaten.blHospitalisierungFaelle7T = hospDaten.blHospitalisierungFaelle7T }
    if ( hospDaten ) { covidDaten.blHospitalisierungInzidenz7T = hospDaten.blHospitalisierungInzidenz7T }
    if ( hospDaten ) { covidDaten.blHospitalisierungUpdate = hospDaten.blHospitalisierungUpdate }
    if ( hospDaten ) { covidDaten.deHospitalisierungFaelle7T = hospDaten.deHospitalisierungFaelle7T }
    if ( hospDaten ) { covidDaten.deHospitalisierungInzidenz7T = hospDaten.deHospitalisierungInzidenz7T }
    if ( hospDaten ) { covidDaten.deHospitalisierungUpdate = hospDaten.deHospitalisierungUpdate }

    if ( rWerDaten ) { covidDaten.rFaktor = rWerDaten.rFaktor }
 
    logDebug("covidDaten: " + JSON.stringify(covidDaten))

    listWidget                              = new ListWidget()
    listWidget.backgroundColor              = Color.clear()
    listWidget.layoutVertically
    listWidget.centerAlignContent

    let gradient                            = new LinearGradient()
    gradient.colors                         = getBackgroundGradientColor(covidDaten.deHospitalisierungInzidenz7T)
    gradient.locations                      = [0.0, 1.0]
    listWidget.backgroundGradient           = gradient

    if(covidDaten) {
   
        if (config.widgetFamily == 'large')  {
        
            await largeWidget(covidDaten)

        } else {

            zeileAusgeben({text: config.widgetFamily + "-Widget ist nicht verfügbar. Bitte ein large-Widget benutzen."}, text.error, false)

        }

    } else {
     
        zeileAusgeben({text: "Daten für Lagebericht konnte nicht ermittelt werden."}, text.error, false)

    }

    logDebug("END async function crateWidgetCache()")

    return listWidget

}

// create the widget
async function createWidget() {

    let fm = FileManager.local()
    const iCloudInUse = fm.isFileStoredIniCloud(module.filename)
    fm = iCloudInUse ? FileManager.iCloud() : fm

    let basicPath = fm.joinPath(fm.documentsDirectory(), basic.name.short)
    if (!fm.fileExists(basicPath) || !fm.isDirectory(basicPath)) { fm.createDirectory(basicPath) }
    let logPath = fm.joinPath(basicPath, "Logs")
    if (!fm.fileExists(logPath) || !fm.isDirectory(logPath)) { fm.createDirectory(logPath) }
    let logFile = fm.joinPath(logPath, basic.name.short + ".log")
    let cachePath = fm.joinPath(basicPath, "Cache")
    if (!fm.fileExists(cachePath) || !fm.isDirectory(cachePath)) { fm.createDirectory(cachePath) }
    let cacheFile = fm.joinPath(cachePath, basic.name.short + ".cache")
   
    logDebug("basicPath: " + basicPath)
    logDebug("logPath: " + logPath)
    logDebug("logFile: " + logFile)
    logDebug("cachePath: " + cachePath)
    logDebug("cacheFile: " + cacheFile)
    
    logDebug("START async function crateWidget()")
    
    let geodaten = ""
    let lakrDaten = ""
    let locationID = ""
   
    try {
	
		geodaten = await geodatenHolen(args.widgetParameter)
		logDebug("geodaten: " + JSON.stringify(geodaten))
            
		lakrDaten = await lakrDatenHolen(geodaten)
		logDebug("lakrDaten: " + JSON.stringify(lakrDaten))
		
		locationID = { AGS: lakrDaten.AGS }
		logDebug("locationID aktuell: " + JSON.stringify(locationID))

		fm.writeString(cacheFile, JSON.stringify(locationID, null, 2))

	} catch(e) {
  
		locationID = cacheHolen(fm, cacheFile)
        logDebug("locationID aus Cache: " + JSON.stringify(locationID))

	}

	if (locationID.AGS) {
  
		cachePath = fm.joinPath(cachePath, locationID.AGS)
		logDebug("cachePath locationID: " + cachePath)
        
	} else {
  
  		cachePath = fm.joinPath(cachePath, "0")
        logDebug("cachePath 0: " + cachePath)

	}

    if (!fm.fileExists(cachePath) || !fm.isDirectory(cachePath)) { fm.createDirectory(cachePath) }
    
    let cacheFileLaKr = fm.joinPath(cachePath, basic.name.short + ".LaKr.cache")
    let cacheFileKeyD = fm.joinPath(cachePath, basic.name.short + ".KeyD.cache")
    let cacheFileDIVI = fm.joinPath(cachePath, basic.name.short + ".DIVI.cache")
    let cacheFileImpf = fm.joinPath(cachePath, basic.name.short + ".Impf.cache")
    let cacheFileHosp = fm.joinPath(cachePath, basic.name.short + ".Hosp.cache")
    let cacheFileRWer = fm.joinPath(cachePath, basic.name.short + ".rWer.cache")
    
    logDebug("cacheFileLaKr: " + cacheFileLaKr)
    logDebug("cacheFileKeyD: " + cacheFileKeyD)
    logDebug("cacheFileDIVI: " + cacheFileDIVI)
    logDebug("cacheFileImpf: " + cacheFileImpf)
    logDebug("cacheFileHosp: " + cacheFileHosp)
    logDebug("cacheFileRWer: " + cacheFileRWer)

    if (!lakrDaten || lakrDaten == "") {

        lakrDaten = cacheHolen(fm, cacheFileLaKr, custom.cacheTime)
        logDebug("lakrDaten aus Cache: " + JSON.stringify(lakrDaten))

    }
  
    let keydDaten = cacheHolen(fm, cacheFileKeyD, custom.cacheTime)
    logDebug("keydDaten aus Cache: " + JSON.stringify(keydDaten))

    let diviDaten = cacheHolen(fm, cacheFileDIVI, custom.cacheTime)
    logDebug("diviDaten aus Cache: " + JSON.stringify(diviDaten))

    let impfDaten = cacheHolen(fm, cacheFileImpf, custom.cacheTime)
    logDebug("impfDaten aus Cache: " + JSON.stringify(impfDaten))

    let hospDaten = cacheHolen(fm, cacheFileHosp, custom.cacheTime)
    logDebug("hospDaten aus Cache: " + JSON.stringify(hospDaten))
  
    let rWerDaten = cacheHolen(fm, cacheFileRWer, custom.cacheTime)
    logDebug("rWerDaten aus Cache: " + JSON.stringify(rWerDaten))

    if (!geodaten || geodaten == "") {
            
        geodaten = await geodatenHolen(args.widgetParameter)
        logDebug("geodaten: " + JSON.stringify(geodaten))
        
    }
    
    if (!lakrDaten || lakrDaten == "") {
        
        lakrDaten = await lakrDatenHolen(geodaten)
        logDebug("lakrDaten: " + JSON.stringify(lakrDaten))
        
    }
    fm.writeString(cacheFileLaKr, JSON.stringify(lakrDaten, null, 2))
    
    if (!keydDaten || keydDaten.cacheExpired) {

        keydDaten = await keyDataHolen(lakrDaten.AGS, lakrDaten.BL_ID)
        logDebug("keydDaten: " + JSON.stringify(keydDaten))
        fm.writeString(cacheFileKeyD, JSON.stringify(keydDaten, null, 2))

    }
    
    if (!diviDaten || diviDaten.cacheExpired) {

        diviDaten = await intensivbettenHolen(lakrDaten.AGS, lakrDaten.BL_ID)
        logDebug("diviDaten: " + JSON.stringify(diviDaten))
        fm.writeString(cacheFileDIVI, JSON.stringify(diviDaten, null, 2))

    }
    
    if (!impfDaten || impfDaten.cacheExpired) {

        impfDaten = await impfDatenHolen(lakrDaten.BL)
        logDebug("impfDaten: " + JSON.stringify(impfDaten))
        fm.writeString(cacheFileImpf, JSON.stringify(impfDaten, null, 2))

    }
    
    if (!hospDaten || hospDaten.cacheExpired) {

        hospDaten = await hospitalisierungHolen(lakrDaten.BL)
        logDebug("hospDaten: " + JSON.stringify(hospDaten))
        fm.writeString(cacheFileHosp, JSON.stringify(hospDaten, null, 2))

    }
    
    if (!rWerDaten || rWerDaten.cacheExpired) {

        let rWerDaten = await rFaktorHolen()
        logDebug("rWerDaten: " +JSON.stringify(rWerDaten))
        fm.writeString(cacheFileRWer, JSON.stringify(rWerDaten, null, 2))

    }

    covidDaten = {

        AGS:                            lakrDaten.AGS
        ,GEN:                           lakrDaten.GEN
        ,BEZ:                           lakrDaten.BEZ
        ,BL:                            lakrDaten.BL
        ,BL_ID:                         lakrDaten.BL_ID
        ,lkLastUpdate:                  lakrDaten.last_update
        ,lkInzidenz:                    keydDaten.lkInzidenz
        ,blInzidenz:                    keydDaten.blInzidenz
        ,deInzidenz:                    keydDaten.deInzidenz
        ,lkAnzahlNeueFaelle:            keydDaten.lkAnzahlNeueFaelle
        ,blAnzahlNeueFaelle:            keydDaten.blAnzahlNeueFaelle
        ,deAnzahlNeueFaelle:            keydDaten.deAnzahlNeueFaelle
        ,lkNeueTodesfaelle:             keydDaten.lkNeueTodesfaelle
        ,blNeueTodesfaelle:             keydDaten.blNeueTodesfaelle
        ,deNeueTodesfaelle:             keydDaten.deNeueTodesfaelle
        ,lkAktive:                      keydDaten.lkAktive
        ,blAktive:                      keydDaten.blAktive
        ,deAktive:                      keydDaten.deAktive
        ,lkAnzahlFaelle:                keydDaten.lkAnzahlFaelle
        ,blAnzahlFaelle:                keydDaten.blAnzahlFaelle
        ,deAnzahlFaelle:                keydDaten.deAnzahlFaelle
        ,lkAnzahlFaelle7T:              keydDaten.lkAnzahlFaelle7T
        ,blAnzahlFaelle7T:              keydDaten.blAnzahlFaelle7T
        ,deAnzahlFaelle7T:              keydDaten.deAnzahlFaelle7T
        ,lkTodesfaelle:                 keydDaten.lkTodesfaelle       
        ,blTodesfaelle:                 keydDaten.blTodesfaelle
        ,deTodesfaelle:                 keydDaten.deTodesfaelle
        ,lkGenesene:                    keydDaten.lkGenesene
        ,blGenesene:                    keydDaten.blGenesene
        ,deGenesene:                    keydDaten.deGenesene
        ,lkNeueGenesene:                keydDaten.lkNeueGenesene
        ,blNeueGenesene:                keydDaten.blNeueGenesene
        ,deNeueGenesene:                keydDaten.deNeueGenesene
        ,lkNeueAktive:                  keydDaten.lkNeueAktive
        ,blNeueAktive:                  keydDaten.blNeueAktive
        ,deNeueAktive:                  keydDaten.deNeueAktive
        ,lkIntensivBelegungProzent:     diviDaten.lkIntensivBelegungProzent
        ,lkIntensivbelegungAnzahl:      diviDaten.lkIntensivbelegungAnzahl
        ,lkFreieIntensivbetten:         diviDaten.lkFreieIntensivbetten
        ,lkIntensivbettenUpdate:        diviDaten.lkIntensivbettenUpdate
        ,blIntensivBelegungProzent:     diviDaten.blIntensivBelegungProzent
        ,blIntensivbelegungAnzahl:      diviDaten.blIntensivbelegungAnzahl
        ,blFreieIntensivbetten:         diviDaten.blFreieIntensivbetten
        ,blIntensivbettenUpdate:        diviDaten.blIntensivbettenUpdate
        ,deIntensivBelegungProzent:     diviDaten.deIntensivBelegungProzent
        ,deIntensivbelegungAnzahl:      diviDaten.deIntensivbelegungAnzahl
        ,deFreieIntensivbetten:         diviDaten.deFreieIntensivbetten
        ,deIntensivbettenUpdate:        diviDaten.deIntensivbettenUpdate
        ,blHospitalisierungFaelle7T:    hospDaten.blHospitalisierungFaelle7T
        ,blHospitalisierungInzidenz7T:  hospDaten.blHospitalisierungInzidenz7T
        ,blHospitalisierungUpdate:      hospDaten.blHospitalisierungUpdate
        ,deHospitalisierungFaelle7T:    hospDaten.deHospitalisierungFaelle7T
        ,deHospitalisierungInzidenz7T:  hospDaten.deHospitalisierungInzidenz7T
        ,deHospitalisierungUpdate:      hospDaten.deHospitalisierungUpdate
        ,deImpfungAnzahl:               impfDaten.deImpfungAnzahl
        ,deImpfungAnzahlMin1:           impfDaten.deImpfungAnzahlMin1
        ,deImpfungAnzahlGI:             impfDaten.deImpfungAnzahlGI
        ,deImpfungAnzahlBoost1:         impfDaten.deImpfungAnzahlBoost1
        ,deImpfungAnzahlBoost2:         impfDaten.deImpfungAnzahlBoost2
        ,deImpfungAnzahlBoost3:         impfDaten.deImpfungAnzahlBoost3
        ,deImpfungAnzahlBoost4:         impfDaten.deImpfungAnzahlBoost4
        ,deImpfungQuoteMin1:            impfDaten.deImpfungQuoteMin1
        ,deImpfungQuoteGI:              impfDaten.deImpfungQuoteGI
        ,deImpfungQuoteBoost1:          impfDaten.deImpfungQuoteBoost1
        ,deImpfungQuoteBoost2:          impfDaten.deImpfungQuoteBoost2
        ,deImpfungUpdate:               impfDaten.deImpfungUpdate
        ,blImpfungAnzahl:               impfDaten.blImpfungAnzahl
        ,blImpfungAnzahlMin1:           impfDaten.blImpfungAnzahlMin1
        ,blImpfungAnzahlGI:             impfDaten.blImpfungAnzahlGI
        ,blImpfungAnzahlBoost1:         impfDaten.blImpfungAnzahlBoost1
        ,blImpfungAnzahlBoost2:         impfDaten.blImpfungAnzahlBoost2
        ,blImpfungAnzahlBoost3:         impfDaten.blImpfungAnzahlBoost3
        ,blImpfungAnzahlBoost4:         impfDaten.blImpfungAnzahlBoost4
        ,blImpfungQuoteMin1:            impfDaten.blImpfungQuoteMin1
        ,blImpfungQuoteGI:              impfDaten. blImpfungQuoteGI
        ,blImpfungQuoteBoost1:          impfDaten.blImpfungQuoteBoost1
        ,blImpfungQuoteBoost2:          impfDaten.blImpfungQuoteBoost2
        ,blImpfungUpdate:               impfDaten.blImpfungUpdate
        ,rFaktor:                       rWerDaten.rFaktor

    }

    logDebug("covidDaten: " + JSON.stringify(covidDaten))

    listWidget                              = new ListWidget()
    listWidget.backgroundColor              = Color.clear()
    listWidget.layoutVertically
    listWidget.centerAlignContent

    let gradient                            = new LinearGradient()
    gradient.colors                         = getBackgroundGradientColor(covidDaten.deHospitalisierungInzidenz7T)
    gradient.locations                      = [0.0, 1.0]
    listWidget.backgroundGradient           = gradient

    if(covidDaten) {
   
        if (config.widgetFamily == 'large')  {
        
            await largeWidget(covidDaten)

        } else {

            zeileAusgeben({text: config.widgetFamily + "-Widget ist nicht verfügbar. Bitte ein large-Widget benutzen."}, text.error, false)

        }

    } else {
     
        zeileAusgeben({text: "Daten für Lagebericht konnte nicht ermittelt werden."}, text.error, false)

    }

    logDebug("END async function crateWidget()")

    return listWidget

}

// large widget
async function largeWidget(covidDaten) {

    logDebug("START async function largeWidget()")

    zeileAusgeben({ text: basic.name.full}, text.header, false)
    
    listWidget.addSpacer(6)

    if (custom.bund.show) {

        logDebug("START generate Bund")

        zeileAusgeben({ text: custom.bund.head }, text.sectionHeader, false)

        if (custom.bund.neuinfektioenenInzidenz.show) { zeileAusgeben(custom.bund.neuinfektioenenInzidenz, text.sectionData, covidDaten.deInzidenz) }
        if (custom.bund.neuinfektioenenAnzahl.show) { zeileAusgeben(custom.bund.neuinfektioenenAnzahl, text.sectionData, covidDaten.deAnzahlNeueFaelle) }
        if (custom.bund.neueTodesfaelle.show) { zeileAusgeben(custom.bund.neueTodesfaelle, text.sectionData, covidDaten.deNeueTodesfaelle) }
        if (custom.bund.aktive.show) { zeileAusgeben(custom.bund.aktive, text.sectionData, covidDaten.deAktive) }
        if (custom.bund.faelle.show) { zeileAusgeben(custom.bund.faelle, text.sectionData, covidDaten.deAnzahlFaelle) }
        if (custom.bund.faelle7T.show) { zeileAusgeben(custom.bund.faelle7T, text.sectionData, covidDaten.deAnzahlFaelle7T) }
        if (custom.bund.todesfaelle.show) { zeileAusgeben(custom.bund.todesfaelle, text.sectionData, covidDaten.deTodesfaelle) }
        if (custom.bund.genesene.show) { zeileAusgeben(custom.bund.genesene, text.sectionData, covidDaten.deGenesene) }
        if (custom.bund.neueGenesene.show) { zeileAusgeben(custom.bund.neueGenesene, text.sectionData, covidDaten.deNeueGenesene) }
        if (custom.bund.neueAktive.show) { zeileAusgeben(custom.bund.neueAktive, text.sectionData, covidDaten.deNeueAktive) }
        if (custom.bund.intensivbettenBelegtProzent.show && diviNutzungsfreigabe) { zeileAusgeben(custom.bund.intensivbettenBelegtProzent, text.sectionData, covidDaten.deIntensivBelegungProzent) }
        if (custom.bund.intensivbettenBelegtAnzahl.show && diviNutzungsfreigabe) { zeileAusgeben(custom.bund.intensivbettenBelegtAnzahl, text.sectionData, covidDaten.deIntensivbelegungAnzahl) }
        if (custom.bund.intensivbettenFrei.show && diviNutzungsfreigabe) { zeileAusgeben(custom.bund.intensivbettenFrei, text.sectionData, covidDaten.deFreieIntensivbetten) }
        if (custom.bund.hospitalisierungInzidenz.show) { zeileAusgeben(custom.bund.hospitalisierungInzidenz, text.sectionData, covidDaten.deHospitalisierungInzidenz7T) }
        if (custom.bund.hospitalisierung7Tage.show) { zeileAusgeben(custom.bund.hospitalisierung7Tage, text.sectionData, covidDaten.deHospitalisierungFaelle7T) }
        if (custom.bund.impfQuote.show) { zeileAusgeben(custom.bund.impfQuote, text.sectionData, covidDaten.deImpfungQuoteMin1 + "%/" + covidDaten.deImpfungQuoteGI  + "%/" + covidDaten.deImpfungQuoteBoost1 + "%/" + covidDaten.deImpfungQuoteBoost2 + "%") }
        if (custom.bund.impfungenGesamt.show) { zeileAusgeben(custom.bund.impfungenGesamt, text.sectionData, covidDaten.deImpfungAnzahl) }
        if (custom.bund.impfungenGesamtMin1.show) { zeileAusgeben(custom.bund.impfungenGesamtMin1, text.sectionData, covidDaten.deImpfungAnzahlMin1) }
        if (custom.bund.impfungenGesamtGI.show) { zeileAusgeben(custom.bund.impfungenGesamtGI, text.sectionData, covidDaten.deImpfungAnzahlGI) }
        if (custom.bund.impfungenGesamtBoost1.show) { zeileAusgeben(custom.bund.impfungenGesamtBoost1, text.sectionData, covidDaten.deImpfungAnzahlBoost1) }
        if (custom.bund.impfungenGesamtBoost2.show) { zeileAusgeben(custom.bund.impfungenGesamtBoost2, text.sectionData, covidDaten.deImpfungAnzahlBoost2) }
        if (custom.bund.impfungenGesamtBoost3.show) { zeileAusgeben(custom.bund.impfungenGesamtBoost3, text.sectionData, covidDaten.deImpfungAnzahlBoost3) }
        if (custom.bund.impfungenGesamtBoost4.show) { zeileAusgeben(custom.bund.impfungenGesamtBoost4, text.sectionData, covidDaten.deImpfungAnzahlBoost4) }
        if (custom.bund.rWert.show) { zeileAusgeben(custom.bund.rWert, text.sectionData, covidDaten.rFaktor) }
        
        logDebug("END generate Bund")

    }

    listWidget.addSpacer(6)

    if (custom.land.show) {

        logDebug("START generate Bundesland")

        if (covidDaten.BL) {

            zeileAusgeben({ text: covidDaten.BL }, text.sectionHeader, false)

        } else {

            zeileAusgeben({ text: "Bundesland" }, text.sectionHeader, false)

        }
        
        if (custom.land.neuinfektioenenInzidenz.show) { zeileAusgeben(custom.land.neuinfektioenenInzidenz, text.sectionData, covidDaten.blInzidenz) }
        if (custom.land.neuinfektioenenAnzahl.show) { zeileAusgeben(custom.land.neuinfektioenenAnzahl, text.sectionData, covidDaten.blAnzahlNeueFaelle) }
        if (custom.land.neueTodesfaelle.show) { zeileAusgeben(custom.land.neueTodesfaelle, text.sectionData, covidDaten.blNeueTodesfaelle) }
        if (custom.land.aktive.show) { zeileAusgeben(custom.land.aktive, text.sectionData, covidDaten.blAktive) }
        if (custom.land.faelle.show) { zeileAusgeben(custom.land.faelle, text.sectionData, covidDaten.blAnzahlFaelle) }
        if (custom.land.faelle7T.show) { zeileAusgeben(custom.land.faelle7T, text.sectionData, covidDaten.blAnzahlFaelle7T) }
        if (custom.land.todesfaelle.show) { zeileAusgeben(custom.land.todesfaelle, text.sectionData, covidDaten.blTodesfaelle) }
        if (custom.land.genesene.show) { zeileAusgeben(custom.land.genesene, text.sectionData, covidDaten.blGenesene) }
        if (custom.land.neueGenesene.show) { zeileAusgeben(custom.land.neueGenesene, text.sectionData, covidDaten.blNeueGenesene) }
        if (custom.land.neueAktive.show) { zeileAusgeben(custom.land.neueAktive, text.sectionData, covidDaten.blNeueAktive) }
        if (custom.land.intensivbettenBelegtProzent.show && diviNutzungsfreigabe) { zeileAusgeben(custom.land.intensivbettenBelegtProzent, text.sectionData, covidDaten.blIntensivBelegungProzent) }
        if (custom.land.intensivbettenBelegtAnzahl.show && diviNutzungsfreigabe) { zeileAusgeben(custom.land.intensivbettenBelegtAnzahl, text.sectionData, covidDaten.blIntensivbelegungAnzahl) }
        if (custom.land.intensivbettenFrei.show && diviNutzungsfreigabe) { zeileAusgeben(custom.land.intensivbettenFrei, text.sectionData, covidDaten.blFreieIntensivbetten) }
        if (custom.land.hospitalisierungInzidenz.show) { zeileAusgeben(custom.land.hospitalisierungInzidenz, text.sectionData, covidDaten.blHospitalisierungInzidenz7T) }
        if (custom.land.hospitalisierung7Tage.show) { zeileAusgeben(custom.land.hospitalisierung7Tage, text.sectionData, covidDaten.blHospitalisierungFaelle7T) }
        if (custom.land.impfQuote.show) { zeileAusgeben(custom.land.impfQuote, text.sectionData, covidDaten.blImpfungQuoteMin1 + "%/" + covidDaten.blImpfungQuoteGI  + "%/" + covidDaten.blImpfungQuoteBoost1 + "%/" + covidDaten.blImpfungQuoteBoost2 + "%") }
        if (custom.land.impfungenGesamt.show) { zeileAusgeben(custom.land.impfungenGesamt, text.sectionData, covidDaten.blImpfungAnzahl) }
        if (custom.land.impfungenGesamtMin1.show) { zeileAusgeben(custom.land.impfungenGesamtMin1, text.sectionData, covidDaten.blImpfungAnzahlMin1) }
        if (custom.land.impfungenGesamtGI.show) { zeileAusgeben(custom.land.impfungenGesamtGI, text.sectionData, covidDaten.blImpfungAnzahlGI) }
        if (custom.land.impfungenGesamtBoost1.show) { zeileAusgeben(custom.land.impfungenGesamtBoost1, text.sectionData, covidDaten.blImpfungAnzahlBoost1) }
        if (custom.land.impfungenGesamtBoost2.show) { zeileAusgeben(custom.land.impfungenGesamtBoost2, text.sectionData, covidDaten.blImpfungAnzahlBoost2) }
        if (custom.land.impfungenGesamtBoost3.show) { zeileAusgeben(custom.land.impfungenGesamtBoost3, text.sectionData, covidDaten.blImpfungAnzahlBoost3) }
        if (custom.land.impfungenGesamtBoost4.show) { zeileAusgeben(custom.land.impfungenGesamtBoost4, text.sectionData, covidDaten.blImpfungAnzahlBoost4) }

        logDebug("END generate Bundesland")

    }

    listWidget.addSpacer(6)

    if (custom.kreis.show) {

        logDebug("START generate Kreis")

        if (covidDaten.BEZ && covidDaten.GEN) {

            zeileAusgeben({ text: covidDaten.BEZ + " " + covidDaten.GEN }, text.sectionHeader, false)

        } else if (covidDaten.BEZ) {

            zeileAusgeben({ text: covidDaten.BEZ }, text.sectionHeader, false)

        } else if (covidDaten.GEN) {

            zeileAusgeben({ text: covidDaten.GEN }, text.sectionHeader, false)

        } else {

            zeileAusgeben({ text: "Landkreis / Stadtkreis / Stadt" }, text.sectionHeader, false)

        }

        if (custom.kreis.neuinfektioenenInzidenz.show) { zeileAusgeben(custom.kreis.neuinfektioenenInzidenz, text.sectionData, covidDaten.lkInzidenz) }
        if (custom.kreis.neuinfektioenenAnzahl.show) { zeileAusgeben(custom.kreis.neuinfektioenenAnzahl, text.sectionData, covidDaten.lkAnzahlNeueFaelle) }
        if (custom.kreis.neueTodesfaelle.show) { zeileAusgeben(custom.kreis.neueTodesfaelle, text.sectionData, covidDaten.lkNeueTodesfaelle) }
        if (custom.kreis.aktive.show) { zeileAusgeben(custom.kreis.aktive, text.sectionData, covidDaten.lkAktive) }
        if (custom.kreis.faelle.show) { zeileAusgeben(custom.kreis.faelle, text.sectionData, covidDaten.lkCases) }
        if (custom.kreis.faelle7T.show) { zeileAusgeben(custom.kreis.faelle7T, text.sectionData, covidDaten.faelle7T) }
        if (custom.kreis.todesfaelle.show) { zeileAusgeben(custom.kreis.todesfaelle, text.sectionData, covidDaten.lkDeath) }
        if (custom.kreis.genesene.show) { zeileAusgeben(custom.kreis.genesene, text.sectionData, covidDaten.lkGenesene) }
        if (custom.kreis.neueGenesene.show) { zeileAusgeben(custom.kreis.neueGenesene, text.sectionData, covidDaten.lkNeueGenesene) }
        if (custom.kreis.intensivbettenBelegtProzent.show && diviNutzungsfreigabe) { zeileAusgeben(custom.kreis.intensivbettenBelegtProzent, text.sectionData, covidDaten.lkIntensivBelegungProzent) }
        if (custom.kreis.intensivbettenBelegtAnzahl.show && diviNutzungsfreigabe) { zeileAusgeben(custom.kreis.intensivbettenBelegtAnzahl, text.sectionData, covidDaten.lkIntensivbelegungAnzahl) }
        if (custom.kreis.intensivbettenFrei.show && diviNutzungsfreigabe) { zeileAusgeben(custom.kreis.intensivbettenFrei, text.sectionData, covidDaten.lkFreieIntensivbetten) }
        
        logDebug("END generate Kreis")

    }

    listWidget.addSpacer(3)

	now										 = new Date()
	
    let footerLine                          = basic.name.short + " " + basic.version
    footerLine                              = footerLine +  " WU:" + now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    //footerLine                              = footerLine +  " RKI:" + covidDaten.lkLastUpdate.substr(0, 6)
    logDebug("covidDaten.lkLastUpdate: " + covidDaten.lkLastUpdate)
    footerLine                              = footerLine +  " RKI-H:" + covidDaten.deHospitalisierungUpdate.substr(8, 2) + "." + covidDaten.deHospitalisierungUpdate.substr(5, 2) + "."
    logDebug("covidDaten.deHospitalisierungUpdate: " + covidDaten.deHospitalisierungUpdate)
    footerLine                              = footerLine +  " RKI-I:" + covidDaten.deImpfungUpdate.substr(8, 2) + "." + covidDaten.deImpfungUpdate.substr(5, 2) + "."
    logDebug("covidDaten.deHospitalisierungUpdate: " + covidDaten.deHospitalisierungUpdate)
    
    if (diviNutzungsfreigabe) {
    
    	footerLine                              = footerLine +  " DIVI:" + covidDaten.lkIntensivbettenUpdate.substr(0, 6)
    	logDebug("covidDaten.lkIntensivbettenUpdate: " + covidDaten.lkIntensivbettenUpdate.substr(0, 10))
    
	}

	zeileAusgeben({text: footerLine}, text.footer, false)
	logDebug("END async function largeWidget()")

}

// Key Data holen
async function keyDataHolen(lkID, blID) {

    logDebug("START async function keyDataHolen(lkID, blID)")
    
    try {
        
        logDebug("lkID: " + lkID)
        logDebug("blID: " + blID)
        
        let lakrKeyData = ""

        if (custom.kreis.show && custom.kreis.neuinfektioenenInzidenz.show) {

            let lakrKeyRawData = await new Request(rkiApiLkKeyData(lkID)).loadJSON()
            logDebug("lakrKeyRawData: " + JSON.stringify(lakrKeyRawData))
            lakrKeyData = lakrKeyRawData.features[0].attributes
            logDebug("lakrKeyData: " + JSON.stringify(lakrKeyData))

        }

        let bulaKeyData = ""

        if (custom.land.show && custom.land.neuinfektioenenInzidenz.show) {

            let bulaKeyRawData = await new Request(rkiApiBlKeyData(blID)).loadJSON()
            logDebug("bulaKeyRawData: " + JSON.stringify(bulaKeyRawData))
            bulaKeyData = bulaKeyRawData.features[0].attributes
            logDebug("bulaKeyData: " + JSON.stringify(bulaKeyData))

        }

        let delaKeyData = ""

        if (custom.bund.show && custom.bund.neuinfektioenenInzidenz.show) {

            let delaKeyRawData = await new Request(rkiApiDeKeyData).loadJSON()
            logDebug("delaKeyRawData: " + JSON.stringify(delaKeyRawData))
            delaKeyData = delaKeyRawData.features[0].attributes
            logDebug("delaKeyData: " + JSON.stringify(delaKeyData))

        }
        
        logDebug("END async function KeyDataHolen()")

        return {
            
            lkInzidenz:             lakrKeyData.Inz7T.toLocaleString()
            ,lkAnzahlNeueFaelle:    lakrKeyData.AnzFallNeu.toLocaleString()
            ,lkNeueTodesfaelle:     lakrKeyData.AnzTodesfallNeu.toLocaleString()
            ,lkAktive:              lakrKeyData.AnzAktiv.toLocaleString()
            ,lkAnzahlFaelle:        lakrKeyData.AnzFall.toLocaleString()
            ,lkAnzahlFaelle7T:      lakrKeyData.AnzFall7T.toLocaleString()
            ,lkTodesfaelle:         lakrKeyData.AnzTodesfall.toLocaleString()
            ,lkGenesene:            lakrKeyData.AnzGenesen.toLocaleString()
            ,lkNeueGenesene:        lakrKeyData.AnzGenesenNeu.toLocaleString()
            ,lkNeueAktive:          lakrKeyData.AnzAktivNeu.toLocaleString()
            ,blInzidenz:            bulaKeyData.Inz7T.toLocaleString()
            ,blAnzahlNeueFaelle:    bulaKeyData.AnzFallNeu.toLocaleString()
            ,blNeueTodesfaelle:     bulaKeyData.AnzTodesfallNeu.toLocaleString()
            ,blAktive:              bulaKeyData.AnzAktiv.toLocaleString()
            ,blAnzahlFaelle:        bulaKeyData.AnzFall.toLocaleString()
            ,blAnzahlFaelle7T:      bulaKeyData.AnzFall7T.toLocaleString()
            ,blTodesfaelle:         bulaKeyData.AnzTodesfall.toLocaleString()
            ,blGenesene:            bulaKeyData.AnzGenesen.toLocaleString()
            ,blNeueGenesene:        bulaKeyData.AnzGenesenNeu.toLocaleString()
            ,blNeueAktive:          bulaKeyData.AnzAktivNeu.toLocaleString()
            ,deInzidenz:            delaKeyData.Inz7T.toLocaleString()
            ,deAnzahlNeueFaelle:    delaKeyData.AnzFallNeu.toLocaleString()
            ,deNeueTodesfaelle:     delaKeyData.AnzTodesfallNeu.toLocaleString()
            ,deAktive:              delaKeyData.AnzAktiv.toLocaleString()
            ,deAnzahlFaelle:        delaKeyData.AnzFall.toLocaleString()
            ,deAnzahlFaelle7T:      delaKeyData.AnzFall7T.toLocaleString()
            ,deTodesfaelle:         delaKeyData.AnzTodesfall.toLocaleString()
            ,deGenesene:            delaKeyData.AnzGenesen.toLocaleString()
            ,deNeueGenesene:        delaKeyData.AnzGenesenNeu.toLocaleString()
            ,deNeueAktive:          delaKeyData.AnzAktivNeu.toLocaleString()

        }
                    
    } catch(e) {

       logDebug("END async function KeyDataHolen() return initial value")

       return {
            
            lkInzidenz:             "-1"
            ,lkAnzahlNeueFaelle:    "-1"
            ,lkNeueTodesfaelle:     "-1"
            ,lkAktive:              "-1"
            ,lkAnzahlFaelle:        "-1"
            ,lkAnzahlFaelle7T:      "-1"
            ,lkTodesfaelle:         "-1"
            ,lkGenesene:            "-1"
            ,lkNeueGenesene:        "-1"
            ,lkNeueAktive:          "-1"
            ,blInzidenz:            "-1"
            ,blAnzahlNeueFaelle:    "-1"
            ,blNeueTodesfaelle:     "-1"
            ,blAktive:              "-1"
            ,blAnzahlFaelle:        "-1"
            ,blAnzahlFaelle7T:      "-1"
            ,blTodesfaelle:         "-1"
            ,blGenesene:            "-1"
            ,blNeueGenesene:        "-1"
            ,blNeueAktive:          "-1"
            ,deInzidenz:            "-1"
            ,deAnzahlNeueFaelle:    "-1"
            ,deNeueTodesfaelle:     "-1"
            ,deAktive:              "-1"
            ,deAnzahlFaelle:        "-1"
            ,deAnzahlFaelle7T:      "-1"
            ,deTodesfaelle:         "-1"
            ,deGenesene:            "-1"
            ,deNeueGenesene:        "-1"
            ,deNeueAktive:          "-1"

        }

    }
    

}

// Landkreis Daten vom RKI holen
async function lakrDatenHolen(geodaten) {

    logDebug("START async function lakrDatenHolen(geodaten)")
    logDebug("geodaten: " + JSON.stringify(geodaten))

    try {
        
        let lkRawData                       = await new Request(rkiApiLk(geodaten)).loadJSON()
        logDebug("lkRawData: " + JSON.stringify(lkRawData))
        let lkData                          = lkRawData.features[0].attributes
        logDebug("lkData: " + JSON.stringify(lkData))

        logDebug("END async function lakrDatenHolen(geodaten)")

        return { 

            AGS:                            lkData.AGS
            ,GEN:                           lkData.GEN
            ,BEZ:                           lkData.BEZ
            ,BL:                            lkData.BL
            ,BL_ID:                         lkData.BL_ID
            ,last_update:                   lkData.last_update.toLocaleString()
            
        }
                    
    } catch(e) {

        logDebug("END async function lakrDatenHolen(geodaten) return initial Values")

        return { 

            AGS:                            "00000"
            ,GEN:                           "n/a"
            ,BEZ:                           ""
            ,BL:                            "n/a"
            ,BL_ID:                         "0"
            ,last_update:                   "Fehler"
            
        }

    }

}

// Hospitalisierungswerte holen
async function hospitalisierungHolen (bundesland) {

    logDebug("START async function hospitalisierungHolen(bundesland)")
    logDebug("bundesland: " + bundesland)
    
    let deHospitalisierungFaelle7T      = 0
    let deHospitalisierungInzidenz7T    = 0
    let deHospitalisierungUpdate        = "Fehler"
    let blHospitalisierungFaelle7T      = 0
    let blHospitalisierungInzidenz7T    = 0
    let blHospitalisierungUpdate        = "Fehler"

    try {

        if ((custom.bund.show && (custom.bund.hospitalisierung7Tage.show || custom.bund.hospitalisierungInzidenz.show)) || (custom.land.show && (custom.land.hospitalisierung7Tage.show || custom.land.hospitalisierungInzidenz.show))) {

            let hospitalisierungRawData         = (await new Request(rkiCsvHospitalisierung).loadString()).slice(0,4800)
            logDebug("hospitalisierungRawData: " + hospitalisierungRawData)

            let hospitalisierungLines          = hospitalisierungRawData.split(/(?:\r\n|\n)+/).filter(function (el) { return el.length != 0 })

            hospitalisierungRawData = ""

            for (hospitalisierungLine of hospitalisierungLines) {

                let hospitalisierungLineFields  = hospitalisierungLine.split(",")

                if (hospitalisierungLineFields[1] == "Bundesgebiet" && hospitalisierungLineFields[3] == "00+" && deHospitalisierungUpdate == "Fehler") {

                    deHospitalisierungFaelle7T      = parseFloat(hospitalisierungLineFields[4])
                    deHospitalisierungInzidenz7T    = parseFloat(hospitalisierungLineFields[5])
                    deHospitalisierungUpdate        = hospitalisierungLineFields[0]

                }

                if (hospitalisierungLineFields[1] == bundesland && hospitalisierungLineFields[3] == "00+" && blHospitalisierungUpdate == "Fehler") {

                    blHospitalisierungFaelle7T      = parseFloat(hospitalisierungLineFields[4])
                    blHospitalisierungInzidenz7T    = parseFloat(hospitalisierungLineFields[5])
                    blHospitalisierungUpdate        = hospitalisierungLineFields[0]

                }

            }

            hospitalisierungLines = ""

        }

        logDebug("END async function hospitalisierungHolen(bundesland)")

        return {

            deHospitalisierungFaelle7T:         deHospitalisierungFaelle7T.toLocaleString()
            ,deHospitalisierungInzidenz7T:      deHospitalisierungInzidenz7T.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })
            ,deHospitalisierungUpdate:          deHospitalisierungUpdate
            ,blHospitalisierungFaelle7T:        blHospitalisierungFaelle7T.toLocaleString()
            ,blHospitalisierungInzidenz7T:      blHospitalisierungInzidenz7T.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })
            ,blHospitalisierungUpdate:          blHospitalisierungUpdate

        }

    } catch(e) {

        logDebug("END async function hospitalisierungHolen(bundesland) return initial values")

        return {

            deHospitalisierungFaelle7T:         deHospitalisierungFaelle7T.toLocaleString()
            ,deHospitalisierungInzidenz7T:      deHospitalisierungInzidenz7T.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })
            ,deHospitalisierungUpdate:          deHospitalisierungUpdate
            ,blHospitalisierungFaelle7T:        blHospitalisierungFaelle7T.toLocaleString()
            ,blHospitalisierungInzidenz7T:      blHospitalisierungInzidenz7T.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })
            ,blHospitalisierungUpdate:          blHospitalisierungUpdate

        }

    }

}

// Impfdaten holen
async function impfDatenHolen(bundesland) {

    logDebug("START async function impfDatenHolen(bundesland)")
    logDebug("bundesland: " + bundesland)
    
    let deImpfungAnzahl                 = 0
    let deImpfungAnzahlMin1             = 0
    let deImpfungAnzahlGI               = 0
    let deImpfungAnzahlBoost1           = 0
    let deImpfungAnzahlBoost2           = 0
    let deImpfungAnzahlBoost3           = 0
    let deImpfungAnzahlBoost4           = 0
    let deImpfungQuoteMin1              = 0.00
    let deImpfungQuoteGI                = 0.00
    let deImpfungQuoteBoost1            = 0.00
    let deImpfungQuoteBoost2            = 0.00
    let deImpfungUpdate                 = "Fehler"
    let blImpfungAnzahl                 = 0
    let blImpfungAnzahlMin1             = 0
    let blImpfungAnzahlGI               = 0
    let blImpfungAnzahlBoost1           = 0
    let blImpfungAnzahlBoost2           = 0
    let blImpfungAnzahlBoost3           = 0
    let blImpfungAnzahlBoost4           = 0
    let blImpfungQuoteMin1              = 0.00
    let blImpfungQuoteGI                = 0.00
    let blImpfungQuoteBoost1            = 0.00
    let blImpfungQuoteBoost2            = 0.00
    let blImpfungUpdate                 = "Fehler"

    try {

        if ((custom.bund.show && (custom.bund.impfQuote.show || custom.bund.impfungenGesamt.show || custom.bund.impfungenGesamtBoost1.show || custom.bund.impfungenGesamtBoost2.show || custom.bund.impfungenGesamtGI.show || custom.bund.impfungenGesamtMin1.show)) || (custom.land.show && (custom.land.impfQuote.show || custom.land.impfungenGesamt.show || custom.land.impfungenGesamtBoost1.show || custom.land.impfungenGesamtBoost2.show || custom.land.impfungenGesamtGI.show || custom.land.impfungenGesamtMin1.show))) {

            let impfRawData                     = (await new Request(rkiCsvImpfungen).loadString()).slice(0,6000)
            logDebug("impfRawData: " + impfRawData)

            let impfLines                       = impfRawData.split(/(?:\r\n|\n)+/).filter(function (el) { return el.length != 0 })

            impfRawData = ""

            for (impfLine of impfLines) {

                let impfLineFields  = impfLine.split(",")

                if (impfLineFields[2] == "00" && deImpfungUpdate == "Fehler") {

                    deImpfungAnzahl             = parseFloat(impfLineFields[3])
                    deImpfungAnzahlMin1         = parseFloat(impfLineFields[4])
                    deImpfungAnzahlGI           = parseFloat(impfLineFields[6])
                    deImpfungAnzahlBoost1       = parseFloat(impfLineFields[8])
                    deImpfungAnzahlBoost2       = parseFloat(impfLineFields[9])
                    deImpfungAnzahlBoost3       = parseFloat(impfLineFields[10])
                    deImpfungAnzahlBoost4       = parseFloat(impfLineFields[11])
                    deImpfungQuoteMin1          = parseFloat(impfLineFields[12])
                    deImpfungQuoteGI            = parseFloat(impfLineFields[19])
                    deImpfungQuoteBoost1        = parseFloat(impfLineFields[26])
                    deImpfungQuoteBoost2        = parseFloat(impfLineFields[31])
                    deImpfungUpdate             = impfLineFields[0]

                }

                if (impfLineFields[1] == bundesland && blImpfungUpdate == "Fehler") {

                    blImpfungAnzahl             = parseFloat(impfLineFields[3])
                    blImpfungAnzahlMin1         = parseFloat(impfLineFields[4])
                    blImpfungAnzahlGI           = parseFloat(impfLineFields[6])
                    blImpfungAnzahlBoost1       = parseFloat(impfLineFields[8])
                    blImpfungAnzahlBoost2       = parseFloat(impfLineFields[9])
                    blImpfungAnzahlBoost3       = parseFloat(impfLineFields[10])
                    blImpfungAnzahlBoost4       = parseFloat(impfLineFields[11])
                    blImpfungQuoteMin1          = parseFloat(impfLineFields[12])
                    blImpfungQuoteGI            = parseFloat(impfLineFields[19])
                    blImpfungQuoteBoost1        = parseFloat(impfLineFields[26])
                    blImpfungQuoteBoost2        = parseFloat(impfLineFields[31])
                    blImpfungUpdate             = impfLineFields[0]

                }

            }

            impfLines = ""

        }

        logDebug("END async function impfDatenHolen(bundesland)")

        return {

            deImpfungAnzahl:                deImpfungAnzahl.toLocaleString()
            ,deImpfungAnzahlMin1:           deImpfungAnzahlMin1.toLocaleString()
            ,deImpfungAnzahlGI:             deImpfungAnzahlGI.toLocaleString()
            ,deImpfungAnzahlBoost1:         deImpfungAnzahlBoost1.toLocaleString()
            ,deImpfungAnzahlBoost2:         deImpfungAnzahlBoost2.toLocaleString()
            ,deImpfungAnzahlBoost3:         deImpfungAnzahlBoost3.toLocaleString()
            ,deImpfungAnzahlBoost4:         deImpfungAnzahlBoost4.toLocaleString()
            ,deImpfungQuoteMin1:            deImpfungQuoteMin1.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })
            ,deImpfungQuoteGI:              deImpfungQuoteGI.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })
            ,deImpfungQuoteBoost1:          deImpfungQuoteBoost1.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })
            ,deImpfungQuoteBoost2:          deImpfungQuoteBoost2.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })
            ,deImpfungUpdate:               deImpfungUpdate
            ,blImpfungAnzahl:               blImpfungAnzahl.toLocaleString()
            ,blImpfungAnzahlMin1:           blImpfungAnzahlMin1.toLocaleString()
            ,blImpfungAnzahlGI:             blImpfungAnzahlGI.toLocaleString()
            ,blImpfungAnzahlBoost1:         blImpfungAnzahlBoost1.toLocaleString()
            ,blImpfungAnzahlBoost2:         blImpfungAnzahlBoost2.toLocaleString()
            ,blImpfungAnzahlBoost3:         blImpfungAnzahlBoost3.toLocaleString()
            ,blImpfungAnzahlBoost4:         blImpfungAnzahlBoost4.toLocaleString()
            ,blImpfungQuoteMin1:            blImpfungQuoteMin1.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })
            ,blImpfungQuoteGI:              blImpfungQuoteGI.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })
            ,blImpfungQuoteBoost1:          blImpfungQuoteBoost1.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })
            ,blImpfungQuoteBoost2:          blImpfungQuoteBoost2.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })
            ,blImpfungUpdate:               blImpfungUpdate

        }

    } catch(e) {

        logDebug("END async function impfDatenHolen(bundesland) return initial values")

        return {

            deImpfungAnzahl:                deImpfungAnzahl.toLocaleString()
            ,deImpfungAnzahlMin1:           deImpfungAnzahlMin1.toLocaleString()
            ,deImpfungAnzahlGI:             deImpfungAnzahlGI.toLocaleString()
            ,deImpfungAnzahlBoost1:         deImpfungAnzahlBoost1.toLocaleString()
            ,deImpfungAnzahlBoost2:         deImpfungAnzahlBoost2.toLocaleString()
            ,deImpfungAnzahlBoost3:         deImpfungAnzahlBoost3.toLocaleString()
            ,deImpfungAnzahlBoost4:         deImpfungAnzahlBoost4.toLocaleString()
            ,deImpfungQuoteMin1:            deImpfungQuoteMin1.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })
            ,deImpfungQuoteGI:              deImpfungQuoteGI.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })
            ,deImpfungQuoteBoost1:          deImpfungQuoteBoost1.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })
            ,deImpfungQuoteBoost2:          deImpfungQuoteBoost2.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })
            ,deImpfungUpdate:               deImpfungUpdate
            ,blImpfungAnzahl:               blImpfungAnzahl.toLocaleString()
            ,blImpfungAnzahlMin1:           blImpfungAnzahlMin1.toLocaleString()
            ,blImpfungAnzahlGI:             blImpfungAnzahlGI.toLocaleString()
            ,blImpfungAnzahlBoost1:         blImpfungAnzahlBoost1.toLocaleString()
            ,blImpfungAnzahlBoost2:         blImpfungAnzahlBoost2.toLocaleString()
            ,blImpfungAnzahlBoost3:         blImpfungAnzahlBoost3.toLocaleString()
            ,blImpfungAnzahlBoost4:         blImpfungAnzahlBoost4.toLocaleString()
            ,blImpfungQuoteMin1:            blImpfungQuoteMin1.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })
            ,blImpfungQuoteGI:              blImpfungQuoteGI.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })
            ,blImpfungQuoteBoost1:          blImpfungQuoteBoost1.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })
            ,blImpfungQuoteBoost2:          blImpfungQuoteBoost2.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })
            ,blImpfungUpdate:               blImpfungUpdate

        }

    }

}

// Daten zur Intensivbettenbelegung holen
async function intensivbettenHolen(ags, bl_id) {

    logDebug("START async function intensivbettenHolen(ags, bl_id)")
    logDebug("ags: " + JSON.stringify(ags))
    logDebug("bl_id: " + JSON.stringify(bl_id))
    
    let lkIntensivBelegungProzent   =   -1
    let lkIntensivbelegungAnzahl    =   -1
    let lkFreieIntensivbetten       =   -1
    let lkIntensivbettenUpdate      =   "Fehler"
    let blIntensivBelegungProzent   =   -1
    let blIntensivbelegungAnzahl    =   -1
    let blFreieIntensivbetten       =   -1
    let blIntensivbettenUpdate      =   "Fehler"
    let deIntensivBelegungProzent   =   -1
    let deIntensivbelegungAnzahl    =   -1
    let deFreieIntensivbetten       =   -1
    let deIntensivbettenUpdate      =   "Fehler"

    try {

        if (diviNutzungsfreigabe && ((custom.bund.show && (custom.bund.intensivbettenBelegtAnzahl.show || custom.bund.intensivbettenBelegtProzent.show || custom.bund.intensivbettenFrei.show)) || (custom.land.show && (custom.land.intensivbettenBelegtAnzahl.show || custom.land.intensivbettenBelegtProzent.show || custom.land.intensivbettenFrei.show)) || (custom.kreis.show && (custom.kreis.intensivbettenBelegtAnzahl.show || custom.kreis.intensivbettenBelegtProzent.show || custom.kreis.intensivbettenFrei.show)))) { 
            
            if (custom.kreis.show && (custom.kreis.intensivbettenBelegtAnzahl.show || custom.kreis.intensivbettenBelegtProzent.show || custom.kreis.intensivbettenFrei.show)) {

                let lkIntensivData                      = await new Request(diviApiLk(ags)).loadJSON()
                logDebug("lkIntensivData: " + JSON.stringify(lkIntensivData))

                lkIntensivBelegungProzent           = ((100 / parseFloat(lkIntensivData.features[0].attributes.betten_gesamt) * parseFloat(lkIntensivData.features[0].attributes.faelle_covid_aktuell)).toFixed(2)).replace(/\./g,",")
                logDebug("lkIntensivBelegungProzent: " + lkIntensivBelegungProzent)
                lkIntensivbelegungAnzahl            = lkIntensivData.features[0].attributes.faelle_covid_aktuell
                logDebug("lkIntensivbelegungAnzahl: " + lkIntensivbelegungAnzahl)
                lkFreieIntensivbetten               = lkIntensivData.features[0].attributes.betten_frei
                logDebug("lkFreieIntensivbetten: " + lkFreieIntensivbetten)
                lkIntensivbettenUpdate              = lkIntensivData.features[0].attributes.daten_stand
                logDebug("lkIntensivbettenUpdate: " + lkIntensivbettenUpdate)

            }
            
            if (custom.land.show && (custom.land.intensivbettenBelegtAnzahl.show || custom.land.intensivbettenBelegtProzent.show || custom.land.intensivbettenFrei.show)) {

                let blIntensivData                      = await new Request(diviApiBl(bl_id)).loadJSON()
                logDebug("blIntensivData: " + JSON.stringify(blIntensivData))

                blIntensivBelegungProzent           = ((100 / parseFloat(blIntensivData.features[0].attributes.betten_gesamt) * parseFloat(blIntensivData.features[0].attributes.faelle_covid_aktuell)).toFixed(2)).replace(/\./g,",")
                logDebug("blIntensivBelegungProzent: " + blIntensivBelegungProzent)
                blIntensivbelegungAnzahl            = blIntensivData.features[0].attributes.faelle_covid_aktuell
                logDebug("blIntensivbelegungAnzahl: " + blIntensivbelegungAnzahl)
                blFreieIntensivbetten               = blIntensivData.features[0].attributes.betten_frei
                logDebug("blFreieIntensivbetten: " + blFreieIntensivbetten)
                blIntensivbettenUpdate              = blIntensivData.features[0].attributes.daten_stand
                logDebug("blIntensivbettenUpdate: " + blIntensivbettenUpdate)
                
            }

            if (custom.bund.show && (custom.bund.intensivbettenBelegtAnzahl.show || custom.bund.intensivbettenBelegtProzent.show || custom.bund.intensivbettenFrei.show)) {

                let deIntensivData                      = await new Request(diviApiDe).loadJSON()
                logDebug("deIntensivData: " + JSON.stringify(deIntensivData))

                deIntensivBelegungProzent           = ((100 / parseFloat(deIntensivData.features[0].attributes.betten_gesamt) * parseFloat(deIntensivData.features[0].attributes.faelle_covid_aktuell)).toFixed(2)).replace(/\./g,",")
                logDebug("deIntensivBelegungProzent: " + deIntensivBelegungProzent)
                deIntensivbelegungAnzahl            = deIntensivData.features[0].attributes.faelle_covid_aktuell
                logDebug("deIntensivbelegungAnzahl: " + deIntensivbelegungAnzahl)
                deFreieIntensivbetten               = deIntensivData.features[0].attributes.betten_frei
                logDebug("deFreieIntensivbetten: " + deFreieIntensivbetten)
                deIntensivbettenUpdate              = deIntensivData.features[0].attributes.daten_stand
                logDebug("deIntensivbettenUpdate: " + deIntensivbettenUpdate)
                
            }

        }

        logDebug("END async function intensivbettenHolen(ags, bl_id)")

        return { 

            lkIntensivBelegungProzent:      lkIntensivBelegungProzent.toLocaleString()
            ,lkIntensivbelegungAnzahl:      lkIntensivbelegungAnzahl.toLocaleString()
            ,lkFreieIntensivbetten:         lkFreieIntensivbetten.toLocaleString()
            ,lkIntensivbettenUpdate:        lkIntensivbettenUpdate.toLocaleString()
            ,blIntensivBelegungProzent:     blIntensivBelegungProzent.toLocaleString()
            ,blIntensivbelegungAnzahl:      blIntensivbelegungAnzahl.toLocaleString()
            ,blFreieIntensivbetten:         blFreieIntensivbetten.toLocaleString()
            ,blIntensivbettenUpdate:        blIntensivbettenUpdate.toLocaleString()
            ,deIntensivBelegungProzent:     deIntensivBelegungProzent.toLocaleString()
            ,deIntensivbelegungAnzahl:      deIntensivbelegungAnzahl.toLocaleString()
            ,deFreieIntensivbetten:         deFreieIntensivbetten.toLocaleString()
            ,deIntensivbettenUpdate:        deIntensivbettenUpdate.toLocaleString()

        }
                    
    } catch(e) {

        logDebug("END async function intensivbettenHolen(ags, bl_id) return initial values")

        return { 

            lkIntensivBelegungProzent:      lkIntensivBelegungProzent.toLocaleString()
            ,lkIntensivbelegungAnzahl:      lkIntensivbelegungAnzahl.toLocaleString()
            ,lkFreieIntensivbetten:         lkFreieIntensivbetten.toLocaleString()
            ,lkIntensivbettenUpdate:        lkIntensivbettenUpdate.toLocaleString()
            ,blIntensivBelegungProzent:     blIntensivBelegungProzent.toLocaleString()
            ,blIntensivbelegungAnzahl:      blIntensivbelegungAnzahl.toLocaleString()
            ,blFreieIntensivbetten:         blFreieIntensivbetten.toLocaleString()
            ,blIntensivbettenUpdate:        blIntensivbettenUpdate.toLocaleString()
            ,deIntensivBelegungProzent:     deIntensivBelegungProzent.toLocaleString()
            ,deIntensivbelegungAnzahl:      deIntensivbelegungAnzahl.toLocaleString()
            ,deFreieIntensivbetten:         deFreieIntensivbetten.toLocaleString()
            ,deIntensivbettenUpdate:        deIntensivbettenUpdate.toLocaleString()

        }

    }

}

// R-Faktor
async function rFaktorHolen () {

    logDebug("START async function rFaktorHolen()")
    
    let rFaktor                 = -1

    try {

        if (custom.bund.show && custom.bund.rWert.show) {

            let rFaktorRawData         = (await new Request(rkiCsvRFaktor).loadString()).slice(0,200)
            logDebug("rFaktorRawData: " + rFaktorRawData)

            let rFaktorLines            = rFaktorRawData.split(/(?:\r\n|\n)+/).filter(function (el) { return el.length != 0 })
            let rFaktorHeadLineFields   = rFaktorLines[0].split(",")
            let rFaktorFeldNummer       = 0

            for (let i = 0; i < rFaktorHeadLineFields.length; i++) {   
            
                logDebug("rFaktorHeadLineFields[i]: " + rFaktorHeadLineFields[i])

                if (rFaktorHeadLineFields[i]=="PS_7_Tage_R_Wert") {

                    rFaktorFeldNummer   = i
                    logDebug("rFaktorFeldNummer: " + rFaktorFeldNummer)

                }

            }

            rFaktorRawData              = (await new Request(rkiCsvRFaktor).loadString()).slice(60000)  
            logDebug("rFaktorRawData: " + rFaktorRawData)

            rFaktorLines                = rFaktorRawData.split(/(?:\r\n|\n)+/).filter(function (el) { return el.length != 0 })

            rFaktorRawData = ""

            for (rFaktorLine of rFaktorLines) {

                logDebug("rFaktorLine: " + rFaktorLine)

                let rFaktorLineFields   = rFaktorLine.split(",")

                if (rFaktorLineFields[rFaktorFeldNummer] && rFaktorLineFields[rFaktorFeldNummer] != "") {

                    rFaktor             = parseFloat(rFaktorLineFields[rFaktorFeldNummer])

                }

            }

            rFaktorLines = ""

        }

        logDebug("rFaktor: " + rFaktor)

        logDebug("END async function rFaktorHolen()")

        return {

            rFaktor:                rFaktor.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })

        }

    } catch(e) {

        logDebug("END async function rFaktorHolen() return initial values")

        return {

            rFaktor:                rFaktor.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })

        }

    }

}

// aktuellen Ort ermitteln
async function geodatenHolen(parameter) {

    logDebug("START async function geodatenHolen(parameter)")
    logDebug("parameter: " + parameter)

    try {

        if (parameter) {

            let geodaten            = parameter.split(",").map(parseFloat)
            logDebug("geodaten: " + geodaten)

            logDebug("END async function geodatenHolen(parameter) Fix")
            return {
                
                latitude:           geodaten[0]
                ,longitude:         geodaten[1]
            
            }

        } else {
        
            Location.setAccuracyToThreeKilometers()
            let geodaten            = await Location.current()
            logDebug("geodaten: " + geodaten)

            logDebug("END async function geodatenHolen(parameter)")
            return {

                latitude:           geodaten.latitude
                ,longitude:         geodaten.longitude

            }

        }

    } catch(e) {

        logDebug("END async function geodatenHolen(parameter) return null")

        return null

    }

}

// Cache holen
function cacheHolen(fm, path, minAge = -1, maxAge) {

    logDebug("START function cacheHolen(fm, path, minAge = -1, maxAge)")

    logDebug("path: "+ path)
    logDebug("minAge: "+ minAge)
    logDebug("maxAge: "+ maxAge)

    if (!fm.fileExists(path)) {
        
        logDebug("Cache File does not exists. Return null")
        return null

    }

    let cache = JSON.parse(fm.readString(path))
    logDebug("cache: "+ JSON.stringify(cache, null, 2))

    now = new Date()
    logDebug("now: "+ now)
    logDebug("modification Date: "+ fm.modificationDate(path))
    let age = (now.getTime() - fm.modificationDate(path).getTime())/60000
    logDebug("age: "+ age)
    
    if (Number.isInteger(maxAge) && age > maxAge) {
        
        logDebug("Age is grater than maxAge. Return null.")
        return null

    }
    
    if (minAge != -1 && (!minAge || age > minAge)) cache.cacheExpired = true
    logDebug("Return cache: "+ JSON.stringify(cache, null, 2))

    logDebug("END function cacheHolen(fm, path, minAge = -1, maxAge)")

    return cache

}

// background color
function getBackgroundColor(value, red, orange, yellow, op) {

    logDebug("START function getBackgroundColor(value, red, orange, yellow, op)")
    logDebug("value: " + value)
    logDebug("red: " + red)
    logDebug("orange: " + orange)
    logDebug("yellow: " + yellow)
    logDebug("op: " + op)
    
    if (value) value = value.replace(/\./g, "")
    if (value) value = value.replace(/\,/g, ".")

    let backgroundColor = Color.dynamic(colors.blueLight, colors.blueDark)
    logDebug("backgroundColor = Color.dynamic(colors.blueLight, colors.blueDark)")

    if (op == "GT") {

        if (parseFloat(value) > parseFloat(red) && red != -1) {

            backgroundColor = Color.dynamic(colors.redLight, colors.redDark)
            logDebug("backgroundColor = Color.dynamic(colors.redLight, colors.redDark)")

        } else if (parseFloat(value) > parseFloat(orange) && orange != -1) {

            backgroundColor = Color.dynamic(colors.orangeLight, colors.orangeDark)
            logDebug("backgroundColor = Color.dynamic(colors.orangeLight, colors.orangeDark)")

        } else if (parseFloat(value) > parseFloat(yellow) && yellow != -1) {

            backgroundColor = Color.dynamic(colors.yellowLight, colors.yellowDark)
            logDebug("backgroundColor = Color.dynamic(colors.yellowLight, colors.yellowDark)")

        }

    } else if (op == "LT") {

        if (parseFloat(value) < parseFloat(red) && red != -1) {

            backgroundColor = Color.dynamic(colors.redLight, colors.redDark)
            logDebug("backgroundColor = Color.dynamic(colors.redLight, colors.redDark)")

        } else if (parseFloat(value) < parseFloat(orange) && orange != -1) {

            backgroundColor = Color.dynamic(colors.orangeLight, colors.orangeDark)
            logDebug("backgroundColor = Color.dynamic(colors.orangeLight, colors.orangeDark)")

        } else if (parseFloat(value) < parseFloat(yellow) && yellow != -1) {

            backgroundColor = Color.dynamic(colors.yellowLight, colors.yellowDark)
            logDebug("backgroundColor = Color.dynamic(colors.yellowLight, colors.yellowDark)")

        }

    }

    logDebug("backgroundColor: " + backgroundColor)
    logDebug("END function getTextColor(value, red, orange, yellow, op)")

    return backgroundColor

}

// background color
function getBackgroundGradientColor(value) {

    logDebug("START function getBackgroundGradientColor(value)")
    logDebug("value: " + value)
    
    if (value) value = value.replace(/\./g, "")
    if (value) value = value.replace(/\,/g, ".")
    logDebug("value: " + value)

    let backgroundGradientColor = [ Color.dynamic(colors.blueLight, colors.blueDark), Color.dynamic(colors.blueDark, colors.blueLight)]
    logDebug("backgroundGradientColor = Color.dynamic(colors.blueLight, colors.blueDark)")

    if (custom.bund.hospitalisierungInzidenz.warnOP == "GT") {

        if (parseFloat(value) > parseFloat(custom.bund.hospitalisierungInzidenz.warnRot) && custom.bund.hospitalisierungInzidenz.warnRot != -1) {

            backgroundGradientColor = [ Color.dynamic(colors.redDark, colors.redLight), Color.dynamic(colors.redLight, colors.redDark) ]
            logDebug("backgroundGradientColor = [ Color.dynamic(colors.redLight, colors.redDark), Color.dynamic(colors.redDark, colors.redLight) ]")

        } else if (parseFloat(value) > parseFloat(custom.bund.hospitalisierungInzidenz.warnOrange) && custom.bund.hospitalisierungInzidenz.warnOrange != -1) {

            backgroundGradientColor = [ Color.dynamic(colors.orangeDark, colors.orangeLight), Color.dynamic(colors.orangeLight, colors.orangeDark) ]
            logDebug("backgroundGradientColor = [ Color.dynamic(colors.orangeLight, colors.orangeDark), Color.dynamic(colors.orangeDark, colors.orangeLight) ]")

        } else if (parseFloat(value) > parseFloat(custom.bund.hospitalisierungInzidenz.warnGelb) && custom.bund.hospitalisierungInzidenz.warnGelb != -1) {

            backgroundGradientColor = [ Color.dynamic(colors.yellowDark, colors.yellowLight), Color.dynamic(colors.yellowLight, colors.yellowDark) ]
            logDebug("backgroundGradientColor = [ Color.dynamic(colors.yellowLight, colors.yellowDark), Color.dynamic(colors.yellowDark, colors.yellowLight) ]")

        }

    } else if (custom.bund.hospitalisierungInzidenz.warnOP == "LT") {

        if (parseFloat(value) < parseFloat(custom.bund.hospitalisierungInzidenz.warnRot) && custom.bund.hospitalisierungInzidenz.warnRot != -1) {

            backgroundGradientColor = [ Color.dynamic(colors.redDark, colors.redLight), Color.dynamic(colors.redLight, colors.redDark) ]
            logDebug("backgroundGradientColor = [ Color.dynamic(colors.redLight, colors.redDark), Color.dynamic(colors.redDark, colors.redLight) ]")

        } else if (parseFloat(value) < parseFloat(custom.bund.hospitalisierungInzidenz.warnOrange) && custom.bund.hospitalisierungInzidenz.warnOrange != -1) {

            backgroundGradientColor = [ Color.dynamic(colors.orangeDark, colors.orangeLight), Color.dynamic(colors.orangeLight, colors.orangeDark) ]
            logDebug("backgroundGradientColor = [ Color.dynamic(colors.orangeLight, colors.orangeDark), Color.dynamic(colors.orangeDark, colors.orangeLight) ]")

        } else if (parseFloat(value) < parseFloat(custom.bund.hospitalisierungInzidenz.warnGelb) && custom.bund.hospitalisierungInzidenz.warnGelb != -1) {

            backgroundGradientColor = [ Color.dynamic(colors.yellowDark, colors.yellowLight), Color.dynamic(colors.yellowLight, colors.yellowDarkt) ]
            logDebug("backgroundGradientColor = [ Color.dynamic(colors.yellowLight, colors.yellowDark), Color.dynamic(colors.yellowDark, colors.yellowLight) ]")

        }

    }

    logDebug("backgroundGradientColor: " + backgroundGradientColor)
    logDebug("END function getBackgroundGradientColor(value)")

    return backgroundGradientColor

}

function zeileAusgeben(text, properties, value) {

    logDebug("START function zeileAusgeben(text, properties, value)")
    logDebug("text: " + JSON.stringify(text))
    logDebug("properties: " + JSON.stringify(properties))
    logDebug("value: " + value)

    lineStack                       = listWidget.addStack()
    lineStack.layoutHorizontally()
    lineStack.centerAlignContent()
    if (properties.cornerRadius!=false) { lineStack.cornerRadius = Number(properties.cornerRadius) }
    if (properties.paddingTop!=false && properties.paddingLeft!=false && properties.paddingBottom!=false && properties.paddingRight!=false) { lineStack.setPadding(Number(properties.paddingTop), Number(properties.paddingLeft), Number(properties.paddingBottom), Number(properties.paddingRight)) }
    if (properties.bgLight!=false && properties.bgDark!=false) { lineStack.backgroundColor = Color.dynamic(properties.bgLight, properties.bgDark) }
    if (properties.txAlign=="center" || properties.txAlign=="right") { lineStack.addSpacer() }
    
    if (value!==false) {
        
        lineText                    = lineStack.addText(text.text + ": ")

    } else {

        lineText                    = lineStack.addText(text.text)

    }
    lineText.font                   = new Font(properties.font, properties.size)
    lineText.textColor              = Color.dynamic(properties.txLight, properties.txDark)
    if (properties.txAlign=="center") { lineText.centerAlignText() }
    if (properties.txAlign=="left") { lineText.leftAlignText() }
    if (properties.txAlign=="right") { lineText.rightAlignText() }
    if (properties.txAlign=="center" || properties.txAlign=="left" || value!==false) { lineStack.addSpacer() }

    if (value && value!==false) {

        lineStack.backgroundColor   = getBackgroundColor(value, text.warnRot, text.warnOrange, text.warnGelb, text.warnOP)
        logDebug("text.einheit: " + text.einheit)
        if (text.einheit) {

            lineText                = lineStack.addText(value + " " + text.einheit)

        } else {

            lineText                = lineStack.addText(value)

        }
        
        lineText.font               = new Font(properties.font, properties.size)
        lineText.textColor          = Color.dynamic(properties.txLight, properties.txDark)
        lineText.rightAlignText()

    }

    logDebug("END function zeileAusgeben(text, properties, value)")

}

function logDebug(text) {

    if (custom.debug) console.log(text)

    let fm = FileManager.local()
    const iCloudInUse = fm.isFileStoredIniCloud(module.filename)
    fm = iCloudInUse ? FileManager.iCloud() : fm

    let logPath = fm.joinPath(fm.joinPath(fm.documentsDirectory(), basic.name.short), "Logs")
    let logFile = fm.joinPath(logPath, basic.name.short + ".log")

    let inText = ""
    if (custom.logging && fm.fileExists(logFile)) inText = fm.readString(logFile) + "\n"
    let outText = inText + text
    if (custom.logging) fm.writeString(logFile, outText)

}
