const chartData = {
  receitaRecebida: [
    600, 700, 800, 900, 1000, 950, 850, 800, 750, 700, 650, 600,
  ],
  inadimplencia: [400, 500, 600, 700, 800, 750, 650, 600, 550, 500, 450, 400],
};

/////////////////////////////////////////////////////////////////

const notasEmitidasJaneiro = 1000;
const notasEmitidasComCobrancaJaneiro = 400;
const notasVencidasJaneiro = 400;
const notasAVencerJaneiro = 0;
const notasPagasJaneiro = 600;
//
const notasEmitidasFevereiro = 1200;
const notasEmitidasComCobrancaFevereiro = 500;
const notasVencidasFevereiro = 500;
const notasAVencerFevereiro = 0;
const notasPagasFevereiro = 700;
//
const notasEmitidasMarco = 1400;
const notasEmitidasComCobrancaMarco = 600;
const notasVencidasMarco = 600;
const notasAVencerMarco = 0;
const notasPagasMarco = 800;
//
const notasEmitidasAbril = 1600;
const notasEmitidasComCobrancaAbril = 700;
const notasVencidasAbril = 700;
const notasAVencerAbril = 0;
const notasPagasAbril = 900;
//
const notasEmitidasMaio = 1800;
const notasEmitidasComCobrancaMaio = 800;
const notasVencidasMaio = 800;
const notasAVencerMaio = 0;
const notasPagasMaio = 1000;
//
const notasEmitidasJunho = 1700;
const notasEmitidasComCobrancaJunho = 750;
const notasVencidasJunho = 750;
const notasAVencerJunho = 0;
const notasPagasJunho = 950;
//
const notasEmitidasJulho = 1500;
const notasEmitidasComCobrancaJulho = 650;
const notasVencidasJulho = 650;
const notasAVencerJulho = 0;
const notasPagasJulho = 850;
//
const notasEmitidasAgosto = 1400;
const notasEmitidasComCobrancaAgosto = 600;
const notasVencidasAgosto = 600;
const notasAVencerAgosto = 0;
const notasPagasAgosto = 800;
//
const notasEmitidasSetembro = 1300;
const notasEmitidasComCobrancaSetembro = 550;
const notasVencidasSetembro = 550;
const notasAVencerSetembro = 0;
const notasPagasSetembro = 750;
//
const notasEmitidasOutubro = 1200;
const notasEmitidasComCobrancaOutubro = 500;
const notasVencidasOutubro = 500;
const notasAVencerOutubro = 0;
const notasPagasOutubro = 700;
//
const notasEmitidasNovembro = 1100;
const notasEmitidasComCobrancaNovembro = 450;
const notasVencidasNovembro = 450;
const notasAVencerNovembro = 0;
const notasPagasNovembro = 650;
//
const notasEmitidasDezembro = 1020;
const notasEmitidasComCobrancaDezembro = 420;
const notasVencidasDezembro = 400;
const notasAVencerDezembro = 20;
const notasPagasDezembro = 600;

