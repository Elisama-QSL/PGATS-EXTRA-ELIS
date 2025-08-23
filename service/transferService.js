const { users } = require('../model/userModel');
const { transfers } = require('../model/transferModel');

function transfer({ remetente, destinatario, valor }) {
  const userFrom = users.find(u => u.username === remetente);
  const userTo = users.find(u => u.username === destinatario);
  if (!userFrom || !userTo) throw new Error('Usuário remetente ou destinatário não encontrado');
  if (userFrom.saldo < valor) throw new Error('Saldo insuficiente');
  const isFavorecido = userFrom.favorecidos.includes(destinatario);
  if (!isFavorecido && valor >= 5000) throw new Error('Transferência acima de R$ 5.000,00 só pode ser feita para favorecidos');
  userFrom.saldo -= valor;
  userTo.saldo += valor;
  const transfer = { remetente, destinatario, valor, data: new Date() };
  transfers.push(transfer);
  return transfer;
}

function getTransfers() {
  return transfers;
}

module.exports = {
  transfer,
  getTransfers,
};
