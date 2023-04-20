// export const getKeys = <T>(obj: T) => Object.keys(obj) as Array<keyof T>

export const getKeys = <T extends { [key: string]: string }>(obj: T) =>
	Object.keys(obj) as Array<keyof T>
