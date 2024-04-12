import nodemailer from 'nodemailer';

/**
 * Interface für die Konfiguration des SMTP-Transports
 */
interface Transporter {
    host: string,
    port: number,
    secure?: boolean,
    auth: {
        user: string,
        pass: string
    }
}

/**
 * Grundlegende SMTP-Klasse für den E-Mail-Versand
 */
class SMTP {
    protected transport: Transporter;
    protected sendTo: string;
    protected sender: string;
    protected subject: string;
    protected body: string;

    /**
     * Konstruktor initialisiert eine Basis-SMTP-Konfiguration
     */
    constructor() {
        this.transport = {
            host: "",
            port: 449,
            secure: true,
            auth: {
                user: "your@email.com",
                pass: "password"
            }
        };
        this.sendTo = '';
        this.sender = '';
        this.subject = '';
        this.body = '';
    }

    /**
     * Setzt die SMTP-Server Konfiguration
     * @param host Der Hostname des SMTP-Servers
     * @param port Der Port des SMTP-Servers
     * @param secure Gibt an, ob die Verbindung gesichert sein soll
     */
    public setSMTP(host: string, port: number, secure: boolean): void {
        this.transport.host = host;
        this.transport.port = port;
        this.transport.secure = secure;
    }

    /**
     * Setzt die Benutzeranmeldedaten für den SMTP-Server
     * @param user Der Benutzername
     * @param password Das Passwort
     */
    public setUserCredentials(user: string, password: string): void {
        this.transport.auth.user = user;
        this.transport.auth.pass = password;
    }

    /**
     * Gibt die aktuelle Konfiguration des SMTP-Transports zurück
     * @returns Die Transport-Konfiguration
     * @throws Error wenn die Konfiguration unvollständig ist
     */
    protected getConfig(): Transporter {
        if (!this.transport.host || !this.transport.port || 
            this.transport.secure === undefined || 
            !this.transport.auth.user || !this.transport.auth.pass) {
            throw new Error('SMTP Konfiguration unvollständig');
        }
        return this.transport;
    }

    /**
     * Setzt den Absender der E-Mail
     * @param fromName Der Name des Absenders
     * @param fromEmail Die E-Mail-Adresse des Absenders
     */
    public setSender(fromName: string, fromEmail: string): void {
        this.sender = `"${fromName}" <${fromEmail}>`;
    }

    /**
     * Setzt die Empfängeradresse
     * @param to Die E-Mail-Adresse des Empfängers
     */
    public setSendTo(to: string): void {
        this.sendTo = to;
    }

    /**
     * Setzt den Betreff der E-Mail
     * @param subject Der Betreff der E-Mail
     */
    public setSubject(subject: string): void {
        this.subject = subject;
    }

    /**
     * Setzt den Inhalt der E-Mail
     * @param body Der HTML-Inhalt der E-Mail
     */
    public setBody(body: string): void {
        this.body = body;
    }

    /**
     * Erstellt ein Objekt mit den E-Mail-Optionen für nodemailer
     * @returns Ein Objekt mit Konfigurationsdaten für die E-Mail
     */
    protected getOptions(): object {
        return {
            from: this.sender,
            to: this.sendTo,
            subject: this.subject,
            html: this.body
        };
    }
}

class Mailer extends SMTP {
    /**
     * Konstruktor zur Initialisierung der SMTP-Verbindung
     */
    constructor() {
        super();
    }

    /**
     * Sendet die E-Mail
     * @returns Ein Promise, das bei Erfolg die Versandinformationen enthält
     */
    send(): Promise<object> {
        return new Promise<object>((resolve, reject) => {
            let transporter = nodemailer.createTransport(this.getConfig());
            transporter.sendMail(this.getOptions(), (error, info) => {
                if (error) {
                    reject(error);
                }
                resolve(info);
            });
        });
    }
}

export default new Mailer();