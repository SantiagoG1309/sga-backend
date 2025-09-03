const Case = require('../models/Case');

class CaseService {
  async getAllCases() {
    try {
      const cases = await Case.find().populate('assignedLawyer');
      return cases;
    } catch (error) {
      throw new Error('Error al obtener casos: ' + error.message);
    }
  }

  async createCase(caseData) {
    try {
      const newCase = new Case(caseData);
      await newCase.save();
      return newCase;
    } catch (error) {
      throw new Error('Error al crear caso: ' + error.message);
    }
  }

  async getCaseById(id) {
    try {
      const case_ = await Case.findById(id).populate('assignedLawyer');
      if (!case_) {
        throw new Error('Caso no encontrado');
      }
      return case_;
    } catch (error) {
      throw new Error('Error al obtener caso: ' + error.message);
    }
  }
}

module.exports = new CaseService();
