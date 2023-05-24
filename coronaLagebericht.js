// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: heartbeat;

// Datenquellen:
// RKI Corona Landkreise:           https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0
// (RKI Corona Bundesländer:        https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/Coronafälle_in_den_Bundesländern/FeatureServer/0)
// RKI COVID19:                     https://services7.arcgis.com/mOBPykOjAyBO2ZKk/ArcGIS/rest/services/Covid19_hubv/FeatureServer/0
// (RKI COVID19 Sums:               https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/Covid19_RKI_Sums/FeatureServer/0)

// Datenbeschreibung:
// RKI Corona Landkreise:           https://npgeo-corona-npgeo-de.hub.arcgis.com/datasets/917fc37a709542548cc3be077a786c17_0
// RKI Corona Bundesländer:         https://npgeo-corona-npgeo-de.hub.arcgis.com/datasets/ef4b445a53c1406892257fe63129a8ea_0
// RKI COVID19:                     https://npgeo-corona-npgeo-de.hub.arcgis.com/datasets/dd4580c810204019a7b8eb3e0b329dd6_0
// RKI COVID19 Sums:                https://covid-19-geohub-deutschland-esridech.hub.arcgis.com/datasets/9644cad183f042e79fb6ad00eadc4ecf_0

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


// Datenquellen:
// RKI COVID19 Hospitalisierung:    https://raw.githubusercontent.com/robert-koch-institut/COVID-19-Hospitalisierungen_in_Deutschland/master/Aktuell_Deutschland_COVID-19-Hospitalisierungen.csv
// RKI R-Faktor:                    https://raw.githubusercontent.com/robert-koch-institut/SARS-CoV-2-Nowcasting_und_-R-Schaetzung/main/Nowcast_R_aktuell.csv
// RKI COVID-19-Impfungen:          https://raw.githubusercontent.com/robert-koch-institut/COVID-19-Impfungen_in_Deutschland/master/Aktuell_Deutschland_Impfquoten_COVID-19.csv

// Datenbeschreibung:
// RKI COVID19 Hospitalisierung:    https://github.com/robert-koch-institut/COVID-19-Hospitalisierungen_in_Deutschland
// RKI R-Faktor:                    https://github.com/robert-koch-institut/SARS-CoV-2-Nowcasting_und_-R-Schaetzung
// RKI COVID-19-Impfungen:          https://github.com/robert-koch-institut/COVID-19-Impfungen_in_Deutschland

// Benutzerdefinierte Lizenz:
// Robert Koch-Institut
// Die Daten der "COVID-19-Hospitalisierungen in Deutschland" und der "SARS-CoV-2-Nowcasting und -R-Schaetzung" sind
// lizenziert unter der Creative Commons Namensnennung 4.0 International Public License 

// Quellenvermerk:
// Robert Koch-Institut (RKI), CC-BY 4.0 International

// Haftungsausschluss:
// „Die Inhalte, die über die Internetseiten des Robert Koch-Instituts zur Verfügung gestellt werden,
// dienen ausschließlich der allgemeinen Information der Öffentlichkeit, vorrangig der Fachöffentlichkeit“.


// Datenquellen:
// DIVI-Intensivregister auf Landkreisebene:   https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/DIVI_Intensivregister_Landkreise/FeatureServer/0

// Datenbeschreibung:
// DIVI-Intensivregister auf Landkreisebene:   https://npgeo-corona-npgeo-de.hub.arcgis.com/datasets/8fc79b6cf7054b1b80385bda619f39b8_0

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
const diviNutzungsfreigabe  = true

// Widget Basic Information
const basic = {

    name: {

        full:               "Aktueller Corona Lagebericht"
        ,short:             "ACL"

    }

    ,version:               "v0.96"
    ,lastChange:            "03.03.2023"
    ,author:                "icsAT"
    ,source:                "https://github.com/icsAT/AktuellerCoronaLagebericht"

}

