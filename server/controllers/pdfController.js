const { Comics } = require('../models/models');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const ApiError = require('../error/ApiError');

class PdfController {
  async create(req, res) {
    return res.json(true);  
  }
}

module.exports = new PdfController();
