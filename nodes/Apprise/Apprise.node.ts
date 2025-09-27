import { type INodeType, type INodeTypeDescription } from 'n8n-workflow';

export class Apprise implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Apprise',
		name: 'apprise',
		// eslint-disable-next-line n8n-nodes-base/node-class-description-icon-not-svg
		icon: 'file:../../icons/apprise.png',
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["title"] || "Notification"}}',
		description: 'Send notifications via Apprise API',
		defaults: {
			name: 'Apprise',
		},
		usableAsTool: true,
		inputs: ['main'],
		outputs: ['main'],

		credentials: [
			{
				name: 'appriseApi',
				required: true,
			},
		],

		requestDefaults: {
			baseURL: '={{$credentials.baseUrl}}',
			url: '=/notify/{{$credentials.configKey}}',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			auth: {
				username: '={{$credentials.username}}',
				password: '={{$credentials.password}}',
			},
		},

		properties: [
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				placeholder: 'Optional title',
				description: 'Notification title',
				routing: {
					send: {
						type: 'body',
						property: 'title',
					},
				},
			},
			{
				displayName: 'Body',
				name: 'body',
				type: 'string',
				typeOptions: { rows: 4 },
				default: '',
				placeholder: 'Your notification message',
				description: 'Notification body text',
				required: true,
				routing: {
					send: {
						type: 'body',
						property: 'body',
					},
				},
			},
			{
				displayName: 'Tags',
				name: 'tag',
				type: 'string',
				default: '',
				placeholder: 'info,warning',
				description: 'Comma-separated tags to classify the message', routing: {
					send: {
						type: 'body',
						property: 'tag',
					},
				},
			},
		],
	};
}
