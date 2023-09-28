export const useAvailableLines = () => useState<number>('availableLines', () => 0);
export const useTotalLines = () => useState<number>("totalLines", () => 0);

export const useClickIncrement = () => useState<number>("clickIncrement", () => 1);
export const useAutoIncrement = () => useState<number>("autoIncrement", () => useCalculateAutoIncrement());


export const useCalculateAutoIncrement = () => {
	const autoTypers = useAutoTypers();

	return autoTypers;
}

export function handleMainClick() {
	const availableLines = useAvailableLines();
	const totalLines = useTotalLines();
	const clickIncrement = useClickIncrement();

	availableLines.value += clickIncrement.value;
	totalLines.value += clickIncrement.value;
}


export async function initAddLoop(){
	const availableLines = useAvailableLines();
	const totalLines = useTotalLines();
	const autoIncrement = useAutoIncrement();
}