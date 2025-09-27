import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class AppriseApi implements ICredentialType {
	name = 'appriseApi';
	displayName = 'Apprise API';
	documentationUrl = 'https://github.com/caronc/apprise-api';
	properties: INodeProperties[] = [
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: 'http://localhost:8000',
			placeholder: 'http://localhost:8000',
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
		{
			displayName: 'Configuration Key',
			name: 'configKey',
			type: 'string',
			default: 'apprise',
		},
	];
}