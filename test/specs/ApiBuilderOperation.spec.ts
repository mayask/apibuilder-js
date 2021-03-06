import { ApiBuilderService } from '../../src';
import apidocApi from '../fixtures/apidocApi';

describe('ApiBuilderOperation', () => {
  describe('#getResponseTypeByCode', () => {
    test('returns type matching response code', () => {
      const service = new ApiBuilderService(apidocApi);
      const resource = service.resources
        .find(resource => resource.typeName === 'application');
      const operation = resource?.operations
        .find(operation => operation.path === '/:orgKey' && operation.method === 'GET');
      const type = operation?.getResponseTypeByCode(200);
      expect(type?.toString()).toEqual('[com.bryzek.apidoc.api.v0.models.application]');
    });
  });
});
