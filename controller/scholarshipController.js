const ScholarShip = require('../models/scholarship');

module.exports.fetch = async (req, res) => {
  const allScholarShips = await ScholarShip.find({});
  res.send(allScholarShips);
};

module.exports.create = async (req, res) => {
  const newScholarShip = await ScholarShip.create({ ...req.body });
  res.send(newScholarShip);
};

module.exports.delete = async (req, res) => {
  const { id } = req.params;
  const deleteScholarShip = await ScholarShip.findByIdAndDelete({ _id: id });
  res.send(deleteScholarShip);
};

module.exports.update = async (req, res) => {
  const { id } = req.params;
  const updateScholarShip = await ScholarShip.findByIdAndUpdate({ ...req.body });
  req.send(updateScholarShip);
};
