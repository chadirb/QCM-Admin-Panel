const mongoose = require('mongoose');
const Cont = mongoose.model('Language');

const getLanguage = (request, response) => {
    Cont.find()
        .exec((error, language) => {
            if (error) {
                response
                    .status(400)
                    .json(error);
            } else {
                if (language) {
                    response
                        .status(201)
                        .json(language);
                } else {
                    return response
                        .status(404)
                        .json({
                            "message": "language not found"
                        });
                }
            }
        });
}

const createLanguage = (request, response) => {

    Cont.create({
        nom: request.body.nom,
        description: request.body.description,
        score: request.body.score,

    }, (error, language) => {
        if (error) {
            response
                .status(400)
                .json(error);
        } else {
            response
                .status(201)
                .json(language);
        }
    });

}

const updateLanguage = (request, response) => {
    const languageid = request.params.languageid;

    Cont.findById(languageid)
        .exec((error, language) => {
            if (!language) {
                return response
                    .status(404)
                    .json({
                        "message": "languageid not found"
                    });
            } else if (error) {
                return response
                    .status(400)
                    .json(error);
            }
            language.nom= request.body.nom;
            language.description= request.body.description;
            language.score = request.body.score;
            language.save((error, language) => {
                if (error) {
                    response
                        .status(404)
                        .json(error);
                } else {
                    response
                        .status(200)
                        .json(language);
                }
            });
        });
}

const deleteLanguage = (request, response) => {
    const { languageid } = request.params;
    if (languageid) {
        Cont
            .findByIdAndRemove(languageid)
            .exec((error, language) => {
                if (error) {
                    return response
                        .status(404)
                        .json(error);
                }
                response
                    .status(204)
                    .json(null);
            }
            );
    } else {
        response
            .status(404)
            .json(
                {
                    "message": "No language"
                });
    }
}

const readLanguage = (request, response) => {
    const languageid = request.params.languageid;
    Cont
        .findById(languageid)
        .exec((err, language) => {
            if (!language) {
                return response
                    .status(404)
                    .json({
                        "message": "language not found"
                    });
            } else if (err) {
                return response
                    .status(404)
                    .json(err);
            }
            response
                .status(200)
                .json(language);

        });
}
module.exports = {
    getLanguage,
    createLanguage,
    updateLanguage,
    deleteLanguage,
    readLanguage
}
