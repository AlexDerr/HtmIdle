export const useAutoTypers = () => useState<number>("autoTypers", () => 0);
export const useCostAutoTyper = () => useState<number>("costAutoTyper", () => 10)

export function purchaseAutoTyper(){
	const availableLines = useAvailableLines();
	const autoTypers = useAutoTypers();
	const costAutoTyper = useCostAutoTyper();

	if(availableLines.value >= costAutoTyper.value){
		availableLines.value -= costAutoTyper.value;
		autoTypers.value += 1;
		costAutoTyper.value = Math.floor(costAutoTyper.value * 1.25);
	}
}