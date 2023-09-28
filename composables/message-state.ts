export const useConsoleMessages = () => useState<string[]>('consoleMessages', () => ["Welcome to HtmIdle", "", "", "", ""]);


export function addMessage(message: string) {
	const consoleMessages = useConsoleMessages();
	consoleMessages.value.unshift(message);
	consoleMessages.value.splice(5, 1);
}