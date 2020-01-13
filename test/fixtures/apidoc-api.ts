const service: any = {
  apidoc: {
    version: '0.12.8',
  },
  name: 'apidoc api',
  organization: {
    key: 'bryzek',
  },
  application: {
    key: 'apidoc-api',
  },
  namespace: 'com.bryzek.apidoc.api.v0',
  version: '0.11.94',
  info: {
    license: {
      name: 'MIT',
      url: 'http://opensource.org/licenses/MIT',
    },
    contact: {
      name: 'Michael Bryzek',
      url: 'http://twitter.com/mbryzek',
      email: 'mbryzek@alum.mit.edu',
    },
  },
  headers: [],
  imports: [
    {
      uri: 'http://www.apidoc.me/bryzek/apidoc-common/latest/service.json',
      namespace: 'com.bryzek.apidoc.common.v0',
      organization: {
        key: 'bryzek',
      },
      application: {
        key: 'apidoc-common',
      },
      version: '0.11.94',
      enums: [],
      unions: [],
      models: [
        'audit',
        'healthcheck',
        'reference',
        'reference_guid',
      ],
      annotations: [],
    },
    {
      uri: 'http://www.apidoc.me/bryzek/apidoc-generator/latest/service.json',
      namespace: 'com.bryzek.apidoc.generator.v0',
      organization: {
        key: 'bryzek',
      },
      application: {
        key: 'apidoc-generator',
      },
      version: '0.11.68',
      enums: [],
      unions: [],
      models: [
        'attribute',
        'error',
        'file',
        'generator',
        'healthcheck',
        'invocation',
        'invocation_form',
      ],
      annotations: [],
    },
    {
      uri: 'http://www.apidoc.me/bryzek/apidoc-spec/latest/service.json',
      namespace: 'com.bryzek.apidoc.spec.v0',
      organization: {
        key: 'bryzek',
      },
      application: {
        key: 'apidoc-spec',
      },
      version: '0.11.94',
      enums: [
        'method',
        'parameter_location',
        'response_code_option',
      ],
      unions: [
        'response_code',
      ],
      models: [
        'apidoc',
        'application',
        'attribute',
        'body',
        'contact',
        'deprecation',
        'enum',
        'enum_value',
        'field',
        'header',
        'import',
        'info',
        'license',
        'model',
        'operation',
        'organization',
        'parameter',
        'resource',
        'response',
        'service',
        'union',
        'union_type',
      ],
      annotations: [],
    },
  ],
  enums: [
    {
      name: 'original_type',
      plural: 'original_types',
      values: [
        {
          name: 'api_json',
          attributes: [],
          description: 'The original is in the api.json format',
        },
        {
          name: 'avro_idl',
          attributes: [],
          description: 'The original is in Avro Idl format',
        },
        {
          name: 'service_json',
          attributes: [],
          description: 'This is the canonical service spec for apidoc itself. See http://apidoc.me/bryzek/apidoc-spec/latest#model-service',
        },
        {
          name: 'swagger',
          attributes: [],
          description: 'The original in the Swagger JSON or YAML format',
        },
      ],
      attributes: [],
    },
    {
      name: 'publication',
      plural: 'publications',
      values: [
        {
          name: 'membership_requests.create',
          attributes: [],
          description: 'For organizations for which I am an administrator, email me whenever a user applies to join the org.',
        },
        {
          name: 'memberships.create',
          attributes: [],
          description: 'For organizations for which I am a member, email me whenever a user joins the org.',
        },
        {
          name: 'applications.create',
          attributes: [],
          description: 'For organizations for which I am a member, email me whenever an application is created.',
        },
        {
          name: 'versions.create',
          attributes: [],
          description: 'For applications that I watch, email me whenever a version is created.',
        },
      ],
      attributes: [],
      description: 'A publication represents something that a user can subscribe to. An example would be subscribing to an email alert whenever a new version of an application is created.',
    },
    {
      name: 'visibility',
      plural: 'visibilities',
      values: [
        {
          name: 'user',
          attributes: [],
          description: 'Only the creator can view this application',
        },
        {
          name: 'organization',
          attributes: [],
          description: 'Any member of the organization can view this application',
        },
        {
          name: 'public',
          attributes: [],
          description: 'Anybody, including non logged in users, can view this application',
        },
      ],
      attributes: [],
      description: 'Controls who is able to view this version',
    },
  ],
  unions: [
    {
      name: 'diff',
      plural: 'diffs',
      types: [
        {
          type: 'diff_breaking',
          attributes: [],
        },
        {
          type: 'diff_non_breaking',
          attributes: [],
        },
      ],
      attributes: [],
      discriminator: 'type',
      description: 'Represents a single diff in an application',
    },
    {
      name: 'item_detail',
      plural: 'item_details',
      types: [
        {
          type: 'application_summary',
          attributes: [],
          description: 'Represents that the item indexed was an application',
        },
      ],
      attributes: [],
      discriminator: 'type',
      description: 'Identifies the specific type of item that was indexed by search',
    },
  ],
  models: [
    {
      name: 'application',
      plural: 'applications',
      fields: [
        {
          name: 'guid',
          type: 'uuid',
          required: true,
          attributes: [],
          annotations: [],
          description: 'Internal unique identifier for this application.',
        },
        {
          name: 'organization',
          type: 'com.bryzek.apidoc.common.v0.models.reference',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'name',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
          description: 'The unique name for this application.',
        },
        {
          name: 'key',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
          description: 'Used as a unique key in the URL path. Key is automatically derived from the application name.',
        },
        {
          name: 'visibility',
          type: 'visibility',
          required: true,
          attributes: [],
          annotations: [],
          description: 'Controls who is able to view this application',
        },
        {
          name: 'description',
          type: 'string',
          required: false,
          attributes: [],
          annotations: [],
        },
        {
          name: 'audit',
          type: 'com.bryzek.apidoc.common.v0.models.audit',
          required: true,
          attributes: [],
          annotations: [],
        },
      ],
      attributes: [],
      description: 'An application has a name and multiple versions of its API.',
    },
    {
      name: 'application_form',
      plural: 'application_forms',
      fields: [
        {
          name: 'name',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'key',
          type: 'string',
          required: false,
          attributes: [],
          annotations: [],
          description: 'Defaults to a key generated from the application name',
        },
        {
          name: 'description',
          type: 'string',
          required: false,
          attributes: [],
          annotations: [],
        },
        {
          name: 'visibility',
          type: 'visibility',
          required: true,
          attributes: [],
          annotations: [],
        },
      ],
      attributes: [],
    },
    {
      name: 'application_summary',
      plural: 'application_summaries',
      fields: [
        {
          name: 'guid',
          type: 'uuid',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'organization',
          type: 'com.bryzek.apidoc.common.v0.models.reference',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'key',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
        },
      ],
      attributes: [],
      description: 'Summary of an application sufficient for display and links',
    },
    {
      name: 'attribute',
      plural: 'attributes',
      fields: [
        {
          name: 'guid',
          type: 'uuid',
          required: true,
          attributes: [],
          annotations: [],
          description: 'Internal unique identifier for this attribute.',
        },
        {
          name: 'name',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
          description: "The name of the attribute. Globally unique and an 'identifier' (lower case, url safe, etc.)",
        },
        {
          name: 'description',
          type: 'string',
          required: false,
          attributes: [],
          annotations: [],
          description: 'Optional description - a good description here will indicate which code generators it applies to and what effect it will have on those code generators.',
        },
        {
          name: 'audit',
          type: 'com.bryzek.apidoc.common.v0.models.audit',
          required: true,
          attributes: [],
          annotations: [],
        },
      ],
      attributes: [],
      description: 'Attributes are globally unique key which allow users to specify additional content to pass in to the code generators.',
    },
    {
      name: 'attribute_form',
      plural: 'attribute_forms',
      fields: [
        {
          name: 'name',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'description',
          type: 'string',
          required: false,
          attributes: [],
          annotations: [],
        },
      ],
      attributes: [],
    },
    {
      name: 'attribute_summary',
      plural: 'attribute_summaries',
      fields: [
        {
          name: 'guid',
          type: 'uuid',
          required: true,
          attributes: [],
          annotations: [],
          description: 'Internal unique identifier for this attribute.',
        },
        {
          name: 'name',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
          description: "The name of the attribute. Globally unique and an 'identifier' (lower case, url safe, etc.)",
        },
      ],
      attributes: [],
    },
    {
      name: 'attribute_value',
      plural: 'attribute_values',
      fields: [
        {
          name: 'guid',
          type: 'uuid',
          required: true,
          attributes: [],
          annotations: [],
          description: 'Internal unique identifier for this attribute value.',
        },
        {
          name: 'attribute',
          type: 'attribute_summary',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'value',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'audit',
          type: 'com.bryzek.apidoc.common.v0.models.audit',
          required: true,
          attributes: [],
          annotations: [],
        },
      ],
      attributes: [],
      description: 'Attribute values can be set at different levels. Initially we support setting organization wide attributes, but in the future plan to support setting attribute values with each version of the application.',
    },
    {
      name: 'attribute_value_form',
      plural: 'attribute_value_forms',
      fields: [
        {
          name: 'value',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
        },
      ],
      attributes: [],
    },
    {
      name: 'authentication',
      plural: 'authentications',
      fields: [
        {
          name: 'user',
          type: 'user',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'session',
          type: 'session',
          required: true,
          attributes: [],
          annotations: [],
        },
      ],
      attributes: [],
      description: 'Represents the result of a successful authorization',
    },
    {
      name: 'change',
      plural: 'changes',
      fields: [
        {
          name: 'guid',
          type: 'uuid',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'organization',
          type: 'com.bryzek.apidoc.common.v0.models.reference',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'application',
          type: 'com.bryzek.apidoc.common.v0.models.reference',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'from_version',
          type: 'change_version',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'to_version',
          type: 'change_version',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'diff',
          type: 'diff',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'changed_at',
          type: 'date-time-iso8601',
          required: true,
          attributes: [],
          annotations: [],
          description: 'Records the timestamp of when the actual change occurred (vs. when we created the changed record)',
        },
        {
          name: 'changed_by',
          type: 'user_summary',
          required: true,
          attributes: [],
          annotations: [],
          description: 'Records who made the actual change',
        },
        {
          name: 'audit',
          type: 'com.bryzek.apidoc.common.v0.models.audit',
          required: true,
          attributes: [],
          annotations: [],
        },
      ],
      attributes: [],
      description: 'Represents a single change from one version of a service to another',
    },
    {
      name: 'change_version',
      plural: 'change_versions',
      fields: [
        {
          name: 'guid',
          type: 'uuid',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'version',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
        },
      ],
      attributes: [],
      description: 'Represents a simpler model of a version specifically for the use case of displaying changes',
    },
    {
      name: 'cleartext_token',
      plural: 'cleartext_tokens',
      fields: [
        {
          name: 'token',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
          description: 'The actual token. Guaranteed to be globally unique.',
        },
      ],
      attributes: [],
      description: 'Separate resource used only for the few actions that require the full token.',
    },
    {
      name: 'code',
      plural: 'code',
      fields: [
        {
          name: 'generator',
          type: 'generator_with_service',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'source',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
          description: 'The actual source code.',
          deprecation: {
            description: 'Use files instead',
          },
        },
        {
          name: 'files',
          type: '[com.bryzek.apidoc.generator.v0.models.file]',
          required: true,
          attributes: [],
          annotations: [],
          description: 'A collection of source files',
          default: '[]',
        },
      ],
      attributes: [],
      description: 'Generated source code.',
    },
    {
      name: 'diff_breaking',
      plural: 'diff_breakings',
      fields: [
        {
          name: 'description',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
          example: 'model removed: user',
        },
      ],
      attributes: [],
      description: 'Represents a single breaking diff of an application version. A breaking diff indicates that it is possible for an existing client to now experience an error or invalid data due to the diff.',
    },
    {
      name: 'diff_non_breaking',
      plural: 'diff_non_breakings',
      fields: [
        {
          name: 'description',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
          example: 'name diffd from foo to bar',
        },
      ],
      attributes: [],
      description: 'Represents a single NON breaking diff of an application version.',
    },
    {
      name: 'domain',
      plural: 'domains',
      fields: [
        {
          name: 'name',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
          description: 'The domain name',
          example: 'www.apidoc.me',
        },
      ],
      attributes: [],
      description: 'Represents a single domain name (e.g. www.apidoc.me). When a new user registers and confirms their email, we automatically associate that user with a member of the organization associated with their domain. For example, if you confirm your account with an email address of foo@bryzek.com, we will automatically create a membership request on your behalf to join the organization with domain bryzek.com.',
    },
    {
      name: 'email_verification_confirmation_form',
      plural: 'email_verification_confirmation_forms',
      fields: [
        {
          name: 'token',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
        },
      ],
      attributes: [],
      description: 'Data used to confirm an email address. The token is an internal unique identifier used to lookup the specific email address and user account for which we sent an email verification email.',
    },
    {
      name: 'error',
      plural: 'errors',
      fields: [
        {
          name: 'code',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
          description: 'Machine readable code for this specific error message',
        },
        {
          name: 'message',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
          description: 'Description of the error',
        },
      ],
      attributes: [],
    },
    {
      name: 'generator_form',
      plural: 'generator_forms',
      fields: [
        {
          name: 'service_guid',
          type: 'uuid',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'generator',
          type: 'com.bryzek.apidoc.generator.v0.models.generator',
          required: true,
          attributes: [],
          annotations: [],
        },
      ],
      attributes: [],
    },
    {
      name: 'generator_service',
      plural: 'generator_services',
      fields: [
        {
          name: 'guid',
          type: 'uuid',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'uri',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'audit',
          type: 'com.bryzek.apidoc.common.v0.models.audit',
          required: true,
          attributes: [],
          annotations: [],
        },
      ],
      attributes: [],
      description: 'Defines a service that provides one or more code generators',
    },
    {
      name: 'generator_service_form',
      plural: 'generator_service_forms',
      fields: [
        {
          name: 'uri',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
        },
      ],
      attributes: [],
    },
    {
      name: 'generator_with_service',
      plural: 'generator_with_services',
      fields: [
        {
          name: 'service',
          type: 'generator_service',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'generator',
          type: 'com.bryzek.apidoc.generator.v0.models.generator',
          required: true,
          attributes: [],
          annotations: [],
        },
      ],
      attributes: [],
      description: 'Wraps a service and a generator providing easier access for applications.',
    },
    {
      name: 'item',
      plural: 'items',
      fields: [
        {
          name: 'guid',
          type: 'uuid',
          required: true,
          attributes: [],
          annotations: [],
          description: 'Unique identifer for this item. By using a UUID, you can combine with the type to figure out the URI for the resource',
        },
        {
          name: 'detail',
          type: 'item_detail',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'label',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'description',
          type: 'string',
          required: false,
          attributes: [],
          annotations: [],
        },
      ],
      attributes: [],
      description: 'When searching for content, the results of the search will be a list of items. Each item will have enough information to render for the user, including a type and item_guid to enable creating the appropriate link.',
    },
    {
      name: 'membership',
      plural: 'memberships',
      fields: [
        {
          name: 'guid',
          type: 'uuid',
          required: true,
          attributes: [],
          annotations: [],
          description: 'Internal unique identifier for this membership.',
        },
        {
          name: 'user',
          type: 'user',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'organization',
          type: 'organization',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'role',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
          description: 'The role this user plays for this organization. Typically member or admin.',
          example: 'member',
        },
        {
          name: 'audit',
          type: 'com.bryzek.apidoc.common.v0.models.audit',
          required: true,
          attributes: [],
          annotations: [],
        },
      ],
      attributes: [],
      description: 'A membership represents a user in a specific role to an organization. Memberships cannot be created directly. Instead you first create a membership request, then that request is either accepted or declined.',
    },
    {
      name: 'membership_request',
      plural: 'membership_requests',
      fields: [
        {
          name: 'guid',
          type: 'uuid',
          required: true,
          attributes: [],
          annotations: [],
          description: 'Internal unique identifier for this membership request.',
        },
        {
          name: 'user',
          type: 'user',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'organization',
          type: 'organization',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'role',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
          description: 'The requested role for membership to this organization. Typically member or admin.',
          example: 'member',
        },
        {
          name: 'audit',
          type: 'com.bryzek.apidoc.common.v0.models.audit',
          required: true,
          attributes: [],
          annotations: [],
        },
      ],
      attributes: [],
      description: 'A membership request represents a user requesting to join an organization with a specific role (e.g. as a member or an admin). Membership requests can be reviewed by any current admin of the organization who can either accept or decline the request.',
    },
    {
      name: 'move_form',
      plural: 'move_forms',
      fields: [
        {
          name: 'org_key',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
          description: 'The key of the organization to which we are moving this item',
        },
      ],
      attributes: [],
    },
    {
      name: 'organization',
      plural: 'organizations',
      fields: [
        {
          name: 'guid',
          type: 'uuid',
          required: true,
          attributes: [],
          annotations: [],
          description: 'Internal unique identifier for this organization.',
        },
        {
          name: 'key',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
          description: 'Used as a unique key in the URL path. Key is automatically derived from the organization name.',
        },
        {
          name: 'name',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
          description: 'The name of this organization.',
        },
        {
          name: 'namespace',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
          description: 'Global namespace for this organization.',
          example: 'com.bryzek',
        },
        {
          name: 'visibility',
          type: 'visibility',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'domains',
          type: '[domain]',
          required: true,
          attributes: [],
          annotations: [],
          default: '[]',
        },
        {
          name: 'audit',
          type: 'com.bryzek.apidoc.common.v0.models.audit',
          required: true,
          attributes: [],
          annotations: [],
        },
      ],
      attributes: [],
      description: 'An organization is used to group a set of applications together.',
    },
    {
      name: 'organization_form',
      plural: 'organization_forms',
      fields: [
        {
          name: 'name',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'key',
          type: 'string',
          required: false,
          attributes: [],
          annotations: [],
          description: 'Defaults to a url friendy version of the name',
        },
        {
          name: 'namespace',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
          description: 'Global namespace for this organization.',
          example: 'com.bryzek',
        },
        {
          name: 'visibility',
          type: 'visibility',
          required: true,
          attributes: [],
          annotations: [],
          description: 'Public organizations will be listed in apidoc directory. Organizations with visibility organization will only be visible to members of that org.',
          default: 'organization',
        },
        {
          name: 'domains',
          type: '[string]',
          required: false,
          attributes: [],
          annotations: [],
          example: 'apidoc.me',
        },
      ],
      attributes: [],
    },
    {
      name: 'original',
      plural: 'originals',
      fields: [
        {
          name: 'type',
          type: 'original_type',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'data',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
        },
      ],
      attributes: [],
      description: 'Represents the original input used to create an application version',
    },
    {
      name: 'original_form',
      plural: 'original_forms',
      fields: [
        {
          name: 'type',
          type: 'original_type',
          required: false,
          attributes: [],
          annotations: [],
          description: 'If not specified, we set the type by inspecting the data',
        },
        {
          name: 'data',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
        },
      ],
      attributes: [],
    },
    {
      name: 'password_reset',
      plural: 'password_resets',
      fields: [
        {
          name: 'token',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
          description: 'Unique one time use token to change a password',
        },
        {
          name: 'password',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
        },
      ],
      attributes: [],
      description: 'Allows a user to change their password with authentication from a token.',
    },
    {
      name: 'password_reset_request',
      plural: 'password_reset_requests',
      fields: [
        {
          name: 'email',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
          description: 'The email address for which we generate the password reset.',
        },
      ],
      attributes: [],
      description: 'Create a password reset request - e.g. an email containing a one time URL to change a password',
    },
    {
      name: 'session',
      plural: 'sessions',
      fields: [
        {
          name: 'id',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
          description: 'Cryptographically secure session id',
        },
        {
          name: 'expires_at',
          type: 'date-time-iso8601',
          required: true,
          attributes: [],
          annotations: [],
        },
      ],
      attributes: [],
      description: 'Represents a user sessions (e.g. user logged into site)',
    },
    {
      name: 'subscription',
      plural: 'subscriptions',
      fields: [
        {
          name: 'guid',
          type: 'uuid',
          required: true,
          attributes: [],
          annotations: [],
          description: 'Internal unique identifier for this subscription record',
        },
        {
          name: 'organization',
          type: 'organization',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'user',
          type: 'user',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'publication',
          type: 'publication',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'audit',
          type: 'com.bryzek.apidoc.common.v0.models.audit',
          required: true,
          attributes: [],
          annotations: [],
        },
      ],
      attributes: [],
      description: 'Represents a user that is currently subscribed to a publication',
    },
    {
      name: 'subscription_form',
      plural: 'subscription_forms',
      fields: [
        {
          name: 'organization_key',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'user_guid',
          type: 'uuid',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'publication',
          type: 'publication',
          required: true,
          attributes: [],
          annotations: [],
        },
      ],
      attributes: [],
    },
    {
      name: 'token',
      plural: 'tokens',
      fields: [
        {
          name: 'guid',
          type: 'uuid',
          required: true,
          attributes: [],
          annotations: [],
          description: 'Internal unique identifier for this token.',
        },
        {
          name: 'user',
          type: 'user',
          required: true,
          attributes: [],
          annotations: [],
          description: 'The user to which this token belongs.',
        },
        {
          name: 'masked_token',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
          description: 'The masked from of the token.',
        },
        {
          name: 'description',
          type: 'string',
          required: false,
          attributes: [],
          annotations: [],
          description: 'optional description to help the user manage the token.',
        },
        {
          name: 'audit',
          type: 'com.bryzek.apidoc.common.v0.models.audit',
          required: true,
          attributes: [],
          annotations: [],
        },
      ],
      attributes: [],
      description: 'A token gives a user access to the API.',
    },
    {
      name: 'token_form',
      plural: 'token_forms',
      fields: [
        {
          name: 'user_guid',
          type: 'uuid',
          required: true,
          attributes: [],
          annotations: [],
          description: 'The user for which we are creating the token.',
        },
        {
          name: 'description',
          type: 'string',
          required: false,
          attributes: [],
          annotations: [],
        },
      ],
      attributes: [],
    },
    {
      name: 'user',
      plural: 'users',
      fields: [
        {
          name: 'guid',
          type: 'uuid',
          required: true,
          attributes: [],
          annotations: [],
          description: 'Internal unique identifier for this user.',
        },
        {
          name: 'email',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'nickname',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
          description: 'Public unique identifier for this user.',
        },
        {
          name: 'name',
          type: 'string',
          required: false,
          attributes: [],
          annotations: [],
        },
        {
          name: 'audit',
          type: 'com.bryzek.apidoc.common.v0.models.audit',
          required: true,
          attributes: [],
          annotations: [],
        },
      ],
      attributes: [],
      description: 'A user is a top level person interacting with the api doc server.',
    },
    {
      name: 'user_form',
      plural: 'user_forms',
      fields: [
        {
          name: 'email',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'password',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'nickname',
          type: 'string',
          required: false,
          attributes: [],
          annotations: [],
          description: 'Defaults to a unique identifier based on email address',
        },
        {
          name: 'name',
          type: 'string',
          required: false,
          attributes: [],
          annotations: [],
        },
      ],
      attributes: [],
    },
    {
      name: 'user_summary',
      plural: 'user_summaries',
      fields: [
        {
          name: 'guid',
          type: 'uuid',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'nickname',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
        },
      ],
      attributes: [],
      description: 'Summary of a user sufficient for display',
    },
    {
      name: 'user_update_form',
      plural: 'user_update_forms',
      fields: [
        {
          name: 'email',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'nickname',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'name',
          type: 'string',
          required: false,
          attributes: [],
          annotations: [],
        },
      ],
      attributes: [],
    },
    {
      name: 'validation',
      plural: 'validations',
      fields: [
        {
          name: 'valid',
          type: 'boolean',
          required: true,
          attributes: [],
          annotations: [],
          description: 'If true, the json schema is valid. If false, there is at least one validation error.',
        },
        {
          name: 'errors',
          type: '[string]',
          required: true,
          attributes: [],
          annotations: [],
          description: 'Contains any validation errors that result from parsing the json document. If empty, the document is valid.',
          default: '[]',
        },
      ],
      attributes: [],
      description: 'Used only to validate json files - used as a resource where http status code defines success',
    },
    {
      name: 'version',
      plural: 'versions',
      fields: [
        {
          name: 'guid',
          type: 'uuid',
          required: true,
          attributes: [],
          annotations: [],
          description: 'Internal unique identifier for this version.',
        },
        {
          name: 'organization',
          type: 'com.bryzek.apidoc.common.v0.models.reference',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'application',
          type: 'com.bryzek.apidoc.common.v0.models.reference',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'version',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
          description: 'The tag for this version. Can be anything, but if semver style version number is used, we automatically correctly sort by version number to find latest. Otherwise latest version is considered to be the most recently created.',
          example: '1.0.0',
        },
        {
          name: 'original',
          type: 'original',
          required: false,
          attributes: [],
          annotations: [],
          description: 'The original uploaded file describing this version, if available',
        },
        {
          name: 'service',
          type: 'com.bryzek.apidoc.spec.v0.models.service',
          required: true,
          attributes: [],
          annotations: [],
          description: 'spec/spec.json description of this API',
        },
        {
          name: 'audit',
          type: 'com.bryzek.apidoc.common.v0.models.audit',
          required: true,
          attributes: [],
          annotations: [],
        },
      ],
      attributes: [],
      description: 'Represents a unique version of the application.',
    },
    {
      name: 'version_form',
      plural: 'version_forms',
      fields: [
        {
          name: 'original_form',
          type: 'original_form',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'visibility',
          type: 'visibility',
          required: false,
          attributes: [],
          annotations: [],
          description: 'If provided, updates the visibility for all versions of this application',
        },
      ],
      attributes: [],
    },
    {
      name: 'watch',
      plural: 'watches',
      fields: [
        {
          name: 'guid',
          type: 'uuid',
          required: true,
          attributes: [],
          annotations: [],
          description: 'Internal unique identifier for this watch',
        },
        {
          name: 'user',
          type: 'user',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'organization',
          type: 'organization',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'application',
          type: 'application',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'audit',
          type: 'com.bryzek.apidoc.common.v0.models.audit',
          required: true,
          attributes: [],
          annotations: [],
        },
      ],
      attributes: [],
      description: 'Users can watch individual applications which enables features like receiving an email notification when there is a new version of an application.',
    },
    {
      name: 'watch_form',
      plural: 'watch_forms',
      fields: [
        {
          name: 'user_guid',
          type: 'uuid',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'organization_key',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
        },
        {
          name: 'application_key',
          type: 'string',
          required: true,
          attributes: [],
          annotations: [],
        },
      ],
      attributes: [],
    },
  ],
  resources: [
    {
      type: 'application',
      plural: 'applications',
      operations: [
        {
          method: 'GET',
          path: '/:orgKey',
          parameters: [
            {
              name: 'orgKey',
              type: 'string',
              location: 'Path',
              required: true,
              description: 'The organization key for which to search applications',
            },
            {
              name: 'name',
              type: 'string',
              location: 'Query',
              required: false,
              description: 'The name of an application. Case in-sensitive. Exact match',
            },
            {
              name: 'guid',
              type: 'uuid',
              location: 'Query',
              required: false,
              description: 'The guid of an application. Exact match',
            },
            {
              name: 'key',
              type: 'string',
              location: 'Query',
              required: false,
              description: 'The key of an application. Case in-sensitive. Exact match',
            },
            {
              name: 'has_version',
              type: 'boolean',
              location: 'Query',
              required: false,
              description: 'If true, we return applications that have at least one version. If false, we return applications that have no versions in the system',
            },
            {
              name: 'limit',
              type: 'long',
              location: 'Query',
              required: true,
              description: 'The number of records to return',
              default: '25',
              maximum: 100,
            },
            {
              name: 'offset',
              type: 'long',
              location: 'Query',
              required: true,
              description: 'Used to paginate. First page of results is 0.',
              default: '0',
              minimum: 0,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: '[application]',
            },
          ],
          attributes: [],
          description: 'Search all applications. Results are always paginated.',
        },
        {
          method: 'POST',
          path: '/:orgKey',
          parameters: [
            {
              name: 'orgKey',
              type: 'string',
              location: 'Path',
              required: true,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: 'application',
            },
            {
              code: {
                integer: {
                  value: 409,
                },
              },
              type: '[error]',
            },
          ],
          attributes: [],
          description: 'Create an application.',
          body: {
            type: 'application_form',
            attributes: [],
          },
        },
        {
          method: 'PUT',
          path: '/:orgKey/:applicationKey',
          parameters: [
            {
              name: 'orgKey',
              type: 'string',
              location: 'Path',
              required: true,
            },
            {
              name: 'applicationKey',
              type: 'string',
              location: 'Path',
              required: true,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: 'application',
            },
            {
              code: {
                integer: {
                  value: 409,
                },
              },
              type: '[error]',
            },
          ],
          attributes: [],
          description: 'Updates an application.',
          body: {
            type: 'application_form',
            attributes: [],
          },
        },
        {
          method: 'DELETE',
          path: '/:orgKey/:applicationKey',
          parameters: [
            {
              name: 'orgKey',
              type: 'string',
              location: 'Path',
              required: true,
            },
            {
              name: 'applicationKey',
              type: 'string',
              location: 'Path',
              required: true,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 204,
                },
              },
              type: 'unit',
            },
          ],
          attributes: [],
          description: 'Deletes a specific application and its associated versions.',
        },
        {
          method: 'POST',
          path: '/:orgKey/:applicationKey/move',
          parameters: [
            {
              name: 'orgKey',
              type: 'string',
              location: 'Path',
              required: true,
            },
            {
              name: 'applicationKey',
              type: 'string',
              location: 'Path',
              required: true,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: 'application',
            },
            {
              code: {
                integer: {
                  value: 409,
                },
              },
              type: '[error]',
            },
          ],
          attributes: [],
          description: 'Moves application to a new organization.',
          body: {
            type: 'move_form',
            attributes: [],
          },
        },
      ],
      attributes: [],
      path: '/:orgKey',
    },
    {
      type: 'attribute',
      plural: 'attributes',
      operations: [
        {
          method: 'GET',
          path: '/attributes',
          parameters: [
            {
              name: 'guid',
              type: 'uuid',
              location: 'Query',
              required: false,
              description: 'Find the watch with this guid.',
            },
            {
              name: 'name',
              type: 'string',
              location: 'Query',
              required: false,
              description: 'Find attributes with this name. Case in-sensitive. Exact match',
            },
            {
              name: 'limit',
              type: 'long',
              location: 'Query',
              required: true,
              description: 'The number of records to return',
              default: '25',
              minimum: 1,
              maximum: 100,
            },
            {
              name: 'offset',
              type: 'long',
              location: 'Query',
              required: true,
              description: 'Used to paginate. First page of results is 0.',
              default: '0',
              minimum: 0,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: '[attribute]',
            },
          ],
          attributes: [],
          description: 'Search all attributes. Results are always paginated.',
        },
        {
          method: 'GET',
          path: '/attributes/:name',
          parameters: [
            {
              name: 'name',
              type: 'string',
              location: 'Path',
              required: true,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: 'attribute',
            },
            {
              code: {
                integer: {
                  value: 404,
                },
              },
              type: 'unit',
            },
          ],
          attributes: [],
          description: 'Returns the attribute with this name.',
        },
        {
          method: 'POST',
          path: '/attributes',
          parameters: [],
          responses: [
            {
              code: {
                integer: {
                  value: 201,
                },
              },
              type: 'attribute',
            },
            {
              code: {
                integer: {
                  value: 401,
                },
              },
              type: 'unit',
            },
            {
              code: {
                integer: {
                  value: 409,
                },
              },
              type: '[error]',
            },
          ],
          attributes: [],
          description: 'Create a new attribute.',
          body: {
            type: 'attribute_form',
            attributes: [],
          },
        },
        {
          method: 'DELETE',
          path: '/attributes/:name',
          parameters: [
            {
              name: 'name',
              type: 'string',
              location: 'Path',
              required: true,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 204,
                },
              },
              type: 'unit',
            },
            {
              code: {
                integer: {
                  value: 401,
                },
              },
              type: 'unit',
            },
            {
              code: {
                integer: {
                  value: 404,
                },
              },
              type: 'unit',
            },
          ],
          attributes: [],
          description: 'Deletes the attribute with this name. Only the user who created an attribute can delete it.',
        },
      ],
      attributes: [],
      path: '/attributes',
    },
    {
      type: 'authentication',
      plural: 'authentications',
      operations: [
        {
          method: 'GET',
          path: '/authentications/session/:id',
          parameters: [
            {
              name: 'id',
              type: 'string',
              location: 'Path',
              required: true,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: 'authentication',
            },
            {
              code: {
                integer: {
                  value: 404,
                },
              },
              type: 'unit',
            },
          ],
          attributes: [],
        },
      ],
      attributes: [],
      path: '/authentications',
    },
    {
      type: 'change',
      plural: 'changes',
      operations: [
        {
          method: 'GET',
          path: '/changes',
          parameters: [
            {
              name: 'org_key',
              type: 'string',
              location: 'Query',
              required: false,
              description: 'Filter changes to those made for the organization with this key.',
            },
            {
              name: 'application_key',
              type: 'string',
              location: 'Query',
              required: false,
              description: 'Filter changes to those made for the application with this key.',
            },
            {
              name: 'from',
              type: 'string',
              location: 'Query',
              required: false,
              description: 'Filter changes to those made from this version.',
              example: '0.1.3',
            },
            {
              name: 'to',
              type: 'string',
              location: 'Query',
              required: false,
              description: 'Filter changes to those made to this version.',
              example: '0.1.4',
            },
            {
              name: 'type',
              type: 'string',
              location: 'Query',
              required: false,
              description: 'The type of diff to return.',
              example: 'breaking or non_breaking',
            },
            {
              name: 'limit',
              type: 'long',
              location: 'Query',
              required: true,
              description: 'The number of records to return',
              default: '25',
              minimum: 1,
              maximum: 100,
            },
            {
              name: 'offset',
              type: 'long',
              location: 'Query',
              required: true,
              description: 'Used to paginate. First page of results is 0.',
              default: '0',
              minimum: 0,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: '[change]',
            },
          ],
          attributes: [],
        },
      ],
      attributes: [],
      path: '/changes',
    },
    {
      type: 'code',
      plural: 'code',
      operations: [
        {
          method: 'GET',
          path: '/:orgKey/:applicationKey/:version/:generatorKey',
          parameters: [
            {
              name: 'orgKey',
              type: 'string',
              location: 'Path',
              required: true,
              description: 'The organization key for which to generate code',
            },
            {
              name: 'applicationKey',
              type: 'string',
              location: 'Path',
              required: true,
              description: 'The application key for which to generate code',
            },
            {
              name: 'version',
              type: 'string',
              location: 'Path',
              required: true,
              description: "The version of this application. Can be 'latest'",
            },
            {
              name: 'generatorKey',
              type: 'string',
              location: 'Path',
              required: true,
              description: 'The key of the generator to invoke',
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: 'code',
            },
            {
              code: {
                integer: {
                  value: 404,
                },
              },
              type: 'unit',
            },
            {
              code: {
                integer: {
                  value: 409,
                },
              },
              type: '[error]',
              description: 'If the target, version, and/or generator are invalid.',
            },
          ],
          attributes: [],
          description: 'Generate code for a specific version of an application.',
        },
      ],
      attributes: [],
      path: '/:orgKey/:applicationKey/:version/:generatorKey',
    },
    {
      type: 'com.bryzek.apidoc.generator.v0.models.healthcheck',
      plural: 'healthchecks',
      operations: [
        {
          method: 'GET',
          path: '/_internal_/healthcheck',
          parameters: [],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: 'com.bryzek.apidoc.generator.v0.models.healthcheck',
            },
          ],
          attributes: [],
        },
        {
          method: 'GET',
          path: '/_internal_/migrate',
          parameters: [],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: 'map[string]',
            },
          ],
          attributes: [],
        },
      ],
      attributes: [],
      path: '/_internal_',
    },
    {
      type: 'domain',
      plural: 'domains',
      operations: [
        {
          method: 'POST',
          path: '/domains/:orgKey',
          parameters: [
            {
              name: 'orgKey',
              type: 'string',
              location: 'Path',
              required: true,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: 'domain',
            },
            {
              code: {
                integer: {
                  value: 409,
                },
              },
              type: '[error]',
            },
          ],
          attributes: [],
          description: 'Add a domain to this organization',
          body: {
            type: 'domain',
            attributes: [],
          },
        },
        {
          method: 'DELETE',
          path: '/domains/:orgKey/:name',
          parameters: [
            {
              name: 'orgKey',
              type: 'string',
              location: 'Path',
              required: true,
            },
            {
              name: 'name',
              type: 'string',
              location: 'Path',
              required: true,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 204,
                },
              },
              type: 'unit',
            },
          ],
          attributes: [],
          description: 'Remove this domain from this organization',
        },
      ],
      attributes: [],
      path: '/domains/:orgKey',
    },
    {
      type: 'email_verification_confirmation_form',
      plural: 'email_verification_confirmation_forms',
      operations: [
        {
          method: 'POST',
          path: '/email_verification_confirmations',
          parameters: [],
          responses: [
            {
              code: {
                integer: {
                  value: 204,
                },
              },
              type: 'unit',
            },
            {
              code: {
                integer: {
                  value: 409,
                },
              },
              type: '[error]',
            },
          ],
          attributes: [],
          description: 'Validate an email address using a token.',
          body: {
            type: 'email_verification_confirmation_form',
            attributes: [],
          },
        },
      ],
      attributes: [],
      path: '/email_verification_confirmations',
    },
    {
      type: 'generator_service',
      plural: 'generator_services',
      operations: [
        {
          method: 'GET',
          path: '/generator_services',
          parameters: [
            {
              name: 'guid',
              type: 'uuid',
              location: 'Query',
              required: false,
            },
            {
              name: 'uri',
              type: 'string',
              location: 'Query',
              required: false,
            },
            {
              name: 'generator_key',
              type: 'string',
              location: 'Query',
              required: false,
            },
            {
              name: 'limit',
              type: 'long',
              location: 'Query',
              required: true,
              description: 'The number of records to return',
              default: '100',
              minimum: 1,
              maximum: 100,
            },
            {
              name: 'offset',
              type: 'long',
              location: 'Query',
              required: true,
              description: 'Used to paginate. First page of results is 0.',
              default: '0',
              minimum: 0,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: '[generator_service]',
            },
          ],
          attributes: [],
          description: 'List all generator services',
        },
        {
          method: 'GET',
          path: '/generator_services/:guid',
          parameters: [
            {
              name: 'guid',
              type: 'uuid',
              location: 'Path',
              required: true,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: 'generator_service',
            },
            {
              code: {
                integer: {
                  value: 404,
                },
              },
              type: 'unit',
            },
          ],
          attributes: [],
        },
        {
          method: 'POST',
          path: '/generator_services',
          parameters: [],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: 'generator_service',
            },
            {
              code: {
                integer: {
                  value: 409,
                },
              },
              type: '[error]',
            },
          ],
          attributes: [],
          body: {
            type: 'generator_service_form',
            attributes: [],
          },
        },
        {
          method: 'DELETE',
          path: '/generator_services/:guid',
          parameters: [
            {
              name: 'guid',
              type: 'uuid',
              location: 'Path',
              required: true,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 204,
                },
              },
              type: 'unit',
              description: 'Service successfully deleted',
            },
            {
              code: {
                integer: {
                  value: 404,
                },
              },
              type: 'unit',
              description: 'Service not found',
            },
            {
              code: {
                integer: {
                  value: 403,
                },
              },
              type: 'unit',
              description: 'Request is not authorized',
            },
          ],
          attributes: [],
          description: 'Deletes a generator service.',
        },
      ],
      attributes: [],
      path: '/generator_services',
    },
    {
      type: 'generator_with_service',
      plural: 'generator_with_services',
      operations: [
        {
          method: 'GET',
          path: '/generators',
          parameters: [
            {
              name: 'guid',
              type: 'uuid',
              location: 'Query',
              required: false,
              description: 'Filter to generator with this guid',
            },
            {
              name: 'service_guid',
              type: 'uuid',
              location: 'Query',
              required: false,
              description: 'Filter to generator from this service',
            },
            {
              name: 'service_uri',
              type: 'string',
              location: 'Query',
              required: false,
              description: 'Filter to generator from this service URI',
            },
            {
              name: 'attribute_name',
              type: 'string',
              location: 'Query',
              required: false,
              description: 'Filter to generators that use this attribute',
            },
            {
              name: 'key',
              type: 'string',
              location: 'Query',
              required: false,
              description: 'Filter to generator with this key',
            },
            {
              name: 'limit',
              type: 'long',
              location: 'Query',
              required: true,
              description: 'The number of records to return',
              default: '100',
              minimum: 1,
              maximum: 100,
            },
            {
              name: 'offset',
              type: 'long',
              location: 'Query',
              required: true,
              description: 'Used to paginate. First page of results is 0.',
              default: '0',
              minimum: 0,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: '[generator_with_service]',
            },
          ],
          attributes: [],
          description: 'List all available generators',
        },
        {
          method: 'GET',
          path: '/generators/:key',
          parameters: [
            {
              name: 'key',
              type: 'string',
              location: 'Path',
              required: true,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: 'generator_with_service',
            },
            {
              code: {
                integer: {
                  value: 404,
                },
              },
              type: 'unit',
            },
          ],
          attributes: [],
        },
      ],
      attributes: [],
      path: '/generators',
    },
    {
      type: 'item',
      plural: 'items',
      operations: [
        {
          method: 'GET',
          path: '/items',
          parameters: [
            {
              name: 'q',
              type: 'string',
              location: 'Query',
              required: false,
              description: 'The search query. At the moment, we do case insensitive exact match search.',
            },
            {
              name: 'limit',
              type: 'long',
              location: 'Query',
              required: true,
              description: 'The number of records to return',
              default: '25',
              minimum: 1,
              maximum: 100,
            },
            {
              name: 'offset',
              type: 'long',
              location: 'Query',
              required: true,
              description: 'Used to paginate. First page of results is 0.',
              default: '0',
              minimum: 0,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: '[item]',
            },
          ],
          attributes: [],
        },
        {
          method: 'GET',
          path: '/items/:guid',
          parameters: [
            {
              name: 'guid',
              type: 'uuid',
              location: 'Path',
              required: true,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: 'item',
            },
            {
              code: {
                integer: {
                  value: 404,
                },
              },
              type: 'unit',
            },
          ],
          attributes: [],
        },
      ],
      attributes: [],
      path: '/items',
    },
    {
      type: 'membership',
      plural: 'memberships',
      operations: [
        {
          method: 'GET',
          path: '/memberships',
          parameters: [
            {
              name: 'org_guid',
              type: 'uuid',
              location: 'Query',
              required: false,
            },
            {
              name: 'org_key',
              type: 'string',
              location: 'Query',
              required: false,
            },
            {
              name: 'user_guid',
              type: 'uuid',
              location: 'Query',
              required: false,
            },
            {
              name: 'role',
              type: 'string',
              location: 'Query',
              required: false,
            },
            {
              name: 'limit',
              type: 'long',
              location: 'Query',
              required: true,
              description: 'The number of records to return',
              default: '25',
              minimum: 1,
              maximum: 100,
            },
            {
              name: 'offset',
              type: 'long',
              location: 'Query',
              required: true,
              description: 'Used to paginate. First page of results is 0.',
              default: '0',
              minimum: 0,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: '[membership]',
            },
          ],
          attributes: [],
          description: 'Search all memberships. Results are always paginated.',
        },
        {
          method: 'GET',
          path: '/memberships/:guid',
          parameters: [
            {
              name: 'guid',
              type: 'uuid',
              location: 'Path',
              required: true,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: 'membership',
            },
            {
              code: {
                integer: {
                  value: 404,
                },
              },
              type: 'unit',
            },
          ],
          attributes: [],
        },
        {
          method: 'DELETE',
          path: '/memberships/:guid',
          parameters: [
            {
              name: 'guid',
              type: 'uuid',
              location: 'Path',
              required: true,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 204,
                },
              },
              type: 'unit',
            },
          ],
          attributes: [],
        },
      ],
      attributes: [],
      path: '/memberships',
    },
    {
      type: 'membership_request',
      plural: 'membership_requests',
      operations: [
        {
          method: 'GET',
          path: '/membership_requests',
          parameters: [
            {
              name: 'org_guid',
              type: 'uuid',
              location: 'Query',
              required: false,
            },
            {
              name: 'org_key',
              type: 'string',
              location: 'Query',
              required: false,
            },
            {
              name: 'user_guid',
              type: 'uuid',
              location: 'Query',
              required: false,
            },
            {
              name: 'role',
              type: 'string',
              location: 'Query',
              required: false,
            },
            {
              name: 'limit',
              type: 'long',
              location: 'Query',
              required: true,
              description: 'The number of records to return',
              default: '25',
              minimum: 1,
              maximum: 100,
            },
            {
              name: 'offset',
              type: 'long',
              location: 'Query',
              required: true,
              description: 'Used to paginate. First page of results is 0.',
              default: '0',
              minimum: 0,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: '[membership_request]',
            },
          ],
          attributes: [],
          description: 'Search all membership requests. Results are always paginated.',
        },
        {
          method: 'POST',
          path: '/membership_requests',
          parameters: [
            {
              name: 'org_guid',
              type: 'uuid',
              location: 'Form',
              required: true,
            },
            {
              name: 'user_guid',
              type: 'uuid',
              location: 'Form',
              required: true,
            },
            {
              name: 'role',
              type: 'string',
              location: 'Form',
              required: true,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: 'membership_request',
            },
            {
              code: {
                integer: {
                  value: 409,
                },
              },
              type: '[error]',
            },
          ],
          attributes: [],
          description: 'Create a membership request',
        },
        {
          method: 'POST',
          path: '/membership_requests/:guid/accept',
          parameters: [
            {
              name: 'guid',
              type: 'uuid',
              location: 'Path',
              required: true,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 204,
                },
              },
              type: 'unit',
            },
            {
              code: {
                integer: {
                  value: 409,
                },
              },
              type: '[error]',
            },
          ],
          attributes: [],
          description: 'Accepts this membership request. User will become a member of the specified organization.',
        },
        {
          method: 'POST',
          path: '/membership_requests/:guid/decline',
          parameters: [
            {
              name: 'guid',
              type: 'uuid',
              location: 'Path',
              required: true,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 204,
                },
              },
              type: 'unit',
            },
            {
              code: {
                integer: {
                  value: 409,
                },
              },
              type: '[error]',
            },
          ],
          attributes: [],
          description: 'Declines this membership request. User will NOT become a member of the specified organization.',
        },
      ],
      attributes: [],
      path: '/membership_requests',
    },
    {
      type: 'organization',
      plural: 'organizations',
      operations: [
        {
          method: 'GET',
          path: '/organizations',
          parameters: [
            {
              name: 'guid',
              type: 'uuid',
              location: 'Query',
              required: false,
              description: 'Finds the organization with this guid, if any',
            },
            {
              name: 'user_guid',
              type: 'uuid',
              location: 'Query',
              required: false,
              description: 'If specified, restricts to organizations that this user is specifically a member of (e.g. will exclude public organizations with which the user does not have a direct membership).',
            },
            {
              name: 'key',
              type: 'string',
              location: 'Query',
              required: false,
              description: 'Find organizations with this key. Case in-sensitive. Exact match',
            },
            {
              name: 'name',
              type: 'string',
              location: 'Query',
              required: false,
              description: 'Find organizations with this name. Case in-sensitive. Exact match',
            },
            {
              name: 'namespace',
              type: 'string',
              location: 'Query',
              required: false,
              description: 'Find organizations with this namespace. Case in-sensitive. Exact match',
            },
            {
              name: 'limit',
              type: 'long',
              location: 'Query',
              required: true,
              description: 'The number of records to return',
              default: '25',
              minimum: 1,
              maximum: 100,
            },
            {
              name: 'offset',
              type: 'long',
              location: 'Query',
              required: true,
              description: 'Used to paginate. First page of results is 0.',
              default: '0',
              minimum: 0,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: '[organization]',
            },
          ],
          attributes: [],
          description: 'Search all organizations. Results are always paginated.',
        },
        {
          method: 'GET',
          path: '/organizations/:key',
          parameters: [
            {
              name: 'key',
              type: 'string',
              location: 'Path',
              required: true,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: 'organization',
            },
            {
              code: {
                integer: {
                  value: 404,
                },
              },
              type: 'unit',
            },
          ],
          attributes: [],
          description: 'Returns the organization with this key.',
        },
        {
          method: 'POST',
          path: '/organizations',
          parameters: [],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: 'organization',
            },
            {
              code: {
                integer: {
                  value: 409,
                },
              },
              type: '[error]',
            },
          ],
          attributes: [],
          description: 'Create a new organization.',
          body: {
            type: 'organization_form',
            attributes: [],
          },
        },
        {
          method: 'PUT',
          path: '/organizations/:key',
          parameters: [
            {
              name: 'key',
              type: 'string',
              location: 'Path',
              required: true,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: 'organization',
            },
            {
              code: {
                integer: {
                  value: 409,
                },
              },
              type: '[error]',
            },
          ],
          attributes: [],
          description: 'Update an organization.',
          body: {
            type: 'organization_form',
            attributes: [],
          },
        },
        {
          method: 'DELETE',
          path: '/organizations/:key',
          parameters: [
            {
              name: 'key',
              type: 'string',
              location: 'Path',
              required: true,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 204,
                },
              },
              type: 'unit',
            },
          ],
          attributes: [],
          description: 'Deletes an organization and all of its associated applications.',
        },
        {
          method: 'GET',
          path: '/organizations/:key/attributes',
          parameters: [
            {
              name: 'key',
              type: 'string',
              location: 'Path',
              required: true,
            },
            {
              name: 'name',
              type: 'string',
              location: 'Query',
              required: false,
              description: 'Find the values for the attribute with this name.',
            },
            {
              name: 'limit',
              type: 'long',
              location: 'Query',
              required: true,
              description: 'The number of records to return',
              default: '25',
              minimum: 1,
              maximum: 100,
            },
            {
              name: 'offset',
              type: 'long',
              location: 'Query',
              required: true,
              description: 'Used to paginate. First page of results is 0.',
              default: '0',
              minimum: 0,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: '[attribute_value]',
            },
          ],
          attributes: [],
          description: 'Returns all attribute values for this organization. Results are always paginated.',
        },
        {
          method: 'GET',
          path: '/organizations/:key/attributes/:name',
          parameters: [
            {
              name: 'key',
              type: 'string',
              location: 'Path',
              required: true,
            },
            {
              name: 'name',
              type: 'string',
              location: 'Path',
              required: true,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: 'attribute_value',
            },
            {
              code: {
                integer: {
                  value: 404,
                },
              },
              type: 'unit',
            },
          ],
          attributes: [],
          description: 'Returns the attribute value with this name.',
        },
        {
          method: 'PUT',
          path: '/organizations/:key/attributes/:name',
          parameters: [
            {
              name: 'key',
              type: 'string',
              location: 'Path',
              required: true,
            },
            {
              name: 'name',
              type: 'string',
              location: 'Path',
              required: true,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: 'attribute_value',
            },
            {
              code: {
                integer: {
                  value: 201,
                },
              },
              type: 'attribute_value',
            },
            {
              code: {
                integer: {
                  value: 404,
                },
              },
              type: 'unit',
            },
            {
              code: {
                integer: {
                  value: 409,
                },
              },
              type: '[error]',
            },
          ],
          attributes: [],
          description: 'Create or update a new attribute value.',
          body: {
            type: 'attribute_value_form',
            attributes: [],
          },
        },
        {
          method: 'DELETE',
          path: '/organizations/:key/attributes/:name',
          parameters: [
            {
              name: 'key',
              type: 'string',
              location: 'Path',
              required: true,
            },
            {
              name: 'name',
              type: 'string',
              location: 'Path',
              required: true,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 204,
                },
              },
              type: 'unit',
            },
            {
              code: {
                integer: {
                  value: 401,
                },
              },
              type: 'unit',
            },
            {
              code: {
                integer: {
                  value: 404,
                },
              },
              type: 'unit',
            },
          ],
          attributes: [],
          description: 'Deletes the attribute value with the specified name. Only the user who created an attribute value can delete it.',
        },
      ],
      attributes: [],
      path: '/organizations',
    },
    {
      type: 'password_reset',
      plural: 'password_resets',
      operations: [
        {
          method: 'POST',
          path: '/password_resets',
          parameters: [],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: 'authentication',
            },
            {
              code: {
                integer: {
                  value: 409,
                },
              },
              type: '[error]',
            },
          ],
          attributes: [],
          description: 'Change the password for this token. If the token is invalid, has been used, or otherwise no longer can be applied, errors will be returned as 409s. A 204 represents that the user has successfully changed their password.',
          body: {
            type: 'password_reset',
            attributes: [],
          },
        },
      ],
      attributes: [],
      path: '/password_resets',
    },
    {
      type: 'password_reset_request',
      plural: 'password_reset_requests',
      operations: [
        {
          method: 'POST',
          path: '/password_reset_requests',
          parameters: [],
          responses: [
            {
              code: {
                integer: {
                  value: 204,
                },
              },
              type: 'unit',
            },
            {
              code: {
                integer: {
                  value: 409,
                },
              },
              type: '[error]',
            },
          ],
          attributes: [],
          description: 'Create a new password reset. This will send the user an email with a link to reset their password.',
          body: {
            type: 'password_reset_request',
            attributes: [],
          },
        },
      ],
      attributes: [],
      path: '/password_reset_requests',
    },
    {
      type: 'subscription',
      plural: 'subscriptions',
      operations: [
        {
          method: 'GET',
          path: '/subscriptions',
          parameters: [
            {
              name: 'guid',
              type: 'uuid',
              location: 'Query',
              required: false,
              description: 'Find the subscription with this guid.',
            },
            {
              name: 'organization_key',
              type: 'string',
              location: 'Query',
              required: false,
              description: 'Find subscriptions for this organization.',
            },
            {
              name: 'user_guid',
              type: 'uuid',
              location: 'Query',
              required: false,
              description: 'Find subscriptions for this user.',
            },
            {
              name: 'publication',
              type: 'publication',
              location: 'Query',
              required: false,
              description: 'Find subscriptions for this publication.',
            },
            {
              name: 'limit',
              type: 'long',
              location: 'Query',
              required: true,
              description: 'The number of records to return',
              default: '25',
              minimum: 1,
              maximum: 100,
            },
            {
              name: 'offset',
              type: 'long',
              location: 'Query',
              required: true,
              description: 'Used to paginate. First page of results is 0.',
              default: '0',
              minimum: 0,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: '[subscription]',
            },
          ],
          attributes: [],
          description: 'Search subscriptions. Always paginated.',
        },
        {
          method: 'GET',
          path: '/subscriptions/:guid',
          parameters: [
            {
              name: 'guid',
              type: 'uuid',
              location: 'Path',
              required: true,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: 'subscription',
            },
            {
              code: {
                integer: {
                  value: 404,
                },
              },
              type: 'unit',
            },
          ],
          attributes: [],
          description: 'Returns information about a specific subscription.',
        },
        {
          method: 'POST',
          path: '/subscriptions',
          parameters: [],
          responses: [
            {
              code: {
                integer: {
                  value: 201,
                },
              },
              type: 'subscription',
            },
            {
              code: {
                integer: {
                  value: 409,
                },
              },
              type: '[error]',
            },
          ],
          attributes: [],
          description: 'Create a new subscription.',
          body: {
            type: 'subscription_form',
            attributes: [],
          },
        },
        {
          method: 'DELETE',
          path: '/subscriptions/:guid',
          parameters: [
            {
              name: 'guid',
              type: 'uuid',
              location: 'Path',
              required: true,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 204,
                },
              },
              type: 'unit',
            },
          ],
          attributes: [],
        },
      ],
      attributes: [],
      path: '/subscriptions',
    },
    {
      type: 'token',
      plural: 'tokens',
      operations: [
        {
          method: 'GET',
          path: '/tokens/users/:user_guid',
          parameters: [
            {
              name: 'user_guid',
              type: 'uuid',
              location: 'Path',
              required: true,
            },
            {
              name: 'guid',
              type: 'uuid',
              location: 'Query',
              required: false,
            },
            {
              name: 'limit',
              type: 'long',
              location: 'Query',
              required: true,
              description: 'The number of records to return',
              default: '25',
              minimum: 1,
              maximum: 100,
            },
            {
              name: 'offset',
              type: 'long',
              location: 'Query',
              required: true,
              description: 'Used to paginate. First page of results is 0.',
              default: '0',
              minimum: 0,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: '[token]',
            },
          ],
          attributes: [],
        },
        {
          method: 'GET',
          path: '/tokens/:guid/cleartext',
          parameters: [
            {
              name: 'guid',
              type: 'uuid',
              location: 'Path',
              required: true,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: 'cleartext_token',
            },
            {
              code: {
                integer: {
                  value: 404,
                },
              },
              type: 'unit',
            },
          ],
          attributes: [],
          description: 'Used to fetch the clear text token.',
        },
        {
          method: 'POST',
          path: '/tokens',
          parameters: [],
          responses: [
            {
              code: {
                integer: {
                  value: 201,
                },
              },
              type: 'token',
            },
            {
              code: {
                integer: {
                  value: 409,
                },
              },
              type: '[error]',
            },
          ],
          attributes: [],
          description: 'Create a new API token for this user',
          body: {
            type: 'token_form',
            attributes: [],
          },
        },
        {
          method: 'DELETE',
          path: '/tokens/:guid',
          parameters: [
            {
              name: 'guid',
              type: 'uuid',
              location: 'Path',
              required: true,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 204,
                },
              },
              type: 'unit',
            },
          ],
          attributes: [],
        },
      ],
      attributes: [],
      path: '/tokens',
    },
    {
      type: 'user',
      plural: 'users',
      operations: [
        {
          method: 'GET',
          path: '/users',
          parameters: [
            {
              name: 'guid',
              type: 'uuid',
              location: 'Query',
              required: false,
              description: 'Find user with this guid. Exact match',
            },
            {
              name: 'email',
              type: 'string',
              location: 'Query',
              required: false,
              description: 'Find user with this email address. Case in-sensitive. Exact match',
            },
            {
              name: 'token',
              type: 'string',
              location: 'Query',
              required: false,
              description: 'Find the user with this API token. Exact match',
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: '[user]',
            },
          ],
          attributes: [],
          description: 'Search for a specific user. You must specify at least 1 parameter - either a guid, email or token - and will receive back either 0 or 1 users.',
        },
        {
          method: 'GET',
          path: '/users/:guid',
          parameters: [
            {
              name: 'guid',
              type: 'uuid',
              location: 'Path',
              required: true,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: 'user',
            },
            {
              code: {
                integer: {
                  value: 404,
                },
              },
              type: 'unit',
            },
          ],
          attributes: [],
          description: 'Returns information about the user with this guid.',
        },
        {
          method: 'POST',
          path: '/users/authenticate',
          parameters: [
            {
              name: 'email',
              type: 'string',
              location: 'Form',
              required: true,
            },
            {
              name: 'password',
              type: 'string',
              location: 'Form',
              required: true,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: 'authentication',
            },
            {
              code: {
                integer: {
                  value: 409,
                },
              },
              type: '[error]',
            },
          ],
          attributes: [],
          description: 'Used to authenticate a user with an email address and password. Successful authentication returns an instance of the user model. Failed authorizations of any kind are returned as a generic error with code user_authorization_failed.',
        },
        {
          method: 'POST',
          path: '/users/authenticate_github',
          parameters: [
            {
              name: 'token',
              type: 'string',
              location: 'Form',
              required: true,
              description: 'The GitHub assigned oauth token',
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: 'authentication',
            },
            {
              code: {
                integer: {
                  value: 409,
                },
              },
              type: '[error]',
            },
          ],
          attributes: [],
          description: "Used to authenticate a user using a github access token. This is equivalent to running the following command to get the user info: curl -H 'Authorization: Bearer code' https://api.github.com/user",
        },
        {
          method: 'POST',
          path: '/users',
          parameters: [],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: 'user',
            },
            {
              code: {
                integer: {
                  value: 409,
                },
              },
              type: '[error]',
            },
          ],
          attributes: [],
          description: 'Create a new user.',
          body: {
            type: 'user_form',
            attributes: [],
          },
        },
        {
          method: 'PUT',
          path: '/users/:guid',
          parameters: [
            {
              name: 'guid',
              type: 'uuid',
              location: 'Path',
              required: true,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: 'user',
            },
            {
              code: {
                integer: {
                  value: 409,
                },
              },
              type: '[error]',
            },
          ],
          attributes: [],
          description: 'Updates information about the user with the specified guid.',
          body: {
            type: 'user_update_form',
            attributes: [],
          },
        },
      ],
      attributes: [],
      path: '/users',
    },
    {
      type: 'validation',
      plural: 'validations',
      operations: [
        {
          method: 'POST',
          path: '/validations',
          parameters: [],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: 'validation',
            },
          ],
          attributes: [],
          body: {
            type: 'string',
            attributes: [],
          },
        },
      ],
      attributes: [],
      path: '/validations',
      description: 'Public resource that can accept JSON input and returns a validation object describing any validation errors.',
    },
    {
      type: 'version',
      plural: 'versions',
      operations: [
        {
          method: 'GET',
          path: '/:orgKey/:applicationKey',
          parameters: [
            {
              name: 'orgKey',
              type: 'string',
              location: 'Path',
              required: true,
              description: 'The organization key for which to search versions',
            },
            {
              name: 'applicationKey',
              type: 'string',
              location: 'Path',
              required: true,
              description: 'The application key for which to search versions',
            },
            {
              name: 'limit',
              type: 'long',
              location: 'Query',
              required: true,
              description: 'The number of records to return',
              default: '25',
              maximum: 100,
            },
            {
              name: 'offset',
              type: 'long',
              location: 'Query',
              required: true,
              description: 'Used to paginate. First page of results is 0.',
              default: '0',
              minimum: 0,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: '[version]',
            },
          ],
          attributes: [],
          description: 'Search all versions of this application. Results are always paginated.',
        },
        {
          method: 'GET',
          path: '/:orgKey/:applicationKey/:version',
          parameters: [
            {
              name: 'orgKey',
              type: 'string',
              location: 'Path',
              required: true,
            },
            {
              name: 'applicationKey',
              type: 'string',
              location: 'Path',
              required: true,
            },
            {
              name: 'version',
              type: 'string',
              location: 'Path',
              required: true,
              description: 'The version of tthis application to download, or the keyword latest to get the latest version',
              example: 'latest',
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: 'version',
            },
            {
              code: {
                integer: {
                  value: 404,
                },
              },
              type: 'unit',
            },
          ],
          attributes: [],
          description: 'Retrieve a specific version of an application.',
        },
        {
          method: 'POST',
          path: '/:orgKey/:version',
          parameters: [
            {
              name: 'orgKey',
              type: 'string',
              location: 'Path',
              required: true,
            },
            {
              name: 'version',
              type: 'string',
              location: 'Path',
              required: true,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: 'version',
            },
            {
              code: {
                integer: {
                  value: 409,
                },
              },
              type: '[error]',
            },
          ],
          attributes: [],
          description: 'Create a new version for an application',
          body: {
            type: 'version_form',
            attributes: [],
          },
        },
        {
          method: 'PUT',
          path: '/:orgKey/:applicationKey/:version',
          parameters: [
            {
              name: 'orgKey',
              type: 'string',
              location: 'Path',
              required: true,
            },
            {
              name: 'applicationKey',
              type: 'string',
              location: 'Path',
              required: true,
            },
            {
              name: 'version',
              type: 'string',
              location: 'Path',
              required: true,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: 'version',
            },
            {
              code: {
                integer: {
                  value: 409,
                },
              },
              type: '[error]',
            },
          ],
          attributes: [],
          description: 'Upsert a version of an application',
          body: {
            type: 'version_form',
            attributes: [],
          },
        },
        {
          method: 'DELETE',
          path: '/:orgKey/:applicationKey/:version',
          parameters: [
            {
              name: 'orgKey',
              type: 'string',
              location: 'Path',
              required: true,
            },
            {
              name: 'applicationKey',
              type: 'string',
              location: 'Path',
              required: true,
            },
            {
              name: 'version',
              type: 'string',
              location: 'Path',
              required: true,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 204,
                },
              },
              type: 'unit',
            },
          ],
          attributes: [],
          description: 'Deletes a specific version.',
        },
        {
          method: 'GET',
          path: '/:orgKey/:applicationKey/:version/example/:type_name',
          parameters: [
            {
              name: 'orgKey',
              type: 'string',
              location: 'Path',
              required: true,
            },
            {
              name: 'applicationKey',
              type: 'string',
              location: 'Path',
              required: true,
            },
            {
              name: 'version',
              type: 'string',
              location: 'Path',
              required: true,
              description: 'The version of tthis application to download, or the keyword latest to get the latest version',
              example: 'latest',
            },
            {
              name: 'type_name',
              type: 'string',
              location: 'Path',
              required: true,
              description: 'The name of the type (e.g. model name) for which you would like to generate a sample json document',
            },
            {
              name: 'optional_fields',
              type: 'boolean',
              location: 'Query',
              required: false,
              description: 'If true, we generate sample data for all optional fields. Otherwise the generated sample will contain only required fields, where applicable',
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: 'object',
            },
            {
              code: {
                integer: {
                  value: 404,
                },
              },
              type: 'unit',
            },
          ],
          attributes: [],
          description: 'Generates an example JSON document of the type with the specified name.',
        },
      ],
      attributes: [],
      path: '/:orgKey',
    },
    {
      type: 'watch',
      plural: 'watches',
      operations: [
        {
          method: 'GET',
          path: '/watches',
          parameters: [
            {
              name: 'guid',
              type: 'uuid',
              location: 'Query',
              required: false,
              description: 'Find the watch with this guid.',
            },
            {
              name: 'user_guid',
              type: 'uuid',
              location: 'Query',
              required: false,
              description: 'Find attributes for this user.',
            },
            {
              name: 'organization_key',
              type: 'string',
              location: 'Query',
              required: false,
              description: 'Find attributes for this organization.',
            },
            {
              name: 'application_key',
              type: 'string',
              location: 'Query',
              required: false,
              description: 'Find attributes for this application.',
            },
            {
              name: 'limit',
              type: 'long',
              location: 'Query',
              required: true,
              description: 'The number of records to return',
              default: '25',
              minimum: 1,
              maximum: 100,
            },
            {
              name: 'offset',
              type: 'long',
              location: 'Query',
              required: true,
              description: 'Used to paginate. First page of results is 0.',
              default: '0',
              minimum: 0,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: '[watch]',
            },
          ],
          attributes: [],
          description: 'Search attributes. Always paginated.',
        },
        {
          method: 'GET',
          path: '/watches/:guid',
          parameters: [
            {
              name: 'guid',
              type: 'uuid',
              location: 'Path',
              required: true,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: 'watch',
            },
            {
              code: {
                integer: {
                  value: 404,
                },
              },
              type: 'unit',
            },
          ],
          attributes: [],
          description: 'Returns information about a specific watch.',
        },
        {
          method: 'GET',
          path: '/watches/check',
          parameters: [
            {
              name: 'user_guid',
              type: 'uuid',
              location: 'Query',
              required: false,
              description: 'The user for which we are checking. API returns false if the user guid is not provided',
            },
            {
              name: 'organization_key',
              type: 'string',
              location: 'Query',
              required: true,
            },
            {
              name: 'application_key',
              type: 'string',
              location: 'Query',
              required: true,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 200,
                },
              },
              type: 'boolean',
            },
          ],
          attributes: [],
          description: 'Quick check if a user is watching a specific application.',
        },
        {
          method: 'POST',
          path: '/watches',
          parameters: [],
          responses: [
            {
              code: {
                integer: {
                  value: 201,
                },
              },
              type: 'watch',
            },
            {
              code: {
                integer: {
                  value: 409,
                },
              },
              type: '[error]',
            },
          ],
          attributes: [],
          description: 'Create a new watch.',
          body: {
            type: 'watch_form',
            attributes: [],
          },
        },
        {
          method: 'DELETE',
          path: '/watches/:guid',
          parameters: [
            {
              name: 'guid',
              type: 'uuid',
              location: 'Path',
              required: true,
            },
          ],
          responses: [
            {
              code: {
                integer: {
                  value: 204,
                },
              },
              type: 'unit',
            },
          ],
          attributes: [],
        },
      ],
      attributes: [],
      path: '/watches',
    },
  ],
  attributes: [],
  annotations: [],
  base_url: 'http://api.apidoc.me',
  description: 'Host API documentation for applications providing REST APIs, facilitating the design of good resource first APIs.',
};

export default service;
