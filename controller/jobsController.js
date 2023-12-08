const Job = require('../models/jobs');

module.exports.fetch = async (req, res) => {
  const allJobs = await Job.find({});
  res.send(allJobs);
};

module.exports.create = async (req, res) => {
  const newJob = await Job.create({ ...req.body });
  res.send(newJob);
};

module.exports.delete = async (req, res) => {
  const { id } = req.params;
  const deletedJob = await Job.findByIdAndDelete({ _id: id });
  res.send(deletedJob);
};

module.exports.update = async (req, res) => {
  const updatedJob = await Job.findByIdAndUpdate({ ...req.body });
  req.send(updatedJob);
};