const custom = {

    debug:                  false
    ,logging:               false
    ,altUeberschrift:       ""
    ,cacheTime:             60

    ,bund: {

        show:               true
        ,head:               "Deutschland"
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
        ,neuinfektioenenAnzahl: {

            show:           true
            ,text:          "Anzahl Neuinfektionen"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,neuinfektioenenInzidenz: {

            show:           true
            ,text:          "7-Tage-Inzidenz Neuinfektionen"
            ,einheit:       ""
            ,warnGelb:      35
            ,warnOrange:    100
            ,warnRot:       200
            ,warnOP:        "GT"

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
        ,rWert: {

            show:           true
            ,text:          "7-Tage-R-Wert"
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
        ,todesfaelle: {

            show:           false
            ,text:          "Todesfälle Gesamt"
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
        ,genesene: {

            show:           false
            ,text:          "Genesene"
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

    ,land: {

        show:               true
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
            ,warnOP:        "GT"

        }
        ,neuinfektioenenInzidenz: {

            show:           true
            ,text:          "7-Tage-Inzidenz Neuinfektionen"
            ,einheit:       ""
            ,warnGelb:      35
            ,warnOrange:    100
            ,warnRot:       200
            ,warnOP:        "GT"

        }
        ,neuinfektioenenStaticInzidenz: {

            show:           false
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
        ,faelle: {

            show:           false
            ,text:          "Fälle Gesamt"
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
        ,neueTodesfaelle: {

            show:           true
            ,text:          "Neue Todesfälle"
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
        ,aktive: {

            show:           true
            ,text:          "Aktive Fälle"
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
        ,neuinfektioenenStaticInzidenz: {

            show:           false
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

            show:           true
            ,text:          "Intensivbettenbelegung C19"
            ,einheit:       ""
            ,warnGelb:      -1
            ,warnOrange:    -1
            ,warnRot:       -1
            ,warnOP:        ""

        }
        ,intensivbettenFrei:  {

            show:           true
            ,text:          "Freie Intensivbetten"
            ,einheit:       ""
            ,warnGelb:      10
            ,warnOrange:    5
            ,warnRot:       3
            ,warnOP:        "LT"

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
        ,todesfaelle: {

            show:           false
            ,text:          "Todesfälle Gesamt"
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
        ,genesene: {

            show:           false
            ,text:          "Genesene"
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
const rkiApiLk                  = (geodaten) => `https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=1%3D1&outFields=AGS,GEN,BEZ,cases,deaths,BL,BL_ID,last_update,cases7_per_100k,cases7_bl_per_100k,EWZ,EWZ_BL&geometry=${geodaten.longitude.toFixed(3)}%2C${geodaten.latitude.toFixed(3)}&geometryType=esriGeometryPoint&inSR=4326&spatialRel=esriSpatialRelWithin&returnGeometry=false&outSR=4326&f=json`
const rkiApiLkNeueFaelle        = (lkID) => `https://services7.arcgis.com/mOBPykOjAyBO2ZKk/ArcGIS/rest/services/rki_key_data_hubv/FeatureServer/0/query?where=AdmUnitId=${lkID}&outFields=AnzFallNeu&returnGeometry=false&f=json`
const rkiApiLkNeueFaelle7T      = (lkID) => `https://services7.arcgis.com/mOBPykOjAyBO2ZKk/ArcGIS/rest/services/rki_key_data_hubv/FeatureServer/0/query?where=AdmUnitId=${lkID}&outFields=AnzFall7T&returnGeometry=false&f=json`
const rkiApiLkNeueTodesfaelle   = (lkID) => `https://services7.arcgis.com/mOBPykOjAyBO2ZKk/ArcGIS/rest/services/rki_key_data_hubv/FeatureServer/0/query?where=AdmUnitId=${lkID}&outFields=AnzTodesfallNeu&returnGeometry=false&f=json`
const rkiApiLkGenesen           = (lkID) => `https://services7.arcgis.com/mOBPykOjAyBO2ZKk/ArcGIS/rest/services/rki_key_data_hubv/FeatureServer/0/query?where=AdmUnitId=${lkID}&outFields=AnzGenesen&returnGeometry=false&f=json`
const diviApiLk                 = (lkID) => `https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/DIVI_Intensivregister_Landkreise/FeatureServer/0/query?where=AGS=${lkID}&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=false&featureEncoding=esriDefault&multipatchOption=none&maxAllowableOffset=&geometryPrecision=&outSR=&sqlFormat=none&f=json`

const rkiApiBlNeueFaelle        = (blID) => `https://services7.arcgis.com/mOBPykOjAyBO2ZKk/ArcGIS/rest/services/rki_key_data_hubv/FeatureServer/0/query?where=AdmUnitId=${blID}+AND+BundeslandId=${blID}&outFields=AnzFallNeu&returnGeometry=false&f=json`
const rkiApiBlNeueFaelle7T      = (blID) => `https://services7.arcgis.com/mOBPykOjAyBO2ZKk/ArcGIS/rest/services/rki_key_data_hubv/FeatureServer/0/query?where=AdmUnitId=${blID}+AND+BundeslandId=${blID}&outFields=AnzFall7T&returnGeometry=false&f=json`
const rkiApiBlFaelle            = (blID) => `https://services7.arcgis.com/mOBPykOjAyBO2ZKk/ArcGIS/rest/services/rki_key_data_hubv/FeatureServer/0/query?where=AdmUnitId=${blID}+AND+BundeslandId=${blID}&outFields=AnzFall&returnGeometry=false&f=json`
const rkiApiBlNeueTodesfaelle   = (blID) => `https://services7.arcgis.com/mOBPykOjAyBO2ZKk/ArcGIS/rest/services/rki_key_data_hubv/FeatureServer/0/query?where=AdmUnitId=${blID}+AND+BundeslandId=${blID}&outFields=AnzTodesfallNeu&returnGeometry=false&f=json`
const rkiApiBlTodesfaelle       = (blID) => `https://services7.arcgis.com/mOBPykOjAyBO2ZKk/ArcGIS/rest/services/rki_key_data_hubv/FeatureServer/0/query?where=AdmUnitId=${blID}+AND+BundeslandId=${blID}&outFields=AnzTodesfall&returnGeometry=false&f=json`
const rkiApiBlGenesen           = (blID) => `https://services7.arcgis.com/mOBPykOjAyBO2ZKk/ArcGIS/rest/services/rki_key_data_hubv/FeatureServer/0/query?where=AdmUnitId=${blID}+AND+BundeslandId=${blID}&outFields=AnzGenesen&returnGeometry=false&f=json`
const diviApiBl                 = (blID) => `https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/DIVI_Intensivregister_Landkreise/FeatureServer/0/query?where=BL_ID=${blID}&returnGeodetic=false&outFields=*&returnGeometry=false&returnCentroid=false&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22faelle_covid_aktuell%22%2C%22outStatisticFieldName%22%3A%22faelle_covid_aktuell%22%7D%2C%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22faelle_covid_aktuell_beatmet%22%2C%22outStatisticFieldName%22%3A%22faelle_covid_aktuell_beatmet%22%7D%2C%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22betten_frei%22%2C%22outStatisticFieldName%22%3A%22betten_frei%22%7D%2C%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22betten_gesamt%22%2C%22outStatisticFieldName%22%3A%22betten_gesamt%22%7D%2C%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22anzahl_standorte%22%2C%22outStatisticFieldName%22%3A%22anzahl_standorte%22%7D%2C%7B%22statisticType%22%3A%22max%22%2C%22onStatisticField%22%3A%22daten_stand%22%2C%22outStatisticFieldName%22%3A%22daten_stand%22%7D%5D&returnZ=false&returnM=false&returnExceededLimitFeatures=true&sqlFormat=none&f=json`

const rkiCsvHospitalisierung    = `https://raw.githubusercontent.com/robert-koch-institut/COVID-19-Hospitalisierungen_in_Deutschland/master/Aktuell_Deutschland_COVID-19-Hospitalisierungen.csv`
const rkiCsvImpfungen           = `https://raw.githubusercontent.com/robert-koch-institut/COVID-19-Impfungen_in_Deutschland/master/Aktuell_Deutschland_Impfquoten_COVID-19.csv`

const rkiApiDeNeueFaelle        = `https://services7.arcgis.com/mOBPykOjAyBO2ZKk/ArcGIS/rest/services/rki_key_data_hubv/FeatureServer/0/query?where=AdmUnitId=0+AND+BundeslandId=0&outFields=AnzFallNeu&returnGeometry=false&f=json`
const rkiApiDeNeueFaelle7T      = `https://services7.arcgis.com/mOBPykOjAyBO2ZKk/ArcGIS/rest/services/rki_key_data_hubv/FeatureServer/0/query?where=AdmUnitId=0+AND+BundeslandId=0&outFields=AnzFall7T&returnGeometry=false&f=json`
const rkiApiDeFaelle            = `https://services7.arcgis.com/mOBPykOjAyBO2ZKk/ArcGIS/rest/services/rki_key_data_hubv/FeatureServer/0/query?where=AdmUnitId=0+AND+BundeslandId=0&outFields=AnzFall&returnGeometry=false&f=json`
const rkiApiDeNeueTodesfaelle   = `https://services7.arcgis.com/mOBPykOjAyBO2ZKk/ArcGIS/rest/services/rki_key_data_hubv/FeatureServer/0/query?where=AdmUnitId=0+AND+BundeslandId=0&outFields=AnzTodesfallNeu&returnGeometry=false&f=json`
const rkiApiDeTodesfaelle       = `https://services7.arcgis.com/mOBPykOjAyBO2ZKk/ArcGIS/rest/services/rki_key_data_hubv/FeatureServer/0/query?where=AdmUnitId=0+AND+BundeslandId=0&outFields=AnzTodesfall&returnGeometry=false&f=json`
const rkiApiDeGenesen           = `https://services7.arcgis.com/mOBPykOjAyBO2ZKk/ArcGIS/rest/services/rki_key_data_hubv/FeatureServer/0/query?where=AdmUnitId=0+AND+BundeslandId=0&outFields=AnzGenesen&returnGeometry=false&f=json`
const rkiApiDeEwz               = `https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/Coronaf%C3%A4lle_in_den_Bundesl%C3%A4ndern/FeatureServer/0/query?where=1=1&outFields=LAN_ew_EWZ&returnGeometry=false&outStatistics=%5B%7B%27statisticType%27%3A%27sum%27%2C%27onStatisticField%27%3A%27LAN_ew_EWZ%27%2C%27outStatisticFieldName%27%3A%27EWZ%27%7D%5D&f=json`
const rkiCsvRFaktor             = `https://raw.githubusercontent.com/robert-koch-institut/SARS-CoV-2-Nowcasting_und_-R-Schaetzung/main/Nowcast_R_aktuell.csv`
const diviApiDe                 = `https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/DIVI_Intensivregister_Landkreise/FeatureServer/0/query?where=1=1&returnGeodetic=false&outFields=*&returnGeometry=false&returnCentroid=false&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22faelle_covid_aktuell%22%2C%22outStatisticFieldName%22%3A%22faelle_covid_aktuell%22%7D%2C%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22faelle_covid_aktuell_beatmet%22%2C%22outStatisticFieldName%22%3A%22faelle_covid_aktuell_beatmet%22%7D%2C%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22betten_frei%22%2C%22outStatisticFieldName%22%3A%22betten_frei%22%7D%2C%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22betten_gesamt%22%2C%22outStatisticFieldName%22%3A%22betten_gesamt%22%7D%2C%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22anzahl_standorte%22%2C%22outStatisticFieldName%22%3A%22anzahl_standorte%22%7D%2C%7B%22statisticType%22%3A%22max%22%2C%22onStatisticField%22%3A%22daten_stand%22%2C%22outStatisticFieldName%22%3A%22daten_stand%22%7D%5D&returnZ=false&returnM=false&returnExceededLimitFeatures=true&sqlFormat=none&f=json`

// running the script
config.widgetFamily = config.widgetFamily || 'large'

let widget = await createWidget()

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

// create the widget
async function createWidget() {

    let fm = FileManager.iCloud()
    let logPath = ""
    let logFile = ""
    let cachePath = ""

    try {

        logPath = fm.joinPath(fm.documentsDirectory(), basic.name.short + "Logs")
        logFile = fm.joinPath(logPath, basic.name.short + ".log")
        cachePath = fm.joinPath(fm.cacheDirectory(), basic.name.short + ".cache")

    } catch(e) {

        fm = FileManager.local()
        logPath = fm.joinPath(fm.documentsDirectory(), basic.name.short + "Logs")
        logFile = fm.joinPath(logPath, basic.name.short + ".log")
        cachePath = fm.joinPath(fm.cacheDirectory(), basic.name.short + ".cache")

    }

    logDebug("logPath: " + logPath)
    logDebug("logFile: " + logFile)
    logDebug("cachePath: " + cachePath)

    logDebug("START async function crateWidget()")

    if (fm.fileExists(logFile)) fm.remove(logFile)
    
    listWidget                              = new ListWidget()
    listWidget.backgroundColor              = Color.clear()
    listWidget.layoutVertically
    listWidget.centerAlignContent
   
    try {
	
		geodaten	                   		= await geodatenHolen(args.widgetParameter)
		logDebug("geodaten: " + JSON.stringify(geodaten))
            
		lkDaten								= await lkDatenHolen(geodaten)
		logDebug("lkDaten: " + JSON.stringify(lkDaten))
		
		locationID 							= { AGS: lkDaten.AGS }
		logDebug("locationID aktuell: " + JSON.stringify(locationID))

		fm.writeString(cachePath, JSON.stringify(locationID, null, 2))

	} catch(e) {
  
		locationID 							= cacheHolen(fm, cachePath)
        logDebug("locationID aus Cache: " + JSON.stringify(locationID))

	}

	if (locationID.AGS) {
  
		cachePath = fm.joinPath(fm.cacheDirectory(), basic.name.short + "." + locationID.AGS + ".cache")
		logDebug("cachePath locationID: " + cachePath)

	} else {
  
  		cachePath = fm.joinPath(fm.cacheDirectory(), basic.name.short + ".0.cache")
		logDebug("cachePath 0: " + cachePath)

	}

    let covidDaten = cacheHolen(fm, cachePath, custom.cacheTime)
    logDebug("covidDaten aus Cache: " + JSON.stringify(covidDaten))

    if (!covidDaten || covidDaten.cacheExpired) {

    	try {

            if (!geodaten) {
            	
            	geodaten					= await geodatenHolen(args.widgetParameter)
            	logDebug("geodaten: " + JSON.stringify(geodaten))
            
            }
            if (!lkDaten) {
            
            	lkDaten             		= await lkDatenHolen(geodaten)
            	logDebug("lkDaten: " + JSON.stringify(lkDaten))
            
            }
            Inzidenz                    = await InzidenzHolen(lkDaten.AGS, lkDaten.BL_ID, lkDaten.EWZ, lkDaten.EWZ_BL)
            logDebug("Inzidenz: " + JSON.stringify(Inzidenz))
            neueFaelle             		    = await neueFaelleHolen(lkDaten.AGS, lkDaten.BL_ID)
            logDebug("neueFaelle: " + JSON.stringify(neueFaelle))
            alleFaelle                      = await alleFaelleHolen(lkDaten.BL_ID)
            logDebug("alleFaelle: " + JSON.stringify(alleFaelle))
            neueTodesfaelle                 = await neueTodesfaelleHolen(lkDaten.AGS, lkDaten.BL_ID)
            logDebug("neueTodesfaelle: " + JSON.stringify(neueTodesfaelle))
            alleTodesfaelle                 = await alleTodesfaelleHolen(lkDaten.BL_ID)
            logDebug("alleTodesfaelle: " + JSON.stringify(alleTodesfaelle))
            alleGesenenen                   = await geneseneHolen(lkDaten.AGS, lkDaten.BL_ID)
            logDebug("alleGesenenen: " + JSON.stringify(alleGesenenen))
            let lkAktive                    = -1
            if (lkDaten && alleGesenenen && lkDaten.cases!==null && lkDaten.death!==null && alleGesenenen.lkGenesene!==null) {

                lkAktive                    = (lkDaten.cases.replace(/\./g, "") - lkDaten.death.replace(/\./g, "") - alleGesenenen.lkGenesene.replace(/\./g, "")).toLocaleString()
            
            }
            logDebug("lkAktive: " + lkAktive)
            let blAktive                    = -1
            if (alleFaelle && alleTodesfaelle && alleGesenenen && alleFaelle.blAnzahlFaelle!==null && alleTodesfaelle.blTodesfaelle!==null && alleGesenenen.blGenesene!==null) {
                
                blAktive                    = (alleFaelle.blAnzahlFaelle.replace(/\./g, "") - alleTodesfaelle.blTodesfaelle.replace(/\./g, "") - alleGesenenen.blGenesene.replace(/\./g, "")).toLocaleString()

            }
            logDebug("blAktive: " + blAktive)
            let deAktive                    = -1
            if (alleFaelle && alleTodesfaelle && alleGesenenen && alleFaelle.deAnzahlFaelle!==null && alleTodesfaelle.deTodesfaelle!==null && alleGesenenen.deGenesene!==null) {

                deAktive                    = (alleFaelle.deAnzahlFaelle.replace(/\./g, "") - alleTodesfaelle.deTodesfaelle.replace(/\./g, "") - alleGesenenen.deGenesene.replace(/\./g, "")).toLocaleString()

            }
            logDebug("deAktive: " + deAktive)  
            hospitalisierungsDaten          = await hospitalisierungHolen(lkDaten.BL)
            logDebug("hospitalisierungsDaten: " + JSON.stringify(hospitalisierungsDaten))
            impfDaten                       = await impfDatenHolen(lkDaten.BL)
            logDebug("impfDaten: " + JSON.stringify(impfDaten))
            intensivbettenDaten             = await intensivbettenHolen(lkDaten.AGS, lkDaten.BL_ID)
            logDebug("intensivbettenDaten: " + JSON.stringify(intensivbettenDaten))
            let rFaktorDaten                = await rFaktorHolen()
            logDebug("rFaktorDaten: " +JSON.stringify( rFaktorDaten))

            covidDaten = {

                latitude:                       geodaten.latitude || "0"
                ,longitude:                     geodaten.longitude || "0"
                ,AGS:                           lkDaten.AGS || "00000"
                ,GEN:                           lkDaten.GEN || ""
                ,BEZ:                           lkDaten.BEZ || ""
                ,EWZ:                           lkDaten.EWZ || "-1"
                ,lkCases:                       lkDaten.cases || "-1"
                ,lkDeath:                       lkDaten.death || "-1"
                ,BL:                            lkDaten.BL || ""
                ,BL_ID:                         lkDaten.BL_ID || "0"
                ,EWZ_BL:                        lkDaten.EWZ_BL || "-1"
                ,lkLastUpdate:                  lkDaten.last_update || "01.01.1900"
                ,lkStaticInzidenz:              lkDaten.cases7_per_100k || "-1"
                ,blStaticInzidenz:              lkDaten.cases7_bl_per_100k || "-1"
                ,lkInzidenz:                Inzidenz.lkInzidenz || "-1"
                ,blInzidenz:                Inzidenz.blInzidenz || "-1"
                ,deInzidenz:                Inzidenz.deInzidenz || "-1"
                ,deEWZ:                         Inzidenz.deEWZ || "-1"
                ,lkAnzahlNeueFaelle:            neueFaelle.lkAnzahlNeueFaelle || "-1"
                ,blAnzahlNeueFaelle:            neueFaelle.blAnzahlNeueFaelle || "-1"
                ,deAnzahlNeueFaelle:            neueFaelle.deAnzahlNeueFaelle || "-1"
                ,blAnzahlFaelle:                alleFaelle.blAnzahlFaelle || "-1"
                ,deAnzahlFaelle:                alleFaelle.deAnzahlFaelle || "-1"
                ,lkNeueTodesfaelle:             neueTodesfaelle.lkNeueTodesfaelle || "-1"
                ,blNeueTodesfaelle:             neueTodesfaelle.blNeueTodesfaelle || "-1"
                ,deNeueTodesfaelle:             neueTodesfaelle.deNeueTodesfaelle || "-1"
                ,blTodesfaelle:                 alleTodesfaelle.blTodesfaelle || "-1"
                ,deTodesfaelle:                 alleTodesfaelle.deTodesfaelle || "-1"
                ,lkGenesene:                    alleGesenenen.lkGenesene || "-1"
                ,blGenesene:                    alleGesenenen.blGenesene || "-1"
                ,deGenesene:                    alleGesenenen.deGenesene || "-1"
                ,lkAktive:                      lkAktive || "-1"
                ,blAktive:                      blAktive || "-1"
                ,deAktive:                      deAktive || "-1"
                ,lkIntensivBelegungProzent:     intensivbettenDaten.lkIntensivBelegungProzent || "-1"
                ,lkIntensivbelegungAnzahl:      intensivbettenDaten.lkIntensivbelegungAnzahl || "-1"
                ,lkFreieIntensivbetten:         intensivbettenDaten.lkFreieIntensivbetten || "-1"
                ,lkIntensivbettenUpdate:        intensivbettenDaten.lkIntensivbettenUpdate || "01.01.1900"
                ,blIntensivBelegungProzent:     intensivbettenDaten.blIntensivBelegungProzent || "-1"
                ,blIntensivbelegungAnzahl:      intensivbettenDaten.blIntensivbelegungAnzahl || "-1"
                ,blFreieIntensivbetten:         intensivbettenDaten.blFreieIntensivbetten || "-1"
                ,blIntensivbettenUpdate:        intensivbettenDaten.blIntensivbettenUpdate || "01.01.1900"
                ,deIntensivBelegungProzent:     intensivbettenDaten.deIntensivBelegungProzent || "-1"
                ,deIntensivbelegungAnzahl:      intensivbettenDaten.deIntensivbelegungAnzahl || "-1"
                ,deFreieIntensivbetten:         intensivbettenDaten.deFreieIntensivbetten || "-1"
                ,deIntensivbettenUpdate:        intensivbettenDaten.deIntensivbettenUpdate || "01.01.1900"
                ,blHospitalisierungFaelle7T:    hospitalisierungsDaten.blHospitalisierungFaelle7T || "-1"
                ,blHospitalisierungInzidenz7T:  hospitalisierungsDaten.blHospitalisierungInzidenz7T || "-1"
                ,blHospitalisierungUpdate:      hospitalisierungsDaten.blHospitalisierungUpdate || "-1"
                ,deHospitalisierungFaelle7T:    hospitalisierungsDaten.deHospitalisierungFaelle7T || "-1"
                ,deHospitalisierungInzidenz7T:  hospitalisierungsDaten.deHospitalisierungInzidenz7T || "-1"
                ,deHospitalisierungUpdate:      hospitalisierungsDaten.deHospitalisierungUpdate || "01.01.1900"
                ,rFaktor:                       rFaktorDaten.rFaktor || "-1"
                ,deImpfungAnzahl:               impfDaten.deImpfungAnzahl || "-1"
                ,deImpfungAnzahlMin1:           impfDaten.deImpfungAnzahlMin1 || "-1"
                ,deImpfungAnzahlGI:             impfDaten.deImpfungAnzahlGI || "-1"
                ,deImpfungAnzahlBoost1:         impfDaten.deImpfungAnzahlBoost1 || "-1"
                ,deImpfungAnzahlBoost2:         impfDaten.deImpfungAnzahlBoost2 || "-1"
                ,deImpfungAnzahlBoost3:         impfDaten.deImpfungAnzahlBoost3 || "-1"
                ,deImpfungAnzahlBoost4:         impfDaten.deImpfungAnzahlBoost4 || "-1"
                ,deImpfungQuoteMin1:            impfDaten.deImpfungQuoteMin1 || "-1"
                ,deImpfungQuoteGI:              impfDaten.deImpfungQuoteGI || "-1"
                ,deImpfungQuoteBoost1:          impfDaten.deImpfungQuoteBoost1 || "-1"
                ,deImpfungQuoteBoost2:          impfDaten.deImpfungQuoteBoost2 || "-1"
                ,deImpfungUpdate:               impfDaten.deImpfungUpdate || "01.01.1900"
                ,blImpfungAnzahl:               impfDaten.blImpfungAnzahl || "-1"
                ,blImpfungAnzahlMin1:           impfDaten.blImpfungAnzahlMin1 || "-1"
                ,blImpfungAnzahlGI:             impfDaten.blImpfungAnzahlGI || "-1"
                ,blImpfungAnzahlBoost1:         impfDaten.blImpfungAnzahlBoost1 || "-1"
                ,blImpfungAnzahlBoost2:         impfDaten.blImpfungAnzahlBoost2 || "-1"
                ,blImpfungAnzahlBoost3:         impfDaten.blImpfungAnzahlBoost3 || "-1"
                ,blImpfungAnzahlBoost4:         impfDaten.blImpfungAnzahlBoost4 || "-1"
                ,blImpfungQuoteMin1:            impfDaten.blImpfungQuoteMin1 || "-1"
                ,blImpfungQuoteGI:              impfDaten. blImpfungQuoteGI || "-1"
                ,blImpfungQuoteBoost1:          impfDaten.blImpfungQuoteBoost1 || "-1"
                ,blImpfungQuoteBoost2:          impfDaten.blImpfungQuoteBoost2 || "-1"
                ,blImpfungUpdate:               impfDaten.blImpfungUpdate || "01.01.1900"

            }
            logDebug("covidDaten: " + JSON.stringify(covidDaten))

            fm.writeString(cachePath, JSON.stringify(covidDaten, null, 2))

        } catch(e) {

            logDebug("Fehler beim Daten ermitteln.")

            covidDaten = cacheHolen(fm, cachePath)
            logDebug("covidDaten: " + JSON.stringify(covidDaten))

        }

    }

    if (custom.debug && covidDaten) console.log("covidDaten: " + JSON.stringify(covidDaten))

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

        if (custom.bund.hospitalisierungInzidenz.show) { zeileAusgeben(custom.bund.hospitalisierungInzidenz, text.sectionData, covidDaten.deHospitalisierungInzidenz7T) }
        if (custom.bund.hospitalisierung7Tage.show) { zeileAusgeben(custom.bund.hospitalisierung7Tage, text.sectionData, covidDaten.deHospitalisierungFaelle7T) }
        if (custom.bund.neuinfektioenenAnzahl.show) { zeileAusgeben(custom.bund.neuinfektioenenAnzahl, text.sectionData, covidDaten.deAnzahlNeueFaelle) }
        if (custom.bund.neuinfektioenenInzidenz.show) { zeileAusgeben(custom.bund.neuinfektioenenInzidenz, text.sectionData, covidDaten.deInzidenz) }
        if (custom.bund.intensivbettenBelegtProzent.show && diviNutzungsfreigabe) { zeileAusgeben(custom.bund.intensivbettenBelegtProzent, text.sectionData, covidDaten.deIntensivBelegungProzent) }
        if (custom.bund.intensivbettenBelegtAnzahl.show && diviNutzungsfreigabe) { zeileAusgeben(custom.bund.intensivbettenBelegtAnzahl, text.sectionData, covidDaten.deIntensivbelegungAnzahl) }
        if (custom.bund.intensivbettenFrei.show && diviNutzungsfreigabe) { zeileAusgeben(custom.bund.intensivbettenFrei, text.sectionData, covidDaten.deFreieIntensivbetten) }
        if (custom.bund.rWert.show) { zeileAusgeben(custom.bund.rWert, text.sectionData, covidDaten.rFaktor) }
        if (custom.bund.faelle.show) { zeileAusgeben(custom.bund.faelle, text.sectionData, covidDaten.deAnzahlFaelle) }
        if (custom.bund.todesfaelle.show) { zeileAusgeben(custom.bund.todesfaelle, text.sectionData, covidDaten.deTodesfaelle) }
        if (custom.bund.neueTodesfaelle.show) { zeileAusgeben(custom.bund.neueTodesfaelle, text.sectionData, covidDaten.deNeueTodesfaelle) }
        if (custom.bund.genesene.show) { zeileAusgeben(custom.bund.genesene, text.sectionData, covidDaten.deGenesene) }
        if (custom.bund.aktive.show) { zeileAusgeben(custom.bund.aktive, text.sectionData, covidDaten.deAktive) }
        if (custom.bund.impfQuote.show) { zeileAusgeben(custom.bund.impfQuote, text.sectionData, covidDaten.deImpfungQuoteMin1 + "%/" + covidDaten.deImpfungQuoteGI  + "%/" + covidDaten.deImpfungQuoteBoost1 + "%/" + covidDaten.deImpfungQuoteBoost2 + "%") }
        if (custom.bund.impfungenGesamt.show) { zeileAusgeben(custom.bund.impfungenGesamt, text.sectionData, covidDaten.deImpfungAnzahl) }
        if (custom.bund.impfungenGesamtMin1.show) { zeileAusgeben(custom.bund.impfungenGesamtMin1, text.sectionData, covidDaten.deImpfungAnzahlMin1) }
        if (custom.bund.impfungenGesamtGI.show) { zeileAusgeben(custom.bund.impfungenGesamtGI, text.sectionData, covidDaten.deImpfungAnzahlGI) }
        if (custom.bund.impfungenGesamtBoost1.show) { zeileAusgeben(custom.bund.impfungenGesamtBoost1, text.sectionData, covidDaten.deImpfungAnzahlBoost1) }
        if (custom.bund.impfungenGesamtBoost2.show) { zeileAusgeben(custom.bund.impfungenGesamtBoost2, text.sectionData, covidDaten.deImpfungAnzahlBoost2) }
        if (custom.bund.impfungenGesamtBoost3.show) { zeileAusgeben(custom.bund.impfungenGesamtBoost3, text.sectionData, covidDaten.deImpfungAnzahlBoost3) }
        if (custom.bund.impfungenGesamtBoost4.show) { zeileAusgeben(custom.bund.impfungenGesamtBoost4, text.sectionData, covidDaten.deImpfungAnzahlBoost4) }

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
        
        if (custom.land.hospitalisierungInzidenz.show) { zeileAusgeben(custom.land.hospitalisierungInzidenz, text.sectionData, covidDaten.blHospitalisierungInzidenz7T) }
        if (custom.land.hospitalisierung7Tage.show) { zeileAusgeben(custom.land.hospitalisierung7Tage, text.sectionData, covidDaten.blHospitalisierungFaelle7T) }
        if (custom.land.neuinfektioenenInzidenz.show) { zeileAusgeben(custom.land.neuinfektioenenInzidenz, text.sectionData, covidDaten.blInzidenz) }
        if (custom.land.neuinfektioenenStaticInzidenz.show) { zeileAusgeben(custom.land.neuinfektioenenStaticInzidenz, text.sectionData, covidDaten.blStaticInzidenz) }
        if (custom.land.neuinfektioenenAnzahl.show) { zeileAusgeben(custom.land.neuinfektioenenAnzahl, text.sectionData, covidDaten.blAnzahlNeueFaelle) }
        if (custom.land.intensivbettenBelegtProzent.show && diviNutzungsfreigabe) { zeileAusgeben(custom.land.intensivbettenBelegtProzent, text.sectionData, covidDaten.blIntensivBelegungProzent) }
        if (custom.land.intensivbettenBelegtAnzahl.show && diviNutzungsfreigabe) { zeileAusgeben(custom.land.intensivbettenBelegtAnzahl, text.sectionData, covidDaten.blIntensivbelegungAnzahl) }
        if (custom.land.intensivbettenFrei.show && diviNutzungsfreigabe) { zeileAusgeben(custom.land.intensivbettenFrei, text.sectionData, covidDaten.blFreieIntensivbetten) }
        if (custom.land.faelle.show) { zeileAusgeben(custom.land.faelle, text.sectionData, covidDaten.blAnzahlFaelle) }
        if (custom.land.todesfaelle.show) { zeileAusgeben(custom.land.todesfaelle, text.sectionData, covidDaten.blTodesfaelle) }
        if (custom.land.neueTodesfaelle.show) { zeileAusgeben(custom.land.neueTodesfaelle, text.sectionData, covidDaten.blNeueTodesfaelle) }
        if (custom.land.genesene.show) { zeileAusgeben(custom.land.genesene, text.sectionData, covidDaten.blGenesene) }
        if (custom.land.aktive.show) { zeileAusgeben(custom.land.aktive, text.sectionData, covidDaten.blAktive) }
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
        if (custom.kreis.neuinfektioenenStaticInzidenz.show) { zeileAusgeben(custom.kreis.neuinfektioenenStaticInzidenz, text.sectionData, covidDaten.lkStaticInzidenz) }
        if (custom.kreis.neuinfektioenenAnzahl.show) { zeileAusgeben(custom.kreis.neuinfektioenenAnzahl, text.sectionData, covidDaten.lkAnzahlNeueFaelle) }
        if (custom.kreis.intensivbettenBelegtProzent.show && diviNutzungsfreigabe) { zeileAusgeben(custom.kreis.intensivbettenBelegtProzent, text.sectionData, covidDaten.lkIntensivBelegungProzent) }
        if (custom.kreis.intensivbettenBelegtAnzahl.show && diviNutzungsfreigabe) { zeileAusgeben(custom.kreis.intensivbettenBelegtAnzahl, text.sectionData, covidDaten.lkIntensivbelegungAnzahl) }
        if (custom.kreis.intensivbettenFrei.show && diviNutzungsfreigabe) { zeileAusgeben(custom.kreis.intensivbettenFrei, text.sectionData, covidDaten.lkFreieIntensivbetten) }
        if (custom.kreis.faelle.show) { zeileAusgeben(custom.kreis.faelle, text.sectionData, covidDaten.lkCases) }
        if (custom.kreis.todesfaelle.show) { zeileAusgeben(custom.kreis.todesfaelle, text.sectionData, covidDaten.lkDeath) }
        if (custom.kreis.neueTodesfaelle.show) { zeileAusgeben(custom.kreis.neueTodesfaelle, text.sectionData, covidDaten.lkNeueTodesfaelle) }
        if (custom.kreis.genesene.show) { zeileAusgeben(custom.kreis.genesene, text.sectionData, covidDaten.lkGenesene) }
        if (custom.kreis.aktive.show) { zeileAusgeben(custom.kreis.aktive, text.sectionData, covidDaten.lkAktive) }

        logDebug("END generate Kreis")

    }

    listWidget.addSpacer(3)

	now										 = new Date()
	
    let footerLine                          = basic.name.short + " " + basic.version
    footerLine                              = footerLine +  " WU:" + now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    footerLine                              = footerLine +  " RKI:" + covidDaten.lkLastUpdate.substr(0, 6)
    logDebug("covidDaten.lkLastUpdate: " + covidDaten.lkLastUpdate.substr(0, 10))
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

// Inzidenz für Deutschland ermitteln
async function InzidenzHolen(lkID, blID, EWZ_LK, EWZ_BL) {

    logDebug("START async function InzidenzHolen")
    
    try {
        
        logDebug("lkID: " + lkID)
        logDebug("blID: " + blID)
        logDebug("EWZ_LK: " + EWZ_LK)
        logDebug("EWZ_BL: " + EWZ_BL)
        
        let now = new Date()
        now.setDate(now.getDate() - 7)
        let start = now.toISOString().slice(0, 10)
        
        let lkIncidence = -1

        if (custom.kreis.show && custom.kreis.neuinfektioenenInzidenz.show) {

            logDebug("start: " + start)

            let lkInzidenzRawData               = await new Request(rkiApiLkNeueFaelle7T(lkID)).loadJSON()
            logDebug("lkInzidenzRawData: " + JSON.stringify(lkInzidenzRawData))

            let lkCases7D = lkInzidenzRawData.features[0].attributes.AnzFall7T
            logDebug("lkCases7D: " + lkCases7D)

            lkIncidence = (((lkCases7D / parseFloat(EWZ_LK) * 100000).toFixed(1)).replace(/\./g,",")).toLocaleString()
            logDebug("lkIncidence: " + lkIncidence)

        }

        let blIncidence = -1

        if (custom.land.show && custom.land.neuinfektioenenInzidenz.show) {

            let blInzidenzRawData               = await new Request(rkiApiBlNeueFaelle7T(blID)).loadJSON()
            logDebug("blInzidenzRawData: " + JSON.stringify(blInzidenzRawData))

            let blCases7D = blInzidenzRawData.features[0].attributes.AnzFall7T
            logDebug("blCases7D: " + blCases7D)

            blIncidence = (((blCases7D / parseFloat(EWZ_BL) * 100000).toFixed(1)).replace(/\./g,",")).toLocaleString()
            logDebug("blIncidence: " + blIncidence)

        }

        let deEWZ = -1
        let deIncidence = -1

        if (custom.bund.show && custom.bund.neuinfektioenenInzidenz.show) {

            let deInzidenzRawData               = await new Request(rkiApiDeNeueFaelle7T).loadJSON()
            logDebug("deInzidenzRawData: " + JSON.stringify(deInzidenzRawData))

            let deCases7D = deInzidenzRawData.features[0].attributes.AnzFall7T
            logDebug("deCases7D: " + deCases7D)

            let deEwzRawData                        = await new Request(rkiApiDeEwz).loadJSON()
            logDebug("deEwzRawData: " + JSON.stringify(deEwzRawData))

            deEWZ                                   = deEwzRawData.features[0].attributes.EWZ
            logDebug("deEWZ: " + JSON.stringify(deEWZ))

            deIncidence = (((deCases7D / parseFloat(deEWZ) * 100000).toFixed(1)).replace(/\./g,",")).toLocaleString()
            logDebug("deIncidence: " + deIncidence)

        }
        
        logDebug("END async function InzidenzHolen()")

        return {
            
                lkInzidenz:                 lkIncidence
                ,blInzidenz:                blIncidence
                ,deInzidenz:                deIncidence
                ,deEWZ:                         deEWZ

        }
                    
    } catch(e) {

       logDebug("END async function InzidenzHolen() return null")

       return null;

    }
    

}

// LK Daten vom RKI holen
async function lkDatenHolen(geodaten) {

    logDebug("START async function lkDatenHolen(geodaten)")
    logDebug("geodaten: " + JSON.stringify(geodaten))

    try {
        
        let lkRawData                       = await new Request(rkiApiLk(geodaten)).loadJSON()
        logDebug("lkRawData: " + JSON.stringify(lkRawData))
        let lkData                          = lkRawData.features[0].attributes
        logDebug("lkData: " + JSON.stringify(lkData))

        logDebug("END async function lkDatenHolen(geodaten)")

        return { 

            AGS:                            lkData.AGS
            ,GEN:                           lkData.GEN
            ,BEZ:                           lkData.BEZ
            ,EWZ:                           lkData.EWZ
            ,cases:                         lkData.cases.toLocaleString()
            ,death:                         lkData.deaths.toLocaleString()
            ,BL:                            lkData.BL
            ,BL_ID:                         lkData.BL_ID
            ,EWZ_BL:                        lkData.EWZ_BL
            ,last_update:                   lkData.last_update
            ,cases7_per_100k:               lkData.cases7_per_100k.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })
            ,cases7_bl_per_100k:            lkData.cases7_bl_per_100k.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })

        }
                    
    } catch(e) {

        logDebug("END async function lkDatenHolen(geodaten) return null")

        return null;

    }

}

// Neue Fälle vom RKI holen
async function neueFaelleHolen(ags, bl_id) {

    logDebug("START async function neueFaelleHolen(ags, bl_id)")
    logDebug("ags: " + JSON.stringify(ags))
    logDebug("bl_id: " + JSON.stringify(bl_id))
    
    try {
        
        let lkAnzahlNeueFaelle = -1

        if (custom.kreis.show && custom.kreis.neuinfektioenenAnzahl.show) {

            let lkRawData                       = await new Request(rkiApiLkNeueFaelle(ags)).loadJSON()
            logDebug("lkRawData: " + JSON.stringify(lkRawData))
            lkAnzahlNeueFaelle              = lkRawData.features[0].attributes.AnzFallNeu || 0
            logDebug("lkAnzahlNeueFaelle: " + lkAnzahlNeueFaelle)

        }

        let blAnzahlNeueFaelle = -1

        if (custom.land.show && custom.land.neuinfektioenenAnzahl.show) {

            let blRawData                       = await new Request(rkiApiBlNeueFaelle(bl_id)).loadJSON()
            logDebug("blRawData: " + JSON.stringify(blRawData))
            blAnzahlNeueFaelle              = blRawData.features[0].attributes.AnzFallNeu || 0
            logDebug("blAnzahlNeueFaelle: " + blAnzahlNeueFaelle)

        }

        let deAnzahlNeueFaelle = -1

        if (custom.bund.show && custom.bund.neuinfektioenenAnzahl.show) {

            let deRawData                       = await new Request(rkiApiDeNeueFaelle).loadJSON()
            logDebug("deRawData: " + JSON.stringify(deRawData))
            deAnzahlNeueFaelle              = deRawData.features[0].attributes.AnzFallNeu || 0
            logDebug("deAnzahlNeueFaelle: " + deAnzahlNeueFaelle)

        }

        logDebug("END async function neueFaelleHolen(ags, bl_id)")

        return { 

            lkAnzahlNeueFaelle:             lkAnzahlNeueFaelle.toLocaleString()
            ,blAnzahlNeueFaelle:            blAnzahlNeueFaelle.toLocaleString()
            ,deAnzahlNeueFaelle:            deAnzahlNeueFaelle.toLocaleString()

        }
                    
    } catch(e) {

        logDebug("END async function neueFaelleHolen(ags, bl_id) return null")

        return null;

    }

}

// Gesamt Fälle vom RKI holen
async function alleFaelleHolen(bl_id) {

    logDebug("START async function alleFaelleHolen(bl_id)")
    logDebug("bl_id: " + JSON.stringify(bl_id))
    
    try {

        let blAnzahlFaelle = -1

        if (custom.land.show && (custom.land.faelle.show || custom.land.aktive.show)) {

            let blRawData                       = await new Request(rkiApiBlFaelle(bl_id)).loadJSON()
            logDebug("blRawData: " + JSON.stringify(blRawData))
            blAnzahlFaelle                  = blRawData.features[0].attributes.AnzFall || 0
            logDebug("blAnzahlFaelle: " + blAnzahlFaelle)

        }

        let deAnzahlFaelle = -1

        if (custom.bund.show && (custom.bund.faelle.show || custom.bund.aktive.show)) {

            let deRawData                       = await new Request(rkiApiDeFaelle).loadJSON()
            logDebug("deRawData: " + JSON.stringify(deRawData))
            deAnzahlFaelle                  = deRawData.features[0].attributes.AnzFall || 0
            logDebug("deAnzahlFaelle: " + deAnzahlFaelle)

        }

        logDebug("END async function alleFaelleHolen(bl_id)")

        return { 

            blAnzahlFaelle:                 blAnzahlFaelle.toLocaleString()
            ,deAnzahlFaelle:                deAnzahlFaelle.toLocaleString()

        }
                    
    } catch(e) {

        logDebug("END async function alleFaelleHolen(bl_id) return null")

        return null;

    }

}

// Neue Todesfälle vom RKI holen
async function neueTodesfaelleHolen(ags, bl_id) {

    logDebug("START async function neueTodesfaelleHolen(ags, bl_id)")
    logDebug("ags: " + JSON.stringify(ags))
    logDebug("bl_id: " + JSON.stringify(bl_id))
    
    try {
        
        let lkNeueTodesfaelle = -1

        if (custom.kreis.show && custom.kreis.neueTodesfaelle.show) {

            let lkRawData                       = await new Request(rkiApiLkNeueTodesfaelle(ags)).loadJSON()
            logDebug("lkRawData: " + JSON.stringify(lkRawData))
            lkNeueTodesfaelle                  = lkRawData.features[0].attributes.AnzTodesfallNeu || 0
            logDebug("lkNeueTodesfaelle: " + lkNeueTodesfaelle)

        }

        let blNeueTodesfaelle = -1

        if (custom.land.show && custom.land.neueTodesfaelle.show) {

            let blRawData                       = await new Request(rkiApiBlNeueTodesfaelle(bl_id)).loadJSON()
            logDebug("blRawData: " + JSON.stringify(blRawData))
            blNeueTodesfaelle                  = blRawData.features[0].attributes.AnzTodesfallNeu || 0
            logDebug("blNeueTodesfaelle: " + blNeueTodesfaelle)

        }

        let deNeueTodesfaelle = -1

        if (custom.bund.show && custom.bund.neueTodesfaelle.show) {

            let deRawData                       = await new Request(rkiApiDeNeueTodesfaelle).loadJSON()
            logDebug("deRawData: " + JSON.stringify(deRawData))
            deNeueTodesfaelle                  = deRawData.features[0].attributes.AnzTodesfallNeu || 0
            logDebug("deNeueTodesfaelle: " + deNeueTodesfaelle)

        }

        logDebug("END async function neueTodesfaelleHolen(ags, bl_id)")

        return { 

            lkNeueTodesfaelle:                 lkNeueTodesfaelle.toLocaleString()
            ,blNeueTodesfaelle:                blNeueTodesfaelle.toLocaleString()
            ,deNeueTodesfaelle:                deNeueTodesfaelle.toLocaleString()

        }
                    
    } catch(e) {

        logDebug("END async function neueTodesfaelleHolen(ags, bl_id) return null")

        return null;

    }

}

// Gesamt Todesfälle vom RKI holen
async function alleTodesfaelleHolen(bl_id) {

    logDebug("START async function alleTodesfaelleHolen(bl_id)")
    logDebug("bl_id: " + JSON.stringify(bl_id))
    
    try {
        
        let blTodesfaelle = -1

        if (custom.land.show && (custom.land.todesfaelle.show || custom.land.aktive.show)) {

            let blRawData                       = await new Request(rkiApiBlTodesfaelle(bl_id)).loadJSON()
            logDebug("blRawData: " + JSON.stringify(blRawData))
            blTodesfaelle                  = blRawData.features[0].attributes.AnzTodesfall || 0
            logDebug("blTodesfaelle: " + blTodesfaelle)

        }

        let deTodesfaelle = -1

        if (custom.bund.show && (custom.bund.todesfaelle.show || custom.bund.aktive.show)) {

            let deRawData                       = await new Request(rkiApiDeTodesfaelle).loadJSON()
            logDebug("deRawData: " + JSON.stringify(deRawData))
            deTodesfaelle                  = deRawData.features[0].attributes.AnzTodesfall || 0
            logDebug("deTodesfaelle: " + deTodesfaelle)

        }

        logDebug("END async function alleTodesfaelleHolen(bl_id)")

        return { 

            blTodesfaelle:                 blTodesfaelle.toLocaleString()
            ,deTodesfaelle:                deTodesfaelle.toLocaleString()

        }
                    
    } catch(e) {

        logDebug("END async function alleTodesfaelleHolen(bl_id) return null")

        return null;

    }

}

// Genesene vom RKI holen
async function geneseneHolen(ags, bl_id) {

    logDebug("START async function geneseneHolen(ags, bl_id)")
    logDebug("ags: " + JSON.stringify(ags))
    logDebug("bl_id: " + JSON.stringify(bl_id))
    
    try {
        
        let lkGenesene = -1

        if (custom.kreis.show && (custom.kreis.genesene.show || custom.kreis.aktive.show)) {

            let lkRawData                       = await new Request(rkiApiLkGenesen(ags)).loadJSON()
            logDebug("lkRawData: " + JSON.stringify(lkRawData))
            lkGenesene                  = lkRawData.features[0].attributes.AnzGenesen || 0
            logDebug("lkGenesene: " + lkGenesene)

        }

        let blGenesene = -1

        if (custom.land.show && (custom.land.genesene.show || custom.land.aktive.show)) {

            let blRawData                       = await new Request(rkiApiBlGenesen(bl_id)).loadJSON()
            logDebug("blRawData: " + JSON.stringify(blRawData))
            blGenesene                  = blRawData.features[0].attributes.AnzGenesen || 0
            logDebug("blGenesene: " + blGenesene)

        }

        let deGenesene = -1

        if (custom.bund.show && (custom.bund.genesene.show || custom.bund.aktive.show)) {

            let deRawData                       = await new Request(rkiApiDeGenesen).loadJSON()
            logDebug("deRawData: " + JSON.stringify(deRawData))
            deGenesene                  = deRawData.features[0].attributes.AnzGenesen || 0
            logDebug("deGenesene: " + deGenesene)
        
        }

        logDebug("END async function geneseneHolen(ags, bl_id)")

        return { 

            lkGenesene:                 lkGenesene.toLocaleString()
            ,blGenesene:                blGenesene.toLocaleString()
            ,deGenesene:                deGenesene.toLocaleString()

        }
                    
    } catch(e) {

        logDebug("END async function geneseneHolen(ags, bl_id) return null")

        return null;

    }

}

// Hospitalisierungswerte holen
async function hospitalisierungHolen (bundesland) {

    logDebug("START async function hospitalisierungHolen(bundesland)")
    logDebug("bundesland: " + bundesland)
    
    //try {

        let deHospitalisierungFaelle7T      = 0
        let deHospitalisierungInzidenz7T    = 0
        let deHospitalisierungUpdate        = "Fehler"
        let blHospitalisierungFaelle7T      = 0
        let blHospitalisierungInzidenz7T    = 0
        let blHospitalisierungUpdate        = "Fehler"

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

    //} catch(e) {

    //    logDebug("END async function hospitalisierungHolen(bundesland) return null")

    //    return null;

    //}

}

// Impfdaten holen
async function impfDatenHolen(bundesland) {

    logDebug("START async function impfDatenHolen(bundesland)")
    logDebug("bundesland: " + bundesland)
    
    try {

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

        logDebug("END async function impfDatenHolen(bundesland) return null")

        return null;

    }

}

// Daten zur Intensivbettenbelegung holen
async function intensivbettenHolen(ags, bl_id) {

    logDebug("START async function intensivbettenHolen(ags, bl_id)")
    logDebug("ags: " + JSON.stringify(ags))
    logDebug("bl_id: " + JSON.stringify(bl_id))
    
    try {
        
        let lkIntensivBelegungProzent   =   -1
        let lkIntensivbelegungAnzahl    =   -1
        let lkFreieIntensivbetten       =   -1
        let lkIntensivbettenUpdate      =   "01.01.1900"
        let blIntensivBelegungProzent   =   -1
        let blIntensivbelegungAnzahl    =   -1
        let blFreieIntensivbetten       =   -1
        let blIntensivbettenUpdate      =   "01.01.1900"
        let deIntensivBelegungProzent   =   -1
        let deIntensivbelegungAnzahl    =   -1
        let deFreieIntensivbetten       =   -1
        let deIntensivbettenUpdate      =   "01.01.1900"

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

        logDebug("END async function intensivbettenHolen(ags, bl_id) return null")

        return null;

    }

}

// R-Faktor
async function rFaktorHolen () {

    logDebug("START async function rFaktorHolen()")
    
    try {

        let rFaktor                 = -1

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

        logDebug("END async function rFaktorHolen() return null")

        return null;

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

    let fm = FileManager.iCloud()
    let logPath = ""
    let logFile = ""
    
    try {

        logPath = fm.joinPath(fm.documentsDirectory(), basic.name.short + "Logs")
        logFile = fm.joinPath(logPath, basic.name.short + ".log")

    } catch(e) {

        fm = FileManager.local()
        logPath = fm.joinPath(fm.documentsDirectory(), basic.name.short + "Logs")
        logFile = fm.joinPath(logPath, basic.name.short + ".log")

    }

    let inText = ""
    if (custom.logging && fm.fileExists(logFile)) inText = fm.readString(logFile) + "\n"
    let outText = inText + text
    if (custom.logging) fm.writeString(logFile, outText)

}
