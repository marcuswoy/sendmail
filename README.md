
# SendMail

SendMail is a utility that allows for sending emails via SMTP protocol.

## Getting Started

This package allows you to configure and send emails using SMTP. It is designed to be simple and efficient, making it ideal for integrating email functionalities within your applications.

### Prerequisites

Ensure you have Node.js installed on your system to use this package. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

This package is hosted on a private npm registry. Ensure you have access and configure npm to use it. Typically, you would install it with:

```bash
npm install @private/send_mail
```

## Configuration

Follow these steps to configure the SendMail utility:

1. **Set SMTP Access**
   Set the SMTP server details:
   ```javascript
   Mailer.setSMTP('hostname', 587, true);
   ```

2. **User Credentials**
   Configure your SMTP authentication details:
   ```javascript
   Mailer.setUserCredentials('your@email.com', 'password');
   ```

3. **Set Sender**
   Define the sender's name and email address:
   ```javascript
   Mailer.setSender('Sender', 'your@email.com');
   ```

4. **Set Recipient**
   Specify the recipient's email address:
   ```javascript
   Mailer.setSendTo('recipien@email.com');
   ```

5. **Set Email Subject**
   Set the subject of the email:
   ```javascript
   Mailer.setSubject('It Works');
   ```

6. **Set Email Body**
   Define the body content of the email:
   ```javascript
   Mailer.setBody('It Works Body too');
   ```

7. **Send Email**
   Send the email:
   ```javascript
   Mailer.send().then(a => {
       console.log('Email sent successfully!');
   }).catch(error => {
       console.error('Failed to send email:', error);
   });
   ```

## Additional Information

For developers interested in contributing or modifying the package, the following files are critical:

- **webpack.config.js**: Configures the module bundling and build processes.
- **tsconfig.json**: Manages TypeScript compilation settings.
- **package.json**: Contains all metadata and dependencies necessary for the project.

## License

This project is licensed under the ISC License. See the LICENSE file for more details.

## Author

- Marcus Woyciechowski
