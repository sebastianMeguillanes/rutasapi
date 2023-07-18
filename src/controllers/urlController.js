const urlService = require("../services/urlService ");

const getAllUrls = (req, res) => {
    const allUrls = urlService.getAllUrls();
};

const getOneUrl = (req, res) => {
    const oneUrl = urlService.getOneUrl();
};

const createNewUrl = (req, res ) => {
    const newUrl = urlService.createNewUrl();
};

const updateOneUrl = (req, res) => {
    const editUrl = urlService.editUrl();
};

const deleteOneUrl = (req, res) => {
    urlService.deleteOneUrl(req.params.urlId);
};

module.exports = {
    getAllUrls,
    getOneUrl,
    createNewUrl,
    updateOneUrl,
    deleteOneUrl,
};
