const tranzact = require('../../util/tranzact');

describe('tranzact', () => {
  it('converts number mojo to tranzact', () => {
    const result = tranzact.mojo_to_tranzact(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string mojo to tranzact', () => {
    const result = tranzact.mojo_to_tranzact('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number mojo to tranzact string', () => {
    const result = tranzact.mojo_to_tranzact_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string mojo to tranzact string', () => {
    const result = tranzact.mojo_to_tranzact_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number tranzact to mojo', () => {
    const result = tranzact.tranzact_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string tranzact to mojo', () => {
    const result = tranzact.tranzact_to_mojo('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number mojo to colouredcoin', () => {
    const result = tranzact.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string mojo to colouredcoin', () => {
    const result = tranzact.mojo_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number mojo to colouredcoin string', () => {
    const result = tranzact.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string mojo to colouredcoin string', () => {
    const result = tranzact.mojo_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to mojo', () => {
    const result = tranzact.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to mojo', () => {
    const result = tranzact.colouredcoin_to_mojo('1000');

    expect(result).toBe(1000000);
  });
});
