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
"achieving-end-to-end-zero-trust-with-zscaler-and-fileflex.md": {
	id: "achieving-end-to-end-zero-trust-with-zscaler-and-fileflex.md";
  slug: "achieving-end-to-end-zero-trust-with-zscaler-and-fileflex";
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
"hippa-compliant-file-sharing.md": {
	id: "hippa-compliant-file-sharing.md";
  slug: "hippa-compliant-file-sharing";
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
"nist-sp-1800-35-how-data-level-enforcement-strengthens-zero-trust-security.md": {
	id: "nist-sp-1800-35-how-data-level-enforcement-strengthens-zero-trust-security.md";
  slug: "nist-sp-1800-35-how-data-level-enforcement-strengthens-zero-trust-security";
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
"the-zero-trust-data-gap.md": {
	id: "the-zero-trust-data-gap.md";
  slug: "the-zero-trust-data-gap";
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
"what-is-zero-trust-data-access-ztda.md": {
	id: "what-is-zero-trust-data-access-ztda.md";
  slug: "what-is-zero-trust-data-access-ztda";
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
"zero-trust-and-regulatory-compliance.md": {
	id: "zero-trust-and-regulatory-compliance.md";
  slug: "zero-trust-and-regulatory-compliance";
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
