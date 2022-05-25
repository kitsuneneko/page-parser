import nodemailer from 'nodemailer';

const mailsender = (recipement) => {

    const transporter = nodemailer.createTransport({
        host: 'smtp.rambler.ru',
        port: 465,
        auth: {
            user: 'testomailo@rambler.ua',
            pass: 'Testtest123'
        }
    });


    const mailOptions = {
        from: 'testomailo@rambler.ua',
        to: recipement,
        // subject: 'New vacancy list',
        // text: 'Your new vacancy list. File included.',
        subject: 'kjsdfhksdhf',
        text: 'sdlld sdfs isdgfhjsgfj sdfsdf \n sdfhgs',
        attachments: [
            {
                // filename: 'vacancy.txt.gz',
                path: 'vacancy.txt.gz'
            }
        ]
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if(err) {
            console.error(err);
        } else {
            console.log('Email sent: ' + info.response)
        }
    });
};

export default mailsender;