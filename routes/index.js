const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {



    res.render('template', {
        locals: {
            title: 'Jabah Gundy',

        },
        partials: {
            body: 'partials/home'
        }
    })
});

module.exports = router;