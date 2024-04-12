import Mailer from '../src/index'; // Importieren des Mailer-Moduls
import { describe, it } from 'mocha'; // Importieren der mocha-Funktionen

/**
 * Test-Suite für den E-Mail-Versand
 */
describe("Teste Versand von E-Mails", function () {

    /**
     * Testet die SMTP-Konfigurationsfunktion
     */
    it("should register STMP", function (done) {
        Mailer.setSMTP('host', 465, true);
        done();
    });

    /**
     * Testet die Funktion zum Setzen der Benutzerdaten
     */
    it("should register the User Credentials", function (done) {
        Mailer.setUserCredentials('your@email.com', 'yourPassword');
        done();
    });

    /**
     * Testet das Setzen des Absenders
     */
    it("should register the Sender", function (done) {
        Mailer.setSender('Me', 'your@email.com');
        done();
    });

    /**
     * Testet das Setzen des Empfängers
     */
    it("should register the E-Mail Mail is sending to", function (done) {
        Mailer.setSendTo('recipient@email.com');
        done();
    });

    /**
     * Testet das Setzen des Betreffs
     */
    it("should set the topic", function (done) {
        Mailer.setSubject('It Works');
        done();
    });

    /**
     * Testet das Setzen des E-Mail-Inhalts
     */
    it("should set the Mail's Body", function (done) {
        Mailer.setBody('It Works Body too');
        done();
    });

    /**
     * Testet das Senden der E-Mail
     */
    it("should send the E-Mail", function (done) {
        Mailer.send().then(() => {
            done();
        }).catch(err => {
            done(err);
        });
    });
});
