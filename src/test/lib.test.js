import { expect } from 'chai';
import faker from 'faker';
import {
  instructions,
  readVariables,
  replaceVariables,
} from '../lib';

describe('readVariables', function () {
  it('should return one value', function () {
    const value = faker.random.word();
    const variables = readVariables(`Hello {{${value}}}`);
    const result = [ value ];
    expect(variables).to.deep.equal(result);
  });

  it('should return one value trimmed', function () {
    const value = faker.random.word();
    const variables1 = readVariables(`Hello {{ ${value}}}`);
    const variables2 = readVariables(`Hello {{${value} }}`);
    const variables3 = readVariables(`Hello {{ ${value} }}`);
    const result = [ value ];
    expect(variables1).to.deep.equal(result);
    expect(variables2).to.deep.equal(result);
    expect(variables3).to.deep.equal(result);
  });

  it('should return all values from instructions', function () {
    const variables = readVariables(instructions);
    const result = [ 'salutation', 'variable', 'regards' ];
    expect(variables).to.deep.equal(result);
  });
});

describe('replaceVariables', function () {
  it('should replace one value', function () {
    const string = 'We don\'t {{verb}} together'
    const verb = faker.hacker.verb();
    const variables = { verb };
    const result = replaceVariables(string, variables);
    expect(result).to.equal(`We don't ${verb} together`);
  });

  it('should replace one value regardless of whitespace', function () {
    const string = 'We don\'t {{ verb }} together'
    const verb = faker.hacker.verb();
    const variables = { verb };
    const result = replaceVariables(string, variables);
    expect(result).to.equal(`We don't ${verb} together`);
  });

  it('should replace multiple values', function () {
    const string = '{{salutation}} How are you doing {{name}}?'
    const name = faker.name.findName();
    const variables = { salutation: 'Greetings!', name };
    const result = replaceVariables(string, variables);
    expect(result).to.equal(`Greetings! How are you doing ${name}?`);
  });

  it('should replace values multiple times', function () {
    const string = 'I {{verb}} you and you {{verb}} me';
    const verb = faker.hacker.verb();
    const variables = { verb };
    const result = replaceVariables(string, variables);
    expect(result).to.equal(`I ${verb} you and you ${verb} me`);
  });

  it('should replace values multiple times regardless of whitespace', function () {
    const string = 'I {{  verb }} you and you {{verb }} me';
    const verb = faker.hacker.verb();
    const variables = { verb };
    const result = replaceVariables(string, variables);
    expect(result).to.equal(`I ${verb} you and you ${verb} me`);
  });
});
