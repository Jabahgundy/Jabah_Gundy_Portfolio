const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {



    res.render('template', {
        locals: {
            title: 'My Projects',

        },
        partials: {
            body: 'partials/projects'
        }
    })
});

module.exports = router;