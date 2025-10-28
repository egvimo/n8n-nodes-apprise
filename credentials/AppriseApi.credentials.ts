import { Icon, ICredentialType, INodeProperties, IHttpRequestMethods } from 'n8n-workflow';

export class AppriseApi implements ICredentialType {
	name = 'appriseApi';
	displayName = 'Apprise API';
	documentationUrl = 'https://github.com/caronc/apprise-api';
	// eslint-disable-next-line @n8n/community-nodes/icon-validation
	icon: Icon = 'file:../icons/apprise.png';
	properties: INodeProperties[] = [
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: 'http://localhost:8000',
			placeholder: 'http://localhost:8000',
		},
		{
			displayName: 'Configuration Key',
			name: 'configKey',
			type: 'string',
			default: 'apprise',
		},
		{
			displayName: 'Username',
			name: 'username',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];

	test = {
        request: {
            baseURL: '={{$credentials.baseUrl}}',
            url: '/status',
            method: 'GET' as IHttpRequestMethods,
            auth: {
                username: '={{$credentials.username}}',
                password: '={{$credentials.password}}',
            },
        },
    };
}