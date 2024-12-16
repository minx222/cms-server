export type PartialNull<T extends object> = {
	[K in keyof T]?: T[K] | null;
};
