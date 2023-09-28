export const useConsoleMessages = () => useState<string[]>('consoleMessages', () => ["Welcome to HtmIdle", "", "", "", ""]);

export const useCurrentCount = () => useState<number>('currentCount', () => 0);
export const useTotalCount = () => useState<number>("totalCount", () => 0);

export const useClickIncrement = () => useState<number>("clickIncrement", () => 1);
export const useAutoIncrement = () => useState<number>("autoIncrement", () => 1);


export function addMessage(message: string) {
	const consoleMessages = useConsoleMessages();
	consoleMessages.value.unshift(message);
	consoleMessages.value.splice(5, 1);
}


export function handleMainClick() {
	const currentCount = useCurrentCount();
	const totalCount = useTotalCount();
	const clickIncrement = useClickIncrement();

	currentCount.value += clickIncrement.value;
	totalCount.value += clickIncrement.value;
}


export async function initAddLoop(){
	const currentCount = useCurrentCount();
	const totalCount = useTotalCount();
	const autoIncrement = useAutoIncrement();
}