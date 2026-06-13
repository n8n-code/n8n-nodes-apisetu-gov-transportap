import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovTransportapApi implements ICredentialType {
        name = 'N8nDevApisetuGovTransportapApi';

        displayName = 'Apisetu Gov Transportap API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovTransportap/apisetu-gov-transportap.svg', dark: 'file:../nodes/ApisetuGovTransportap/apisetu-gov-transportap.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/transportap/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/transportap/v3',
                        description: 'The base URL of your Apisetu Gov Transportap API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
