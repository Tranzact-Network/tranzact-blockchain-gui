const Big = require('big.js');
const units = require('./units');

// TODO: use bigint instead of float
const convert = (amount, from, to) => {
  if (Number.isNaN(Number.parseFloat(amount)) || !Number.isFinite(amount)) {
    return 0;
  }

  const amountInFromUnit = Big(amount).times(units.getUnit(from));

  return Number.parseFloat(amountInFromUnit.div(units.getUnit(to)));
};

class Tranzact {
  constructor(value, unit) {
    this._value = value;
    this._unit = unit;
  }

  to(newUnit) {
    this._value = convert(this._value, this._unit, newUnit);
    this._unit = newUnit;

    return this;
  }

  value() {
    return this._value;
  }

  format() {
    const displayUnit = units.getDisplay(this._unit);

    const { format, fractionDigits, trailing } = displayUnit;

    let options = { maximumFractionDigits: fractionDigits };

    if (trailing) {
      options = { minimumFractionDigits: fractionDigits };
    }

    let value;

    if (fractionDigits !== undefined) {
      const fractionPower = Big(10).pow(fractionDigits);
      value = Number.parseFloat(
        Big(Math.floor(Big(this._value).times(fractionPower))).div(
          fractionPower,
        ),
      );
    } else {
      value = this._value;
    }

    let formatted = format.replace(
      '{amount}',
      Number.parseFloat(value).toLocaleString(undefined, options),
    );

    if (displayUnit.pluralize && this._value !== 1) {
      formatted += 's';
    }

    return formatted;
  }

  toString() {
    const displayUnit = units.getDisplay(this._unit);
    const { fractionDigits } = displayUnit;
    const options = { maximumFractionDigits: fractionDigits };
    return Number.parseFloat(this._value).toLocaleString(undefined, options);
  }
}

export const tranzact_formatter = (value, unit) => new Tranzact(value, unit);

tranzact_formatter.convert = convert;
tranzact_formatter.setDisplay = units.setDisplay;
tranzact_formatter.setUnit = units.setUnit;
tranzact_formatter.getUnit = units.getUnit;
tranzact_formatter.setFiat = (currency, rate, display = null) => {
  units.setUnit(currency, 1 / rate, display);
};

export const toto_to_tranzact = (toto) => {
  return tranzact_formatter(Number.parseInt(toto), 'toto').to('tranzact').value();
};

export const tranzact_to_toto = (tranzact) => {
  return tranzact_formatter(Number.parseFloat(Number(tranzact)), 'tranzact')
    .to('toto')
    .value();
};

export const toto_to_tranzact_string = (toto) => {
  return tranzact_formatter(Number(toto), 'toto').to('tranzact').toString();
};

export const toto_to_colouredcoin = (toto) => {
  return tranzact_formatter(Number.parseInt(toto), 'toto')
    .to('colouredcoin')
    .value();
};

export const colouredcoin_to_toto = (colouredcoin) => {
  return tranzact_formatter(Number.parseFloat(Number(colouredcoin)), 'colouredcoin')
    .to('toto')
    .value();
};

export const toto_to_colouredcoin_string = (toto) => {
  return tranzact_formatter(Number(toto), 'toto').to('colouredcoin').toString();
};
