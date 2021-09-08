const tranzact = require('../../util/tranzact');

describe('tranzact', () => {
  it('converts number toto to tranzact', () => {
    const result = tranzact.toto_to_tranzact(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string toto to tranzact', () => {
    const result = tranzact.toto_to_tranzact('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number toto to tranzact string', () => {
    const result = tranzact.toto_to_tranzact_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string toto to tranzact string', () => {
    const result = tranzact.toto_to_tranzact_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number tranzact to toto', () => {
    const result = tranzact.tranzact_to_toto(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string tranzact to toto', () => {
    const result = tranzact.tranzact_to_toto('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number toto to colouredcoin', () => {
    const result = tranzact.toto_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string toto to colouredcoin', () => {
    const result = tranzact.toto_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number toto to colouredcoin string', () => {
    const result = tranzact.toto_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string toto to colouredcoin string', () => {
    const result = tranzact.toto_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to toto', () => {
    const result = tranzact.colouredcoin_to_toto(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to toto', () => {
    const result = tranzact.colouredcoin_to_toto('1000');

    expect(result).toBe(1000000);
  });
});
