const pool = require('../db/db');

exports.showContactForm = (req, res) => {
    res.render('contact', { title: "Contato" });
};

exports.sendContactMessage = async (req, res) => {
    // const name = req.body.name;
    const { name, email, subject, message } = req.body;

    const sql = 'INSERT INTO contact (name, email, subject, message) VALUES (?, ?, ?, ?)';
    const values = [name, email, subject, message];

    pool.query(sql, values, (err, result) => {
        if (err) {
            console.error("Erro ao enviar formulário para contato: ", err);
            res.render("contact", { title: "Contato", feedback: "Erro!"});
        } else {
            console.log("Sucesso ao enviar formulário para contato.");
            res.render("contact", { title: "Contato", feedback: "Sucesso!"});
        }
    });
};