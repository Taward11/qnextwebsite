declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"19-reasons-why-zero-trust-data-access-is-an-essential-sharepoint-add-in.md": {
	id: "19-reasons-why-zero-trust-data-access-is-an-essential-sharepoint-add-in.md";
  slug: "19-reasons-why-zero-trust-data-access-is-an-essential-sharepoint-add-in";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"21-reasons-to-supplement-microsoft-365-e5-security-with-zero-trust-data-access.md": {
	id: "21-reasons-to-supplement-microsoft-365-e5-security-with-zero-trust-data-access.md";
  slug: "21-reasons-to-supplement-microsoft-365-e5-security-with-zero-trust-data-access";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"24-reasons-to-use-zero-trust-data-access-as-an-ftp-alternative.md": {
	id: "24-reasons-to-use-zero-trust-data-access-as-an-ftp-alternative.md";
  slug: "24-reasons-to-use-zero-trust-data-access-as-an-ftp-alternative";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"9-top-reasons-why-your-organization-needs-zero-trust-least-privilege-access.md": {
	id: "9-top-reasons-why-your-organization-needs-zero-trust-least-privilege-access.md";
  slug: "9-top-reasons-why-your-organization-needs-zero-trust-least-privilege-access";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"a-vpn-alternative-zero-trust-data-access.md": {
	id: "a-vpn-alternative-zero-trust-data-access.md";
  slug: "a-vpn-alternative-zero-trust-data-access";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"achieving-end-to-end-zero-trust-with-zscaler-and-fileflex.md": {
	id: "achieving-end-to-end-zero-trust-with-zscaler-and-fileflex.md";
  slug: "achieving-end-to-end-zero-trust-with-zscaler-and-fileflex";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"advantages-of-zero-trust-virtual-data-rooms-for-banks-and-credit-unions.md": {
	id: "advantages-of-zero-trust-virtual-data-rooms-for-banks-and-credit-unions.md";
  slug: "advantages-of-zero-trust-virtual-data-rooms-for-banks-and-credit-unions";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ai-driven-cybercrime-at-zettabyte-scale.md": {
	id: "ai-driven-cybercrime-at-zettabyte-scale.md";
  slug: "ai-driven-cybercrime-at-zettabyte-scale";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"cloudflare-one-and-fileflex-enterprise-securing-apps-and-data-together.md": {
	id: "cloudflare-one-and-fileflex-enterprise-securing-apps-and-data-together.md";
  slug: "cloudflare-one-and-fileflex-enterprise-securing-apps-and-data-together";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"cmmc-compliance-for-file-sharing-access-and-collaboration-of-cui-using-zero-trust-data-access.md": {
	id: "cmmc-compliance-for-file-sharing-access-and-collaboration-of-cui-using-zero-trust-data-access.md";
  slug: "cmmc-compliance-for-file-sharing-access-and-collaboration-of-cui-using-zero-trust-data-access";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"cmmc-it-control-for-dib-organizations-over-remote-access-and-sharing-using-zero-trust-architecture.md": {
	id: "cmmc-it-control-for-dib-organizations-over-remote-access-and-sharing-using-zero-trust-architecture.md";
  slug: "cmmc-it-control-for-dib-organizations-over-remote-access-and-sharing-using-zero-trust-architecture";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"complete-zero-trust-security-framework.md": {
	id: "complete-zero-trust-security-framework.md";
  slug: "complete-zero-trust-security-framework";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"critical-infrastructure-ease-of-use-over-remote-access-and-sharing-using-zero-trust-architecture.md": {
	id: "critical-infrastructure-ease-of-use-over-remote-access-and-sharing-using-zero-trust-architecture.md";
  slug: "critical-infrastructure-ease-of-use-over-remote-access-and-sharing-using-zero-trust-architecture";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"cybersecurity-for-law-firms-the-priority-of-zero-trust-data-access-security.md": {
	id: "cybersecurity-for-law-firms-the-priority-of-zero-trust-data-access-security.md";
  slug: "cybersecurity-for-law-firms-the-priority-of-zero-trust-data-access-security";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"data-governance-cybersecurity-and-zero-trust-data-access-the-essential-pillars-to-protect-data-assets.md": {
	id: "data-governance-cybersecurity-and-zero-trust-data-access-the-essential-pillars-to-protect-data-assets.md";
  slug: "data-governance-cybersecurity-and-zero-trust-data-access-the-essential-pillars-to-protect-data-assets";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"discover-the-15-top-reasons-to-adopt-a-content-collaboration-platform-built-on-a-zero-trust-architecture.md": {
	id: "discover-the-15-top-reasons-to-adopt-a-content-collaboration-platform-built-on-a-zero-trust-architecture.md";
  slug: "discover-the-15-top-reasons-to-adopt-a-content-collaboration-platform-built-on-a-zero-trust-architecture";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"dora-compliance-for-file-sharing-access-and-collaboration-using-zero-trust-data-access.md": {
	id: "dora-compliance-for-file-sharing-access-and-collaboration-using-zero-trust-data-access.md";
  slug: "dora-compliance-for-file-sharing-access-and-collaboration-using-zero-trust-data-access";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"dspms-and-zero-trust-data-access-a-powerful-duo-for-zero-trust-data-security.md": {
	id: "dspms-and-zero-trust-data-access-a-powerful-duo-for-zero-trust-data-security.md";
  slug: "dspms-and-zero-trust-data-access-a-powerful-duo-for-zero-trust-data-security";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"embracing-zero-trust-data-access-for-it-controlled-chain-of-command.md": {
	id: "embracing-zero-trust-data-access-for-it-controlled-chain-of-command.md";
  slug: "embracing-zero-trust-data-access-for-it-controlled-chain-of-command";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"european-health-data-space-compliance-with-zero-trust.md": {
	id: "european-health-data-space-compliance-with-zero-trust.md";
  slug: "european-health-data-space-compliance-with-zero-trust";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"extending-cisco-zero-trust-from-access-to-data.md": {
	id: "extending-cisco-zero-trust-from-access-to-data.md";
  slug: "extending-cisco-zero-trust-from-access-to-data";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"extending-microsoft-entra-zero-trust-to-protect-your-data-with-zero-trust-data-access.md": {
	id: "extending-microsoft-entra-zero-trust-to-protect-your-data-with-zero-trust-data-access.md";
  slug: "extending-microsoft-entra-zero-trust-to-protect-your-data-with-zero-trust-data-access";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"extending-microsoft-fabric-with-zero-trust-data-access-for-unstructured-data.md": {
	id: "extending-microsoft-fabric-with-zero-trust-data-access-for-unstructured-data.md";
  slug: "extending-microsoft-fabric-with-zero-trust-data-access-for-unstructured-data";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"federated-hybrid-access-why-modern-organizations-cant-afford-to-ignore-it.md": {
	id: "federated-hybrid-access-why-modern-organizations-cant-afford-to-ignore-it.md";
  slug: "federated-hybrid-access-why-modern-organizations-cant-afford-to-ignore-it";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fedramp-compliance-and-zero-trust-data-access.md": {
	id: "fedramp-compliance-and-zero-trust-data-access.md";
  slug: "fedramp-compliance-and-zero-trust-data-access";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"file-sharing-and-collaboration-evolution-from-first-generation-platforms-to-zero-trust-data-access.md": {
	id: "file-sharing-and-collaboration-evolution-from-first-generation-platforms-to-zero-trust-data-access.md";
  slug: "file-sharing-and-collaboration-evolution-from-first-generation-platforms-to-zero-trust-data-access";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fortifying-cyber-defense-via-zero-trust-data-access-the-recent-goanywhere-and-moveit-ransomware-breaches.md": {
	id: "fortifying-cyber-defense-via-zero-trust-data-access-the-recent-goanywhere-and-moveit-ransomware-breaches.md";
  slug: "fortifying-cyber-defense-via-zero-trust-data-access-the-recent-goanywhere-and-moveit-ransomware-breaches";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"from-vpn-risk-to-zero-trust-security-a-smarter-approach-to-remote-access.md": {
	id: "from-vpn-risk-to-zero-trust-security-a-smarter-approach-to-remote-access.md";
  slug: "from-vpn-risk-to-zero-trust-security-a-smarter-approach-to-remote-access";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"gdpr-compliant-file-sharing-using-zero-trust-data-access.md": {
	id: "gdpr-compliant-file-sharing-using-zero-trust-data-access.md";
  slug: "gdpr-compliant-file-sharing-using-zero-trust-data-access";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"higher-education-institutions-bolster-data-security-with-zero-trust-data-access.md": {
	id: "higher-education-institutions-bolster-data-security-with-zero-trust-data-access.md";
  slug: "higher-education-institutions-bolster-data-security-with-zero-trust-data-access";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"hippa-compliant-file-sharing.md": {
	id: "hippa-compliant-file-sharing.md";
  slug: "hippa-compliant-file-sharing";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"how-to-enforce-zero-trust-access-control-to-mitigate-data-breach-and-ransomware.md": {
	id: "how-to-enforce-zero-trust-access-control-to-mitigate-data-breach-and-ransomware.md";
  slug: "how-to-enforce-zero-trust-access-control-to-mitigate-data-breach-and-ransomware";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"how-zero-trust-data-access-cuts-costs-in-organizational-operations.md": {
	id: "how-zero-trust-data-access-cuts-costs-in-organizational-operations.md";
  slug: "how-zero-trust-data-access-cuts-costs-in-organizational-operations";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"hyperscaler-cloud-providers-and-the-data-layer-gap-extending-security-with-file-level-control.md": {
	id: "hyperscaler-cloud-providers-and-the-data-layer-gap-extending-security-with-file-level-control.md";
  slug: "hyperscaler-cloud-providers-and-the-data-layer-gap-extending-security-with-file-level-control";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"meeting-ffiec-guidelines-using-zero-trust-data-access.md": {
	id: "meeting-ffiec-guidelines-using-zero-trust-data-access.md";
  slug: "meeting-ffiec-guidelines-using-zero-trust-data-access";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"modernize-on-premises-storage-with-zero-trust-data-access.md": {
	id: "modernize-on-premises-storage-with-zero-trust-data-access.md";
  slug: "modernize-on-premises-storage-with-zero-trust-data-access";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"network-access-secure-and-controlled-via-zero-trust-data-access.md": {
	id: "network-access-secure-and-controlled-via-zero-trust-data-access.md";
  slug: "network-access-secure-and-controlled-via-zero-trust-data-access";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"network-file-access-control-of-unstructured-data-with-zero-trust-data-access.md": {
	id: "network-file-access-control-of-unstructured-data-with-zero-trust-data-access.md";
  slug: "network-file-access-control-of-unstructured-data-with-zero-trust-data-access";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"network-security-the-power-of-zero-trust-data-access-to-control-on-premises-access-to-files-and-folders.md": {
	id: "network-security-the-power-of-zero-trust-data-access-to-control-on-premises-access-to-files-and-folders.md";
  slug: "network-security-the-power-of-zero-trust-data-access-to-control-on-premises-access-to-files-and-folders";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"nist-sp-1800-35-how-data-level-enforcement-strengthens-zero-trust-security.md": {
	id: "nist-sp-1800-35-how-data-level-enforcement-strengthens-zero-trust-security.md";
  slug: "nist-sp-1800-35-how-data-level-enforcement-strengthens-zero-trust-security";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"regulatory-compliance-in-the-digital-age-unveiling-quebec-bill-64-and-how-fileflex-enterprise-can-help.md": {
	id: "regulatory-compliance-in-the-digital-age-unveiling-quebec-bill-64-and-how-fileflex-enterprise-can-help.md";
  slug: "regulatory-compliance-in-the-digital-age-unveiling-quebec-bill-64-and-how-fileflex-enterprise-can-help";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"sec-cybersecurity-rules-zero-trust-architecture-what-cios-and-cisos-need-to-know.md": {
	id: "sec-cybersecurity-rules-zero-trust-architecture-what-cios-and-cisos-need-to-know.md";
  slug: "sec-cybersecurity-rules-zero-trust-architecture-what-cios-and-cisos-need-to-know";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"sharepoint-zero-trust-security-and-defending-against-zero-day-vulnerabilities.md": {
	id: "sharepoint-zero-trust-security-and-defending-against-zero-day-vulnerabilities.md";
  slug: "sharepoint-zero-trust-security-and-defending-against-zero-day-vulnerabilities";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"smart-cities-and-zero-trust-data-access-securing-the-urban-future.md": {
	id: "smart-cities-and-zero-trust-data-access-securing-the-urban-future.md";
  slug: "smart-cities-and-zero-trust-data-access-securing-the-urban-future";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"strengthening-credit-union-cybersecurity-through-zero-trust-data-access.md": {
	id: "strengthening-credit-union-cybersecurity-through-zero-trust-data-access.md";
  slug: "strengthening-credit-union-cybersecurity-through-zero-trust-data-access";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"strengthening-glba-compliance-with-zero-trust-data-access.md": {
	id: "strengthening-glba-compliance-with-zero-trust-data-access.md";
  slug: "strengthening-glba-compliance-with-zero-trust-data-access";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"supporting-financial-services-cybersecurity-through-zero-trust-data-access.md": {
	id: "supporting-financial-services-cybersecurity-through-zero-trust-data-access.md";
  slug: "supporting-financial-services-cybersecurity-through-zero-trust-data-access";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"the-power-of-zero-trust-data-access-ztda-in-reducing-ransomware-risk.md": {
	id: "the-power-of-zero-trust-data-access-ztda-in-reducing-ransomware-risk.md";
  slug: "the-power-of-zero-trust-data-access-ztda-in-reducing-ransomware-risk";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"the-uks-icloud-backdoor-demand-and-the-need-for-on-premises-storage-secured-by-zero-trust-data-access.md": {
	id: "the-uks-icloud-backdoor-demand-and-the-need-for-on-premises-storage-secured-by-zero-trust-data-access.md";
  slug: "the-uks-icloud-backdoor-demand-and-the-need-for-on-premises-storage-secured-by-zero-trust-data-access";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"the-zero-trust-data-gap.md": {
	id: "the-zero-trust-data-gap.md";
  slug: "the-zero-trust-data-gap";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"the-zero-trust-maturity-model-ztmm-and-why-ztda-is-critical-to-reaching-optimal-maturity.md": {
	id: "the-zero-trust-maturity-model-ztmm-and-why-ztda-is-critical-to-reaching-optimal-maturity.md";
  slug: "the-zero-trust-maturity-model-ztmm-and-why-ztda-is-critical-to-reaching-optimal-maturity";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"top-10-benefits-of-restricting-direct-access-to-the-storage-infrastructure.md": {
	id: "top-10-benefits-of-restricting-direct-access-to-the-storage-infrastructure.md";
  slug: "top-10-benefits-of-restricting-direct-access-to-the-storage-infrastructure";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"top-13-reasons-to-adopt-zero-trust-secure-virtual-data-rooms.md": {
	id: "top-13-reasons-to-adopt-zero-trust-secure-virtual-data-rooms.md";
  slug: "top-13-reasons-to-adopt-zero-trust-secure-virtual-data-rooms";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"top-13-reasons-to-use-a-zero-trust-secure-file-sharing-platform-for-business.md": {
	id: "top-13-reasons-to-use-a-zero-trust-secure-file-sharing-platform-for-business.md";
  slug: "top-13-reasons-to-use-a-zero-trust-secure-file-sharing-platform-for-business";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"top-6-reasons-you-need-zero-trust-file-sharing-management.md": {
	id: "top-6-reasons-you-need-zero-trust-file-sharing-management.md";
  slug: "top-6-reasons-you-need-zero-trust-file-sharing-management";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"top-7-advantages-of-an-overlay-service.md": {
	id: "top-7-advantages-of-an-overlay-service.md";
  slug: "top-7-advantages-of-an-overlay-service";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"top-8-reasons-for-zero-trust-storage-management.md": {
	id: "top-8-reasons-for-zero-trust-storage-management.md";
  slug: "top-8-reasons-for-zero-trust-storage-management";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"top-8-reasons-your-organization-needs-zero-trust-activity-tracking.md": {
	id: "top-8-reasons-your-organization-needs-zero-trust-activity-tracking.md";
  slug: "top-8-reasons-your-organization-needs-zero-trust-activity-tracking";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"top-reasons-to-add-zero-trust-data-access-to-illumio-core.md": {
	id: "top-reasons-to-add-zero-trust-data-access-to-illumio-core.md";
  slug: "top-reasons-to-add-zero-trust-data-access-to-illumio-core";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"top-reasons-to-add-zero-trust-data-access-to-palo-alto-cybersecurity.md": {
	id: "top-reasons-to-add-zero-trust-data-access-to-palo-alto-cybersecurity.md";
  slug: "top-reasons-to-add-zero-trust-data-access-to-palo-alto-cybersecurity";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"unstructured-data-access-and-sharing-controlled-and-secured-using-zero-trust-data-access.md": {
	id: "unstructured-data-access-and-sharing-controlled-and-secured-using-zero-trust-data-access.md";
  slug: "unstructured-data-access-and-sharing-controlled-and-secured-using-zero-trust-data-access";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"upholding-cybersecurity-for-architects-through-zero-trust-data-access.md": {
	id: "upholding-cybersecurity-for-architects-through-zero-trust-data-access.md";
  slug: "upholding-cybersecurity-for-architects-through-zero-trust-data-access";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"using-zero-trust-data-access-for-nist-compliance.md": {
	id: "using-zero-trust-data-access-for-nist-compliance.md";
  slug: "using-zero-trust-data-access-for-nist-compliance";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"using-zero-trust-data-access-to-meet-california-privacy-and-cybersecurity-standards.md": {
	id: "using-zero-trust-data-access-to-meet-california-privacy-and-cybersecurity-standards.md";
  slug: "using-zero-trust-data-access-to-meet-california-privacy-and-cybersecurity-standards";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"what-is-zero-trust-data-access-ztda.md": {
	id: "what-is-zero-trust-data-access-ztda.md";
  slug: "what-is-zero-trust-data-access-ztda";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"why-a-zero-trust-data-access-decentralized-data-platform-is-strategically-superior-to-centralized-cloud-file-access-sharing-and-collaboration.md": {
	id: "why-a-zero-trust-data-access-decentralized-data-platform-is-strategically-superior-to-centralized-cloud-file-access-sharing-and-collaboration.md";
  slug: "why-a-zero-trust-data-access-decentralized-data-platform-is-strategically-superior-to-centralized-cloud-file-access-sharing-and-collaboration";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"why-data-is-now-the-real-target.md": {
	id: "why-data-is-now-the-real-target.md";
  slug: "why-data-is-now-the-real-target";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"why-microsoft-centric-security-isnt-enough-the-case-for-zero-trust-data-access.md": {
	id: "why-microsoft-centric-security-isnt-enough-the-case-for-zero-trust-data-access.md";
  slug: "why-microsoft-centric-security-isnt-enough-the-case-for-zero-trust-data-access";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"why-organizations-need-zero-trust-data-access-as-a-managed-file-transfer-alternative.md": {
	id: "why-organizations-need-zero-trust-data-access-as-a-managed-file-transfer-alternative.md";
  slug: "why-organizations-need-zero-trust-data-access-as-a-managed-file-transfer-alternative";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"why-you-need-zero-trust-data-access-micro-segmentation.md": {
	id: "why-you-need-zero-trust-data-access-micro-segmentation.md";
  slug: "why-you-need-zero-trust-data-access-micro-segmentation";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"why-zero-trust-data-access-user-management-is-crucial-for-it.md": {
	id: "why-zero-trust-data-access-user-management-is-crucial-for-it.md";
  slug: "why-zero-trust-data-access-user-management-is-crucial-for-it";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"why-zero-trust-network-access-combined-with-zero-trust-data-access-could-have-prevented-the-tesla-breach.md": {
	id: "why-zero-trust-network-access-combined-with-zero-trust-data-access-could-have-prevented-the-tesla-breach.md";
  slug: "why-zero-trust-network-access-combined-with-zero-trust-data-access-could-have-prevented-the-tesla-breach";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"zero-trust-and-regulatory-compliance.md": {
	id: "zero-trust-and-regulatory-compliance.md";
  slug: "zero-trust-and-regulatory-compliance";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"zero-trust-data-access-to-meet-dib-cybersecurity-strategy-2024.md": {
	id: "zero-trust-data-access-to-meet-dib-cybersecurity-strategy-2024.md";
  slug: "zero-trust-data-access-to-meet-dib-cybersecurity-strategy-2024";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"zero-trust-security-model-must-include-zero-trust-data-access-ztda.md": {
	id: "zero-trust-security-model-must-include-zero-trust-data-access-ztda.md";
  slug: "zero-trust-security-model-must-include-zero-trust-data-access-ztda";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
