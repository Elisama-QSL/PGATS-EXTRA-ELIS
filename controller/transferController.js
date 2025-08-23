const transferService = require('../service/transferService');

exports.transfer = (req, res) => {
  try {
    const { remetente, destinatario, valor } = req.body;
    if (!remetente || !destinatario || typeof valor !== 'number') {
      return res.status(400).json({ error: 'Remetente, destinatário e valor são obrigatórios' });
    }
    const transfer = transferService.transfer({ remetente, destinatario, valor });
    res.status(201).json(transfer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getTransfers = (req, res) => {
  res.json(transferService.getTransfers());
};