const valoresMeses = {
  Jan: {
    emitidas: notasEmitidasJaneiro,
    emitidasComCobranca: notasEmitidasComCobrancaJaneiro,
    vencidas: notasVencidasJaneiro,
    aVencer: notasAVencerJaneiro,
    pagas: notasPagasJaneiro,
  },
  Fev: {
    emitidas: notasEmitidasFevereiro,
    emitidasComCobranca: notasEmitidasComCobrancaFevereiro,
    vencidas: notasVencidasFevereiro,
    aVencer: notasAVencerFevereiro,
    pagas: notasPagasFevereiro,
  },
  Mar: {
    emitidas: notasEmitidasMarco,
    emitidasComCobranca: notasEmitidasComCobrancaMarco,
    vencidas: notasVencidasMarco,
    aVencer: notasAVencerMarco,
    pagas: notasPagasMarco,
  },
  Abr: {
    emitidas: notasEmitidasAbril,
    emitidasComCobranca: notasEmitidasComCobrancaAbril,
    vencidas: notasVencidasAbril,
    aVencer: notasAVencerAbril,
    pagas: notasPagasAbril,
  },
  Mai: {
    emitidas: notasEmitidasMaio,
    emitidasComCobranca: notasEmitidasComCobrancaMaio,
    vencidas: notasVencidasMaio,
    aVencer: notasAVencerMaio,
    pagas: notasPagasMaio,
  },
  Jun: {
    emitidas: notasEmitidasJunho,
    emitidasComCobranca: notasEmitidasComCobrancaJunho,
    vencidas: notasVencidasJunho,
    aVencer: notasAVencerJunho,
    pagas: notasPagasJunho,
  },
  Jul: {
    emitidas: notasEmitidasJulho,
    emitidasComCobranca: notasEmitidasComCobrancaJulho,
    vencidas: notasVencidasJulho,
    aVencer: notasAVencerJulho,
    pagas: notasPagasJulho,
  },
  Ago: {
    emitidas: notasEmitidasAgosto,
    emitidasComCobranca: notasEmitidasComCobrancaAgosto,
    vencidas: notasVencidasAgosto,
    aVencer: notasAVencerAgosto,
    pagas: notasPagasAgosto,
  },
  Set: {
    emitidas: notasEmitidasSetembro,
    emitidasComCobranca: notasEmitidasComCobrancaSetembro,
    vencidas: notasVencidasSetembro,
    aVencer: notasAVencerSetembro,
    pagas: notasPagasSetembro,
  },
  Out: {
    emitidas: notasEmitidasOutubro,
    emitidasComCobranca: notasEmitidasComCobrancaOutubro,
    vencidas: notasVencidasOutubro,
    aVencer: notasAVencerOutubro,
    pagas: notasPagasOutubro,
  },
  Nov: {
    emitidas: notasEmitidasNovembro,
    emitidasComCobranca: notasEmitidasComCobrancaNovembro,
    vencidas: notasVencidasNovembro,
    aVencer: notasAVencerNovembro,
    pagas: notasPagasNovembro,
  },
  Dez: {
    emitidas: notasEmitidasDezembro,
    emitidasComCobranca: notasEmitidasComCobrancaDezembro,
    vencidas: notasVencidasDezembro,
    aVencer: notasAVencerDezembro,
    pagas: notasPagasDezembro,
  },
};

/////////////////////////////////////////////////////////////////

const ValoresTrimestre = {
  primeiroTrimestre: {
    emitidas:
      notasEmitidasJaneiro + notasEmitidasFevereiro + notasEmitidasMarco,
    emitidasComCobranca:
      notasEmitidasComCobrancaJaneiro +
      notasEmitidasComCobrancaFevereiro +
      notasEmitidasComCobrancaMarco,
    vencidas: notasVencidasJaneiro + notasVencidasFevereiro + notasVencidasMarco,
    aVencer: notasAVencerJaneiro + notasAVencerFevereiro + notasAVencerMarco,
    pagas: notasPagasJaneiro + notasPagasFevereiro + notasPagasMarco,
  },
  segundoTrimestre: {
    emitidas: notasEmitidasAbril + notasEmitidasMaio + notasEmitidasJunho,
    emitidasComCobranca:
      notasEmitidasComCobrancaAbril +
      notasEmitidasComCobrancaMaio +
      notasEmitidasComCobrancaJunho,
    vencidas: notasVencidasAbril + notasVencidasMaio + notasVencidasJunho,
    aVencer: notasAVencerAbril + notasAVencerMaio + notasAVencerJunho,
    pagas: notasPagasAbril + notasPagasMaio + notasPagasJunho,
  },
  terceiroTrimestre: {
    emitidas: notasEmitidasJulho + notasEmitidasAgosto + notasEmitidasSetembro,
    emitidasComCobranca:
      notasEmitidasComCobrancaJulho +
      notasEmitidasComCobrancaAgosto +
      notasEmitidasComCobrancaSetembro,
    vencidas: notasVencidasJulho + notasVencidasAgosto + notasVencidasSetembro,
    aVencer: notasAVencerJulho + notasAVencerAgosto + notasAVencerSetembro,
    pagas: notasPagasJulho + notasPagasAgosto + notasPagasSetembro,
  },
  quartoTrimestre: {
    emitidas:
      notasEmitidasOutubro + notasEmitidasNovembro + notasEmitidasDezembro,
    emitidasComCobranca:
      notasEmitidasComCobrancaOutubro +
      notasEmitidasComCobrancaNovembro +
      notasEmitidasComCobrancaDezembro,
    vencidas:
      notasVencidasOutubro + notasVencidasNovembro + notasVencidasDezembro,
    aVencer: notasAVencerOutubro + notasAVencerNovembro + notasAVencerDezembro,
    pagas: notasPagasOutubro + notasPagasNovembro + notasPagasDezembro,
  },
};
