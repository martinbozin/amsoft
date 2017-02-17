declare module server {
	interface module {
		moduleId: number;
		name: string;
		appTenant: {
			appTenantId: number;
			name: string;
			hostname: string;
			hostnames: string[];
			theme: string;
			connectionString: string;
			modules: any[];
		};
	}
}
