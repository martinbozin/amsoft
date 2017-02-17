declare module server {
	interface appTenant {
		appTenantId: number;
		name: string;
		hostname: string;
		hostnames: string[];
		theme: string;
		connectionString: string;
		modules: any[];
	}
}
