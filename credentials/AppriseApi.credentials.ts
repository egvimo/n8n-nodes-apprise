import { Icon, ICredentialType, INodeProperties } from 'n8n-workflow';

export class AppriseApi implements ICredentialType {
	name = 'appriseApi';
	displayName = 'Apprise API';
	documentationUrl = 'https://github.com/caronc/apprise-api';
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
			// eslint-disable-next-line n8n-nodes-base/cred-class-field-type-options-password-missing
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
}