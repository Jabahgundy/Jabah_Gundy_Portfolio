const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {



    res.render('template', {
        locals: {
            title: 'About Me',

        },
        partials: {
            body: 'partials/about'
        }
    })
});

module.exports = router;