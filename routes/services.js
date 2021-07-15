const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {



    res.render('template', {
        locals: {
            title: 'Services',

        },
        partials: {
            body: 'partials/services'
        }
    })
});

module.exports = router;