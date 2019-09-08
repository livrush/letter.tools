import { expect } from 'chai';
import faker from 'faker';
import instructions from '../lib/instructions';
import {
  readVariables,
  replaceVariables,
} from '../lib/readVariables';

describe('readVariables', function () {
  it('should return one value', function () {
    const variables = readVariables('Hello {{value}}');
    const result = [ 'value' ];
    expect(variables).to.deep.equal(result);
  });

  it('should return values from instructions', function () {
    const variables = readVariables(instructions);
    const result = [ 'salutation', 'variable', 'regards' ];
    expect(variables).to.deep.equal(result);
  });
});

describe('replaceVariables', function () {
  it('should replace one value', function () {
    const string = 'We don\'t talk {{place}}'
    const variables = { place: 'together' };
    const result = replaceVariables(string, variables);
    expect(result).to.equal('we don\'t talk together');
  });

  it('should replace one value regardless of whitespace', function () {
    const string = 'We don\'t talk {{ place }}'
    const variables = { place: 'together' };
    const result = replaceVariables(string, variables);
    expect(result).to.equal('we don\'t talk together');
  });

  it('should replace multiple values', function () {
    const name = faker.name.findName();
    const string = '{{salutation}} How are you doing {{name}}?'
    const variables = { salutation: 'Greetings!', name };
    const result = replaceVariables(string, variables);
    expect(result).to.equal(`Greetings! How are you doing ${name}?`);
  });

  it('should replace values multiple times', function () {
    const string = 'I love {{person}} and {{person}} love me'
    const variables = { person: 'you' };
    const result = replaceVariables(string, variables);
    expect(result).to.equal('I love you and you love me');
  });

  it('should replace values multiple times regardless of whitespace', function () {
    const string = 'I love {{ person}} and {{person }} love me'
    const variables = { person: 'you' };
    const result = replaceVariables(string, variables);
    expect(result).to.equal('I love you and you love me');
  });
});
